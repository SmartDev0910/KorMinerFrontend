import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

export default function IntroVideo() {
  const [isiOS, setIsiOS] = useState(false);

  useEffect(async () => {
    setIsiOS(iOS());
  }, []);

  const iOS = () => {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  };

  return (
    <Row className="align-items-center" id="intro-video">
      <div className="h-100 position-relative p-0">
        <video
          autoPlay={isiOS ? false : true}
          controls={isiOS ? true : false}
          muted
          loop
          src="video/Tech_Activation_Logo_1080p1.mp4"
          className="w-100"
        />
      </div>
    </Row>
  );
}
