import React from "react";

function RightImage({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googePlay,
  appStore,
}) {
  return <div className="container">
        <div className="row">
            <div className="col-8">
                <img src={imageUrl} className="img-fluid ml-5"></img>
            </div>
            <div className="col-4 text-start mt-5" >
                <h1 className="fs-3 mt-3">{productName}</h1>
                <p className="text-muted fs-5">{productDescription}</p>
                <div className="row">
                    <div className="row">
                        <a className="col anchor-new" href={tryDemo}> TryDemo <i class="fa-solid fa-right-long"></i></a> 
                        <a className="col anchor-new" href={learnMore}> LearnMore <i class="fa-solid fa-right-long"></i></a>
                    </div>
                    <div className="row mt-3 mb-5">
                        <a  className="col" href={googePlay}><img src="media/googlePlayBadge.svg" alt="google imag"></img></a> 
                        <a className="col" href={appStore}><img src="media\appstoreBadge.svg" alt="google imag"></img></a>
                    </div>
                </div>
            </div>
        </div>
  </div>;
}

export default RightImage;
