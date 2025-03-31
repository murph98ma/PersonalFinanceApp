import React from "react";
import GrowthGraph from "./GrowthGraph";
import "./Dashboard.css";
import DataTable from "./TransactionTable";
import DatePicker from "./DateSelection";
import { Button } from "@mui/material";
import CategoryTotalList from "./CategoryTotalList";

const Dashboard = () => {
    
    return(
        <div className="grid-container">
            <div className="grid-item">
                <div>Total: $30,000.00</div>
                <div>NCACU: $20,000.00</div>
                <div>Ally: $10,000.00</div>
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