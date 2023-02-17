import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Mining() {
  return (
    <Row className="align-items-center bubble-background" id="mining">
      <div className="about-text">
        <div className="mb-0">
          <Fade left>
            <div>
              <span className="fs-3 fw-bold text-body">
                Benefits of mining:{" "}
              </span>
              Crypto miners are the perfect investment for people who don't have
              the time to make technical decisions about when to buy and sell
              their crypto. Mining has shown to be a safer alternative due to
              profits being made everyday, causing a guaranteed ROI to be
              reached in the future. Think of crypto mining as strong linear
              growth rather than dealing with the volatile movement of the
              current crypto markets.
            </div>
          </Fade>
        </div>
        <br></br>
        <div className="mb-0">
          <Fade left>
            <div>
              <span className="fs-3 fw-bold text-body">Our service: </span>
              At KOR we decided to do things different from the current cloud
              mining model. We believe Web3 is the future. Following suit with
              that model, Your mining contracts will now be stored as NFTs. The
              NFTs will be located on the blockchain of the coin you are mining
              and can be traded publicly on native NFT marketplaces. To make
              sure everyone who uses our service receives their ROI, we have
              given a length of 4 years for each contract.
            </div>
          </Fade>
        </div>
        <br></br>
        <div className="mb-0">
          <Fade left>
            <div>
              <span className="fs-3 fw-bold text-body">Why KOR? </span>
              We are easy and affordable. We have invested in state of the art
              immersion cooling setups that will allow us to generate more
              hashrate. This is because when a miner is submerged in dielectric
              fluid it can bring the internal temperature of the miner lower
              than the traditional air cooled setup. In lower temperatures the
              miners can be “Overclocked” allowing the miner to perform above
              factory specifications, in turn producing more hashrate. From this
              increase in hashrate we can lower prices to give you the best deal
              on Web3. We also handle all of the maintenance in house, giving
              you zero down time when you mine with us. With our integration on
              Web3, you now can sell your miner peer to peer and receive your
              payment immediately without having to deal with 3rd parties such
              as Ebay and Alibaba.
            </div>
          </Fade>
        </div>
        <br></br>
        <div className="mb-0">
          <Fade left>
            <div>
              <span className="fs-3 fw-bold text-body">Payouts: </span>
              Mining profits will be sent to KORs mining wallet. The smart
              contract of NFTs will determine how much profit was mined in the
              given time period minus the service fee which includes
              electricity, hosting, and maintenance before sending to your
              wallet that is holding the NFT. Profits will be sent as the coin
              that is mined. The service fee is 25% of the total amount that was
              mined. Payouts are sent every two weeks.
            </div>
          </Fade>
        </div>
        <br></br>
        <div className="mb-0">
          <Fade left>
            <div>
              <span className="fs-3 fw-bold text-body">How to Join: </span>
              With our integration to Web3 it is easier than ever to join KOR.
              <br></br>
              <div className="d-flex justify-content-center">
                1.Go to Mining tab
                <br></br>
                2.Click Start Mining
                <br></br>
                3.Browse and select the Coin of choice
                <br></br>
                4.Pick the contract of choice
                <br></br>
                5.Click Mint Contract
                <br></br>
                6.Confirm on Wallet
              </div>
            </div>
          </Fade>
        </div>
        <br></br>
        <div className="mb-0">
          <Fade left>
            <div>
              You will receive the NFT in your wallet as a receipt of the
              contract you have selected.
            </div>
          </Fade>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3 mb-5">
        <Button variant="primary" size="lg">
          <Link to="#" className="minerLink">
            Mint date 9/5/22
          </Link>
        </Button>{" "}
      </div>
    </Row>
  );
}
