import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import nftContractAbi from "../Abis/kor-nft-abi.json";
import { secondsToYMD, ymdToString } from "../services/TimeConverter";
require("dotenv").config();

export default function KorKlub() {
  const [isWalletIntalled, setIsWalletInstalled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [nftTokens, setNftTokens] = useState([]);

  const { chainId, active } = useWeb3React();
  const validNetwork =
    chainId === parseInt(process.env.REACT_APP_CHAIN_ID) ? true : false;

  let KorMintContract;
  useEffect(async () => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "owner", text: "Owner", sort: false },
    { dataField: "minerType", text: "Miner Type", sort: true },
    { dataField: "hashrate", text: "Hash Rate", sort: true },
    { dataField: "amount", text: "Amount", sort: true },
    { dataField: "remaining_days", text: "Remaining days", sort: true },
    { dataField: "total_earnings", text: "Total Earning", sort: true },
  ];

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
  });

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-success" onClick={handleClick}>
          Export to CSV
        </button>
      </div>
    );
  };

  const updateNFTList = async () => {
    const totalSupply = await KorMintContract.totalSupply();
    let newArr = [];
    for (let i = 0; i < totalSupply; i++) {
      const token = await KorMintContract.tokenIdToToken(i + 1);
      const minerIndex = token.index.toNumber();
      const miner = await KorMintContract.miners(minerIndex);
      const minerType = miner.minerType.toString();
      const totalEarning =
        Math.round((token.totalEarning.toNumber() * 100) / 10 ** 6) / 100;
      const mintTime = token.mintTime;
      const currentTimeInSec = Math.round(+new Date() / 1000);
      const passedTimeInSec = currentTimeInSec - mintTime;
      const availableTime =
        passedTimeInSec > 4 * 365 * 24 * 60 * 60
          ? 0
          : 4 * 365 * 24 * 60 * 60 - passedTimeInSec;

      const owner = await KorMintContract.ownerOf(i + 1);
      const remaining_days =
        availableTime > 0 ? ymdToString(secondsToYMD(availableTime)) : "0 days";
      newArr.push({
        id: i + 1,
        owner: owner.substring(0, 5) + " ... " + owner.substring(38),
        minerType: minerType,
        hashrate: (miner.hashrate.toNumber() * token.amount.toNumber()) / 4,
        amount: token.amount.toNumber() / 4,
        remaining_days: remaining_days,
        total_earnings: totalEarning + " USDC",
      });
    }
    setIsLoading(false);
    setNftTokens(newArr);
  };

  useEffect(async () => {
    if (validNetwork && active && window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      KorMintContract = new ethers.Contract(
        process.env.REACT_APP_NFT_ADDRESS,
        nftContractAbi,
        provider.getSigner()
      );
      updateNFTList();
    }
  }, [validNetwork, active]);

  return (
    <Row className="align-items-center bubble-background fixed-menubar vh-100">
      {!isWalletIntalled ? (
        <Row>
          <div className="text-center fs-2 fw-bold text-body mt-5 mb-5">
            Please install wallet on your browser
          </div>
        </Row>
      ) : !active ? (
        <Row>
          <div className="text-center fs-2 fw-bold text-body mt-5 mb-5">
            Please connect your wallet
          </div>
        </Row>
      ) : !validNetwork ? (
        <Row>
          <div className="text-center fs-2 fw-bold text-body mt-5 mb-5">
            Please switch your network into Ethereum main network
          </div>
        </Row>
      ) : (
        <Row className="nft-rows">
          <div>
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                <h3 className="fw-bold">KOR NFT EARNINGS</h3>
                <ToolkitProvider
                  bootstrap4
                  keyField="id"
                  data={nftTokens}
                  columns={columns}
                  exportCSV
                >
                  {(props) => (
                    <div className="table-font-size">
                      <div className="d-flex justify-content-end mb-3">
                        <MyExportCSV {...props.csvProps} />
                      </div>
                      <BootstrapTable
                        defaultSorted={defaultSorted}
                        pagination={pagination}
                        {...props.baseProps}
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </>
            )}
          </div>
        </Row>
      )}
    </Row>
  );
}
