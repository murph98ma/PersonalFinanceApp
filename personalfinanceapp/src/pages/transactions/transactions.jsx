import React, { useEffect, useState } from "react";
import TransactionTable from "../SharedComponents/TransactionTable";
import { getAllTransactionTableData } from "./getAPICalls";
import FilterForm from "./filterForm";
import "./secondaryButton.css"
import "./transactions.css"

const Transactions = () => {
  //#region API calls
  const[allTransacitonData, setAllTransactionData] = useState([]);
  useEffect(() => {
    const getAllTransactionTableComponentData = async () => {
      const data = await getAllTransactionTableData();
      setAllTransactionData(data);
    }
    getAllTransactionTableComponentData();
  }, []);
  //#endregion

    return(
      <div className="transaction-grid-container">
        <div className="transaction-grid-item">
          <h2>Add Account/Add Debt</h2>
          <p>Can add a bank accouunt or debt account here</p>
        </div>
        <div className="transaction-table">
          <div className="transaction-table-buttons">
            <FilterForm />
          </div>
           <TransactionTable transactions={allTransacitonData} />
        </div>
        <div className="transaction-grid-item">
          <h2>Deposit Split/Add Category</h2>
          <p>Choose how deposits are split up into categories</p>
          <p>Add categories</p>
        </div>
      </div>
    );
  };
  export default Transactions;
  