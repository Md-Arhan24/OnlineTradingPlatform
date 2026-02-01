import React from "react";
import CreateTicket from "./CreateTicket";

const SupportTicket = () => {
  return (
    <div className="container">
      <diiv className="row">
        <CreateTicket
          icon="fa-solid fa-plus"
          className="p-2"
          name="Account Holder"
          l1="Resident individual

"
          l2="Minor
"
          l3="Non Resident Indian (NRI)"
          l4="Company, Partnership, HUF and LLP
"
          l5="Glossary"
        />
      </diiv>
      <diiv className="row">
        <CreateTicket
          name="Your Zerodha Account"
          l1="Account modification
"
          icon="fa-solid fa-circle-user"
          l2="Client Master Report (CMR) and Depository Participant (DP)

"
          l3="Nomination
"
          l4="Transfer and conversion of securities

"
          l5="Resident individualMinor"
        />
      </diiv>
      <diiv className="row">
        <CreateTicket
          name="Kite"
          l1="IPO

"
          icon="fa-solid fa-arrow-left"
          l2="Trading FAQs

"
          l3="Margin Trading Facility (MTF) and Margins
l"
          l4="Charts and orders

"
          l5="Alerts and Nudges
Genera"
        />
      </diiv>
      <diiv className="row">
        <CreateTicket
          name="Funds"
          l1="Add money



" icon="fa-solid fa-indian-rupee-sign"
          l2="Withdraw money

"
          l3="Add bank accounts
"
          
          l4="eMandates"
        />
      </diiv>
      <diiv className="row">
        <CreateTicket
          name="Console"
          l1="Protfolio

" icon="fa-solid fa-terminal"
          l2="
Corporate actions


"
          l3="Funds statement
"
          l4="Reports

"
          l5="Profile &
Segments"
        />
      </diiv>
      <diiv className="row">
        <CreateTicket
          name="Coin"
          l1="Mutual funds



" icon="fa-regular fa-circle"
          l2="National Pension Scheme (NPS)

"
          l3="Features on Coin
"
          l4="Payments and Orders

"
          l5="General"
        />
      </diiv>
      
    </div>
  );
};

export default SupportTicket;
