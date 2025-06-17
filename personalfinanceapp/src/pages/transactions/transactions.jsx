import React, { useEffect, useState } from "react";
import TransactionTable from "../SharedComponents/TransactionTable";
import { getAllCategories, getAllPaymentMethods, getAllTransactionTableData } from "./getAPICalls";
import FilterForm from "./filterForm";
import AccountOrDebtForm from "./addAcountDebtForm";
import ListOfAccounts from "./ListOfAccounts";
import AddTransaction from "./addTransaction";
import "./secondaryButton.css"
import "./primaryButton.css"
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

  const[allPaymentMethodData, setAllPaymentMethodData] = useState([]);
  useEffect(() => {
    const getAllPaymentMethodData = async() => {
      const data = await getAllPaymentMethods();
      console.log("Fetched all payment method data: ", data);
      setAllPaymentMethodData(data);
    }
    getAllPaymentMethodData();
  }, []);

  
  //#endregion
  const[showAddTransactionDialog, setShowAddTransactionDialog] = useState(false);

    return(
      <div className="transaction-grid-container">
        <div className="transaction-grid-item add-account-debt">
          <div className="add-account-debt-item">
            <AccountOrDebtForm /> 
          </div>
          <div className="add-account-debt-item">
            <ListOfAccounts />
          </div>
        </div>
        <div className="transaction-table">
          <div className="transaction-table-buttons">
            <FilterForm 
               categories={allCategoryData}
               paymentMethods={allPaymentMethodData}
               onAddTransactionClick={() => setShowAddTransactionDialog(true)}
            />
          </div>
           <TransactionTable transactions={allTransacitonData} />
        </div>
        <div className="transaction-grid-item">
          <h2>Deposit Split/Add Category</h2>
          <p>Choose how deposits are split up into categories</p>
          <p>Add categories</p>
        </div>
          {showAddTransactionDialog && (<AddTransaction onClose={() => setShowAddTransactionDialog(false)} 
          categories={allCategoryData} 
          paymentMethods={allPaymentMethodData} 
          />)}
      </div>
    );
  };
  export default Transactions;
  