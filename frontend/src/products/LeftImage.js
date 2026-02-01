import React, { Component } from "react";

function LeftImage({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 text-start mt-5 ">
          <h1 className="fs-3 mt-5 custom-margin">{productName}</h1>
          <p className="text-muted fs-5">{productDescription}</p>
          <div className="row">
            <div className="row">
              <a className="col anchor-new" href={tryDemo}>
                {" "}
                TryDemo <i class="fa-solid fa-right-long"></i>
              </a>
              <a className="col anchor-new" href={learnMore}>
                {" "}
                LearnMore <i class="fa-solid fa-right-long"></i>
              </a>
            </div>
            <div className="row mt-3">
              <a className="col" href={googePlay}>
                <img src="media/googlePlayBadge.svg" alt="google imag"></img>
              </a>
              <a className="col" href={appStore}>
                <img src="media\appstoreBadge.svg" alt="google imag"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="col-8 mr-5 h-75 text-center">
          <img src={imageUrl} className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
