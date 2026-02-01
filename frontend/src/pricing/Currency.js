import React from "react";

const Currency = () => {
  return (
    <div className="container">
      <div className="row">
        <table className="table" border={"1"}>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th> </th>
            <th className="text-muted" style={{ padding: "2%" }}>
              Currency futures
            </th>
            <th className="text-muted" style={{ padding: "2%" }}>
              Currency options
            </th>
          </tr>
          <tr>
            <td>
              <b className="text-muted">Brokerage</b>
            </td>
            <td>No STT</td>
            <td>No STT</td>
          </tr>
          <tr>
            <td>
              <b className="text-muted">STT/CTT</b>
            </td>
            <td>
              NSE: 0.00035%<br></br>
              BSE: 0.00045%
            </td>
            <td>
              NSE: 0.0311%
              <br />
              BSE: 0.001%
            </td>
          </tr>
          <tr>
            <td>
              <b className="text-muted">GST</b>
            </td>
            <td> 18% on (brokerage + SEBI charges + transaction charges) </td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td>
              <b className="text-muted">SEBI charges</b>
            </td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <td>
              <b className="text-muted">Stamp charges</b>
            </td>
            <td>0.0001% or ₹10 / crore on buy side</td>
            <td>0.0001% or ₹10 / crore on buy side</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Currency;
