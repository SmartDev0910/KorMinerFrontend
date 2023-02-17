import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useEffect } from "react";
import { Row, Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import toast, { Toaster } from "react-hot-toast";
import { injected } from "../utils/connector";
require("dotenv").config();

export default function NavBar(props) {
  console.log("====", props);
  const showBack = props.showBack;
  const { chainId, active, activate, deactivate, account } = useWeb3React();
  const navigate = useNavigate();

  useEffect(() => {
    if (active) {
      if (chainId !== parseInt(process.env.REACT_APP_CHAIN_ID)) {
        toast.error(
          "You are on wrong network. Please switch to Ethereum Mainnet to continue"
        );
      }
    }
  }, [chainId, active]);

  async function connect(injected) {
    activate(injected);
  }

  async function disConnect(injected) {
    deactivate(injected);
  }

  const renderButton = (
    <>
      {active ? (
        <div className="connectedWallet">
          <div className="walletAddress">
            {account.substring(0, 5) + " ... " + account.substring(38)}
          </div>
          <Button
            variant="primary"
            size="lg"
            className="connect-wallet-btn"
            onClick={() => disConnect(injected)}
          >
            Disconnect
          </Button>
        </div>
      ) : (
        <Button
          variant="primary"
          size="lg"
          className="connect-wallet-btn"
          // onClick={() => connect(injected)}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Row className="menubar position-fixed vw-100">
      <Navbar bg="light" className="navbar-background">
        <>
          {showBack ? (
            <Row className="m-auto w-80">
              <div className="d-flex justify-content-between w-50">
                <Nav className="fw-bold">
                  <Nav.Link onClick={() => goBack()}>
                    <BsFillArrowLeftCircleFill />
                    &nbsp;Back
                  </Nav.Link>
                </Nav>
              </div>
              <div className="d-flex align-items-center justify-content-end w-50">
                <div>{renderButton}</div>
              </div>
            </Row>
          ) : (
            <Row className="m-auto w-80">
              <div className="d-flex justify-content-between nav-bar-left">
                <Navbar.Brand
                  href="#home"
                  className="d-flex align-items-center navbar-brand"
                >
                  <img src="images/logo.jpg" className="logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-5 align-items-center fw-bold nav-bar-font">
                  <Nav.Link href="#home" className="text-dark">
                    HOME
                  </Nav.Link>
                  <Nav.Link href="#about-us" className="text-dark">
                    ABOUTUS
                  </Nav.Link>
                  <Nav.Link href="#mining" className="text-dark">
                    MINING
                  </Nav.Link>
                  <Nav.Link href="#roadmap" className="text-dark">
                    ROADMAP
                  </Nav.Link>
                  {/* <Nav.Link href="/korklub" className="text-dark">
                    KORKlub
                  </Nav.Link> */}
                  {/* <Nav.Link href="/howto" className="text-dark">
                    HOWTO
                  </Nav.Link> */}
                  <Nav.Link
                    href="pdf/Whitepaper.pdf"
                    className="text-dark"
                    target="_blank"
                  >
                    WHITEPAPER
                  </Nav.Link>
                  <Nav.Link
                    href="https://github.com/coinscope-co/audits/blob/main/korypto/audit.pdf"
                    className="text-dark"
                    target="_blank"
                  >
                    AUDIT
                  </Nav.Link>
                </Nav>
              </div>
              <div className="d-flex align-items-center nav-bar-right">
                <div className="me-2">{renderButton}</div>
                <div className="d-flex">
                  <a href="https://www.instagram.com/korblockchain/">
                    <img
                      src="images/instagram.png"
                      alt="instagram link"
                      className="img-fluid social-media"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="images/opensea.png"
                      alt="opensea link"
                      className="img-fluid social-media"
                    />
                  </a>
                  <a href="https://discord.gg/KXcQzhcRUb">
                    <img
                      src="images/discord.png"
                      alt="discord link"
                      className="img-fluid social-media"
                    />
                  </a>
                  <a href="https://twitter.com/KorBlockchain">
                    <img
                      src="images/twitter.png"
                      alt="twitter link"
                      className="img-fluid twitter"
                    />
                  </a>
                </div>
              </div>
            </Row>
          )}
        </>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: "white",
                paddingLeft: 40,
                paddingRight: 40,
                fontWeight: 500,
              },
            },
            error: {
              style: {
                background: "white",
                color: "black",
                paddingLeft: 40,
                paddingRight: 40,
                fontWeight: 500,
              },
            },
          }}
        />
      </Navbar>
    </Row>
  );
}
