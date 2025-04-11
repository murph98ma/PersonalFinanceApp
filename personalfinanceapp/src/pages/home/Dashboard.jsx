import React, {useEffect, useState} from "react";
import GrowthGraph from "./GrowthGraph";
import "./Dashboard.css";
import TransactionTable from "./TransactionTable";
import DatePicker from "./DateSelection";
import BankAccountTotals from "./BankAccountTotals";
import { Button } from "@mui/material";
import CategoryTotalList from "./CategoryTotalList";
import { getGrowthChartData, getTransactionTableData, getCategoryTotalData, getBankAccountTotalData } from "./getAPICalls";

const Dashboard = () => {

    //#region API calls
    const[accountData, setAccounts] = useState([]);
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

    const[transactionData, setTransactions] = useState([]);
    useEffect(() =>{
        const getTransactionTableComponentData = async () =>{
            const data = await getTransactionTableData();
             setTransactions(data);
        }
         getTransactionTableComponentData();
    }, []);

    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        const getGrowthChartComponentData = async () =>{
            const data = await getGrowthChartData();
            setChartData(data);
        }
        getGrowthChartComponentData();
    }, []);
    //#endregion

    
    return(
        <div className="grid-container">
            <div className="grid-item">
                <BankAccountTotals accounts={accountData}/>
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
                <TransactionTable  transactions={transactionData} />
            </div>
            <div className="grid-item growth-graph">
                <GrowthGraph chartData={chartData}/>
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