import React, { Component } from "react";
function Team() {
  return (
    <div
      className="container border-top mt-5"
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
    >
      <div className="row ">
        <div className="col ml-5 text-black " style={{ marginLeft: "10vw" }}>
          <p className="lh-lg">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="lh-lg">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="lh-lg">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col mr-5 text-black " style={{ marginRight: "10vw" }}>
          <p className="lh-lg">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors
          </p>
          <p className="lh-lg">
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p className="lh-lg">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
      <div className="row mt-5 p-5 ">
        <h4 className="text-muted text-center mb-5">People</h4>
        <div className="col text-center mt-5" style={{ marginRight: "10vw" }}>
          <img
            src="media\nithinKamath.jpg"
            className="rounded-circle h-50"
            alt="nithin kamath"
            style={{height:"20%"}}
          ></img>
          <h5>Nithin Kamath
</h5>
    <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col mt-5" style={{marginLeft:"-12vw"}}>
          <p className="mb-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
