import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransactionTable.css";
import { getTransactionData } from "./getAPICalls";

function DataTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactionTableData = async () => {
      const data = await getTransactionData();
      setTransactions(data);
    };

    getTransactionTableData();
  }, []);

  if (transactions.length === 0) {
    return <div>Loading Transaction Data...</div>;
  }

  // Define columns dynamically from the transaction keys
  const columns = ["date", "description", "category", "amount", "paymentMethod"];

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} className="table-header">
                {col.charAt(0).toUpperCase() + col.slice(1)} 
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, rowIndex) => (
            <tr key={rowIndex} className="table-row">
              {columns.map((col) => (
                <td key={col} className="table-cell">
                  {transaction[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
