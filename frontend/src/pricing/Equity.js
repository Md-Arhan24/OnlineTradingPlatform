import React from 'react'

const Equity = () => {
  return (
    <div className='container'>
        <div className='row'>
            <table  className="table" border={"1"}>
                <tr  style={{borderBottom:"1px solid black"}}>
                    <th>            </th>
                    <th style={{ padding: "2%" }}>Equity delivery</th>
                    <th>Equity intraday</th>
                    <th>F&O - Futures</th>
                    <th>F&O - Options</th>
                </tr>
                <tr>
                    <td><b className='move-side text-muted'>Brokerage</b></td>
                     <td>Zero Brokerage</td>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>Flat Rs. 20 per executed order</td>
                   
                </tr>
                 <tr>
                    <td><b className='move-side text-muted'>STT/CTT</b></td>
                     <td>0.1% on buy & sell</td>
                    <td>0.025% on the sell side</td>
                    <td>0.02% on the sell side</td>
                     <td><ul>
                        <li>0.125% of the intrinsic value on options that are bought and exercised
</li> <li>0.1% on sell side (on premium)</li></ul></td>
                </tr>
                 <tr>
                    <td><b className='move-side text-muted'>Transaction charges</b></td>
                    <td>Zero Brokerage</td>
                    <td>NSE: 0.00297%<br/>
BSE: 0.00375%</td>
                    <td>NSE: 0.00297%<br/>
BSE: 0.00375%</td>
                    <td>NSE: 0.00173%<br/>
BSE: 0</td>         
                    
                </tr>
                 <tr>
                    <td><b className='move-side text-muted'>GST</b></td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td>	18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                 <tr>
                    <td><b className='move-side text-muted'>SEBI charges</b></td>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                </tr>
                 <tr>
                    <td><b className='move-side text-muted'>Stamp charges</b></td>
                    <td>0.015% or ₹1500 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                    <td>0.002% or ₹200 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy sider</td>
                </tr>
            </table>
        </div>

    </div>
  )
}

export default Equity