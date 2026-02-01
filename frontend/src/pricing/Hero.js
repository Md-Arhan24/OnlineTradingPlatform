import React, { Component } from "react";

function Hero() {
  return (
   <div className="container">
    <div className="row m-5 p-5 text-center">
      <h1 className="text-muted fs-3">Charges</h1>
      <h3 className="fs-5 text-muted">List of all charges and taxes</h3>
    </div>
    <div className="row mt-5">
      <div className="col">
        <img src="media/pricing0.svg" className="img-fluid h-75"></img>
        <h2 className="text-muted">Free equity delivery</h2>
        <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className="col">
         <img src="media/other-trades.svg" className="img-fluid h-75"></img>
        <h2 className="text-muted">Free equity delivery</h2>
        <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className="col">
         <img src="media/pricing0.svg" className="img-fluid h-75"></img>
        <h2 className="text-muted">Free equity delivery</h2>
        <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>

    </div>
   </div>
  );
}

export default Hero;
