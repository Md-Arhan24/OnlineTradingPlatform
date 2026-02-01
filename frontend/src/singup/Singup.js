import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingupComponent from "./SingupComponent";

function Singup() {
  return (
    <div className="container">
      <div className="row m-5 p-5 text-center">
        <h2>Open a free demat and trading account online</h2>
        <h5 className="text-secondary">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders{" "}
        </h5>
      </div>

      <div className="row mt-5">
        <div className="col">
          <img className="img-fluid w-75" src="media/account_open.svg"></img>
        </div>
        <div className="col">
          <SingupComponent />
          Already have an account?
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Singup;
