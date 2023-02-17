import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

export default function HowTo() {
  return (
    <Row
      className="align-items-center bubble-background text-center"
      id="how-to"
    >
      <div className="h-100 position-relative p-0 margin-top-100">
        <h4>How to buy a miner on KOR’s DAPP</h4>
        <video
          autoPlay={false}
          controls={true}
          loop
          src="video/Revised kor walkthrough.mp4"
          className="w-80"
        />
      </div>
      <div className="h-100 position-relative p-0 margin-top-100">
        <h4>How to add USDC to metamask</h4>
        <video
          autoPlay={false}
          controls={true}
          loop
          src="video/USDC vid.mp4"
          className="w-80"
        />
      </div>
      <div className="h-100 position-relative p-0 margin-top-100">
        <h4>How to deposit money to crypto.com</h4>
        <video
          autoPlay={false}
          controls={true}
          loop
          src="video/How to buy Bitcoin.mp4"
          className="w-80"
        />
      </div>
      <div className="h-100 position-relative p-0 margin-top-100">
        <h4>How to withdraw and deposit crypto to metamask</h4>
        <video
          autoPlay={false}
          controls={true}
          loop
          src="video/How to ADD MONEY to METAMASK.mp4"
          className="w-80"
        />
      </div>
      <div className="h-100 position-relative p-0 margin-top-100">
        <h4>How to sell your NFT on Opensea</h4>
        <video
          autoPlay={false}
          controls={true}
          loop
          src="video/How to Sell NFTs on OpenSea.mp4"
          className="w-80"
        />
      </div>
    </Row>
  );
}
