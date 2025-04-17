import React, {useEffect, useState} from "react";
import { Card, CardContent } from "@mui/material";
import { currencyFormat } from "../../utils/formatters";
import "./BankAccountTotal.css";

const BankAccountTotals = ({ accounts, pending, label }) => {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
  const totalMinusPending = totalBalance - (Array.isArray(pending) ? pending.reduce((sum, pend) => + (pend.balance || 0), 0) :0);

  if(accounts.length === 0){
    return <div>Loading Bank Account Data ...</div>
  }

  if(label != "Total After Pending")
  { 
   return (
     <div className="grid gap-4 p-4 ">
      <div className="p-4 shadow-lg eachBankAccount">
        <h2 className="text-xl font-semibold smallerMargin">{label}</h2>
        <p className="text-2xl font-bold smallerMargin">{currencyFormat.format(totalBalance)}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account) => (
         <div key={account.id} className="eachBankAccount">
            <h3 className="text-lg font-medium smallerMargin">{account.name}</h3>
            <p className="text-xl font-bold smallerMargin">{currencyFormat.format(account.balance)}</p>
         </div>
        ))}
      </div>
    </div>
   );
  }


  return (
    <div className="grid gap-4 p-4 ">
     <div className="p-4 shadow-lg eachBankAccount">
       <h2 className="text-xl font-semibold smallerMargin">{label}</h2>
       <p className="text-2xl font-bold smallerMargin">{currencyFormat.format(totalMinusPending)}</p>
     </div>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
       {pending.map((pend) => (
        <div key={pend.id} className="eachBankAccount">
           <h3 className="text-lg font-medium smallerMargin">{pend.name}</h3>
           <p className="text-xl font-bold smallerMargin">{currencyFormat.format(pend.balance)}</p>
        </div>
       ))}
     </div>
   </div>
  );
};

export default BankAccountTotals;