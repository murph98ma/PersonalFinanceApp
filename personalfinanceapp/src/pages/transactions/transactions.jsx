import React, { useEffect, useState } from "react";
import TransactionTable from "../SharedComponents/TransactionTable";
import { getAllCategories, getAllTransactionTableData } from "./getAPICalls";
import FilterForm from "./filterForm";
import AccountOrDebtForm from "./addAcountDebtForm";
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
  
    const[allCategoryData, setAllCategoryData] = useState([]);
    useEffect(() => {
      const getAllCategoryDropDownData = async() => {
        const data = await getAllCategories();
        console.log("Fetched category data:", data);
        setAllCategoryData(data);
      }
      getAllCategoryDropDownData();
    }, []);

  
  //#endregion

    return(
      <div className="transaction-grid-container">
        <div className="transaction-grid-item add-account-debt">
          <AccountOrDebtForm /> 
        </div>
        <div className="transaction-table">
          <div className="transaction-table-buttons">
            <FilterForm categories={allCategoryData}/>
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
  