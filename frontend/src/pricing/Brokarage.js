import React, { Component } from "react";

function Brokarage() {
  return (
    <div className="container">
      <h3 className="mt-5 text-center p-2 fs-5 mb-5">
        <a href="#" className="anchor text-blue">
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </h3>

      {/* table for charges */}
      <div className="row mt-5 mb-5">
        <h2 className="mt-5 fs-3 text-muted mb-2">Charges for account opening</h2>

        <table border={"1"} className="bg-muted"> 
            <tr className="border">
                <th  style={{padding:"1%"}} className="text-muted">Type of Account</th>
                <th>Charges</th>
            </tr>
            <tr>
                <td style={{padding:"1%"}}>Online account</td>
                <td style={{padding:"1%"}}><button className="btn btn-success">free</button></td>
            </tr>
             <tr>
                <td style={{padding:"1%"}}>Offline account</td>
                <td style={{padding:"1%"}}><button className=" btn btn-success">free</button></td>
            </tr>
             <tr >
                <td style={{padding:"1%"}}>NRI account (offline only)</td>
                <td style={{padding:"1%"}}><p>₹ 500</p></td>
            </tr>
             <tr>
                <td style={{padding:"1%"}}>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                <td style={{padding:"1%"}}><p>₹ 500</p></td>
            </tr>

        </table>
      </div>

      <div className="row">
        <h4 className="text-muted fs-5 mb-2">Disclaimer</h4>
        <p className="fs-6 mb-5">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
      </div>
    </div>
  );
}

export default Brokarage;
