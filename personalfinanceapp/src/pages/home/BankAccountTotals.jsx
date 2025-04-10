import React, {useEffect, useState} from "react";
import { Card, CardContent } from "@mui/material";
import "./BankAccountTotal.css";

const BankAccountTotals = ({ accounts }) => {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  if(accounts.length === 0){
    return <div>Loading Bank Account Data ...</div>
}

  return (
    <div className="grid gap-4 p-4">
      <div className="p-4 shadow-lg eachBankAccount">
        <h2 className="text-xl font-semibold smallerMargin">Total Balance</h2>
        <p className="text-2xl font-bold smallerMargin">${totalBalance.toFixed(2)}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account) => (
         <div key={account.id} className="eachBankAccount">
            <h3 className="text-lg font-medium smallerMargin">{account.name}</h3>
            <p className="text-xl font-bold smallerMargin">${account.balance.toFixed(2)}</p>
         </div>
        ))}
      </div>
    </div>
  );
};

export default BankAccountTotals;