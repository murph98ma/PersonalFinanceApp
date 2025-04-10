import React, {useEffect, useState} from "react";
import GrowthGraph from "./GrowthGraph";
import "./Dashboard.css";
import DataTable from "./TransactionTable";
import DatePicker from "./DateSelection";
import BankAccountTotals from "./BankAccountTotals";
import { Button } from "@mui/material";
import CategoryTotalList from "./CategoryTotalList";
import { getBankAccountTotalData } from "./getAPICalls";
import {getCategoryTotalData} from "./getAPICalls";

const Dashboard = () => {

    //#region API calls
    const[accounts, setAccounts] = useState([]);
    useEffect(() => {
        const getBankAccountComponentTotalData = async () => {
            const data = await getBankAccountTotalData();
            setAccounts(data);
        };

        getBankAccountComponentTotalData();
    }, []);
  
   

    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        const getCategoryComponentTotalData = async () => {
            const data = await getCategoryTotalData();
            setCategoryData(data);
        }
        getCategoryComponentTotalData();
    }, []);

    //#endregion

    
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
                <CategoryTotalList  categories={categoryData}/>
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