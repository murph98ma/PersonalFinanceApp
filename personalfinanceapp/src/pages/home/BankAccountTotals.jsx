import React, {useEffect, useState} from "react";
import { Card, CardContent } from "@mui/material";

const BankAccountTotals = ({ accounts }) => {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div className="grid gap-4 p-4">
      <Card className="p-4 shadow-lg">
        <h2 className="text-xl font-semibold">Total Balance</h2>
        <p className="text-2xl font-bold">${totalBalance.toFixed(2)}</p>
      </Card>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <Card key={account.id} className="p-4 shadow-md">
            <h3 className="text-lg font-medium">{account.name}</h3>
            <p className="text-xl font-bold">${account.balance.toFixed(2)}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BankAccountTotals;