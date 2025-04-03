import React, {useEffect, useState} from "react";
import GrowthGraph from "./GrowthGraph";
import "./Dashboard.css";
import DataTable from "./TransactionTable";
import DatePicker from "./DateSelection";
import BankAccountTotals from "./BankAccountTotals";
import { Button } from "@mui/material";
import CategoryTotalList from "./CategoryTotalList";
import axios from "axios";

const Dashboard = () => {

    const[accounts, setAccounts] = useState([]);
  
    useEffect(()=>{
      axios.get("http://localhost:5000/bankAccountTotalData")
      .then((response) => {
          console.log("Bank Account Data API Call: ", response.data);
          if (Array.isArray(response.data.accounts)) {
            setAccounts(response.data.accounts);
          } else {
            console.error("Unexpected API response format:", response.data);
          }
      })
      .catch((error) => {
          console.error("Error fetching bank account data: ", error);
      });
    }, []);
  
    if(accounts.length === 0){
      return <div>Loading Bank Account Data ...</div>
    }
    
    return(
        <div className="grid-container">
            <div className="grid-item">
                <BankAccountTotals accounts={accounts}/>
            </div>
            <div className="grid-item">
            <div>Current Count: Name of Account</div>
                <div>Actual</div>
                <div>Actual - pending</div>
            </div>
            <div className="grid-item category-totals">
                <p>Category Totals</p>
                <CategoryTotalList />
            </div>
            <div className="transaction-history">
                <DataTable  />
            </div>
            <div className="grid-item growth-graph">
                <GrowthGraph />
            </div>
            <div className="grid-item">
                <div className="grid-date-selection-component">
                    <div><DatePicker /> </div>
                    <div><DatePicker /> </div>
                </div>
                <div className="submit-button"><Button variant="contained">submit</Button></div>
            </div>
            <div className="grid-item">
                <div>
                    {/* <p>Debts</p>
                    <CategoryTotalList /> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;