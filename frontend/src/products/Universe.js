import React, { Component } from "react";

function Universe() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mt-5 fs-4">The Zerodha Universe</h1>
      <p className="fs-5 mt-3 mb-3">
        Extend your trading and investment experience even further with our
        partner platforms{" "}
      </p>
      <div className="row mt-5">
        <div className="col">
          <img
            src="media/zerodhaFundhouse.png"
            className="img-fluid logo-uni"
          ></img>
          <p
            className="text-gray text-center mt-3"
            style={{ fontSize: 13, width: "20vw",marginLeft:"20%"}}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
             <div className="col">
          <img
            src="media/sensibullLogo.svg"
            className="img-fluid logo-uni"
          ></img>
          <p
            className="text-gray text-center mt-3 "
            style={{ fontSize: 13, width: "20vw",marginLeft:"20%"}}
          >
            Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

          </p>
        </div>
        </div>
        <div className="col">
             <div className="col">
          <img
            src="media/tijori.svg"
            className="img-fluid logo-uni"
          ></img>
          <p
            className="text-gray text-center mt-3 "
            style={{ fontSize: 13, width: "20vw",marginLeft:"20%"}}
          >
           Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
          </p>
        </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col">
          <img
            src="media/streakLogo.png"
            className="img-fluid logo-uni"
          ></img>
          <p
            className="text-gray text-center mt-3"
            style={{ fontSize: 13, width: "20vw",marginLeft:"20%"}}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
             <div className="col">
          <img
            src="media/smallcaseLogo.png"
            className="img-fluid logo-uni"
          ></img>
          <p
            className="text-gray text-center mt-3 "
            style={{ fontSize: 13, width: "20vw",marginLeft:"20%"}}
          >
            Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

          </p>
        </div>
        </div>
        <div className="col">
             <div className="col">
          <img
            src="media/ditto-logo.png"
            className="img-fluid logo-uni"
          ></img>
          <p
            className="text-gray text-center mt-3 "
            style={{ fontSize: 13, width: "20vw",marginLeft:"20%"}}
          >
           Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
          </p>
        </div>
        </div>
      </div>
      <button className="btn btn-primary mb-5 p-1 px-4 fs-5 ">
        SingUp for free
      </button>
    </div>
  );
}

export default Universe;
