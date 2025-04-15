import React, {useEffect, useState, useRef} from "react";
import GrowthGraph from "./GrowthGraph";
import "./Dashboard.css";
import TransactionTable from "./TransactionTable";
import DatePicker from "./DateSelection";
import BankAccountTotals from "./BankAccountTotals";
import { Button } from "@mui/material";
import CategoryTotalList from "./CategoryTotalList";
import { getGrowthChartData, getTransactionTableData, getCategoryTotalData, getBankAccountTotalData, getDebtTotalData } from "./getAPICalls";

const Dashboard = () => {
    // const[categoryHeight, setCategoryHeight] = useState(null);
    // const categoryRef = useRef(null);

    //#region API calls
    const[accountData, setAccounts] = useState([]);
    useEffect(() => {
        const getBankAccountComponentTotalData = async () => {
            const data = await getBankAccountTotalData();
            setAccounts(data);
        };
        getBankAccountComponentTotalData();
    }, []);

    const[debtData, setDebts] = useState([]);
    useEffect(() => {
        const getDebtTotalComponentData = async () => {
            const data = await getDebtTotalData();
            setDebts(data);
        };
        getDebtTotalComponentData();
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

    //#region Styling
    // useEffect(() => {
    //     if (categoryData.length > 0) {
    //         requestAnimationFrame(() => {
    //             if (categoryRef.current) {
    //                 const height = categoryRef.current.offsetHeight;
    //                 console.log("Measured category height: ", height);
    //                 setCategoryHeight(height);
    //             }
    //         });
    //     }
    // }, [categoryData]);
    
    // const sharedStyle = {
    //     height: categoryHeight ? `${categoryHeight}px` : "auto",
    //     overflowY: "auto",
    //     backgroundColor: "whitesmoke",
    //     borderRadius: "10px",
    //      padding: "0px"
    // }

    
    //#endregion
    return(
        <div className="grid-container">
            <div className="grid-item category-totals" >
                <p>Category Totals</p>
                <CategoryTotalList  categories={categoryData} />
            </div>
            <div className="transaction-history">
                <TransactionTable  transactions={transactionData} />
            </div>
            <div className="grid-item growth-graph" >
                <GrowthGraph chartData={chartData} />
            </div>
            <div className="grid-item">
                <div className="grid-date-selection-component" >
                    <div><DatePicker /> </div>
                    <div><DatePicker /> </div>
                </div>
                <div className="submit-button"><Button variant="contained">submit</Button></div>
            </div>
            <div className="grid-item account-total-grid-item" > 
                <BankAccountTotals accounts={accountData} label="Total Balance"/>
            </div>
            <div className="grid-item" >
            <div>Current Count: Name of Account</div>
                <div>Actual</div>
                <div>Actual - pending</div>
            </div>
            <div className="grid-item account-total-grid-item">
               <BankAccountTotals accounts={debtData} label="Total Debt" />
            </div>
        </div>
    )
}

export default Dashboard;