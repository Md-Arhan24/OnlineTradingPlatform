import React, { Component } from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <RightImage
        imageUrl="media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=" "
        learnMore=" "
        googePlay=" "
        appStore=" "
      />
      <LeftImage
        imageUrl="media/console.png"
        productName="Console"
        productDescription={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        tryDemo=""
        learnMore=""
        googePlay=""
        appStore=""
      />
       <RightImage
        imageUrl="media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=" "
        learnMore=" "
        googePlay=" "
        appStore=" "
      />
      <LeftImage
        className=""
        imageUrl="media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription=
          " Build powerful trading platforms and experiences with our super simple HTTP \JSON APIs If you are a startup, build your investment app and showcase it to our clientbase."
        
        tryDemo=""
        learnMore=""
        googePlay=""
        appStore=""
      />
       <RightImage
        imageUrl="media/varsity.png"
        productName="Varisity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.

 ."
        tryDemo=" "
        learnMore=" "
        googePlay=" "
        appStore=" "
      />
      <h5 className="text-center m-5 p-5">Want to know more about our technology stack? Check out the <a href="#blog" className="anchor" style={{color:"blue"}}>Zerodha.tech</a> blog.</h5>
      <Universe />
    </>
  );
}

export default ProductsPage;
