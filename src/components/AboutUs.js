import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

export default function AboutUs() {
  const aboutText = [
    "Let's face it. Most people are either too busy, or don't have the infrastructure to host a crypto miner.",
    "Crypto miners are loud, hot, and difficult to set up for people new to the crypto world, or not very well versed with tech in general. Hours can be spent trying to find a trusted vendor, compatible wallets, as well as the right mining pool, setting up electricity & ventilation, maintenance, and monitoring activity. With all of these tasks at hand, the immense passive income opportunities that crypto mining births are inaccessible to the majority of the public.",
    "At KOR, we believe everyone should be able to participate in crypto mining. With our knowledge, experience, and infrastructure we have the ability to help those who want to dive into the fruitful world of crypto mining by the click of a button.",
  ];
  return (
    <Row className="align-items-center bubble-background" id="about-us">
      <div className="about-text">
        <div className="mb-0">
          <Fade left>
            <div>{aboutText[0]}</div>
          </Fade>
        </div>
        <br></br>
        <div className="mb-0">
          <Fade left>
            <div>{aboutText[1]}</div>
          </Fade>
        </div>
        <br></br>
        <div className="mb-0">
          <Fade left>
            <div>{aboutText[2]}</div>
          </Fade>
        </div>
      </div>
      <Row className="teammembers">
        <Col>
          <div className="d-flex justify-content-center">
            <img
              src="images/teammembers/1.png"
              alt="teammember"
              className="img-fluid profile"
            />
          </div>
          <div className="text-center mt-3">Chase Balliette</div>
          <div className="text-center mt-3">Founder</div>
          <div className="text-center mt-3">
            <a href="https://www.linkedin.com/in/chase-balliette-17ab7a1ab/">
              LinkedIn
            </a>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center">
            <img
              src="images/audit.png"
              alt="teammember"
              className="img-fluid audit"
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <img
              src="images/teammembers/2.png"
              alt="teammember"
              className="img-fluid profile"
            />
          </div>
          <div className="text-center mt-3">Benjamin Adamson</div>
          <div className="text-center mt-3">CTO</div>
          <div className="text-center mt-3">
            <a href="https://www.linkedin.com/in/benjamin-adamson-5a084a242/">
              LinkedIn
            </a>
          </div>
        </Col>
      </Row>
    </Row>
  );
}
