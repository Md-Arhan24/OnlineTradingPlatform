import React from 'react'

const Commodity = () => {
  return (
    <div className='container'>
        <div className='row' >
            <table className="table" border={"1"}>
                <tr style={{ borderBottom: "1px solid black" }}>
                    <th> </th>
                    <th style={{ padding: "2%" }} className='text-muted'>Commodity futures</th>
                    <th style={{ padding: "2%" }} className='text-muted'>Commodity options</th>
                   
                </tr>
                <tr>
                    <td><b className='text-muted'>Brokerage</b></td>
                    <td>0.03% or ₹ 20/executed order whichever is lower</td>
                    <td>₹ 20/executed order</td>
                   
                </tr>
                 <tr>
                    <td><b className='text-muted' >STT/CTT</b></td>
                    <td>0.01% on sell side (Non-Agri)	</td>
                    <td>0.05% on sell side</td>
                   
                </tr>
                 <tr>
                    <td><b className='text-muted'>Transaction charges</b></td>
                    <td>MCX: 0.0021%
NSE: 0.0001%</td>
                    <td>MCX: 0.0418%
NSE: 0.001%</td>
                   
                </tr>
                 <tr>
                    <td><b className='text-muted'>GST</b></td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                   
                </tr>
                 <tr>
                    <td><b className='text-muted'>SEBI charges</b></td>
                    <td>	Agri:
₹1 / crore
Non-agri:
₹10 / crore</td>
                    <td>₹10 / crore</td>
                   
                </tr>
                 <tr>
                    <td><b className='text-muted'>Stamp Charges</b></td>
                    <td>	0.002% or ₹200 / crore on buy side</td>
                    <td>	0.003% or ₹300 / crore on buy side</td>
                   
                </tr>
            </table>
        </div>

    </div>
  )
}

export default Commodity