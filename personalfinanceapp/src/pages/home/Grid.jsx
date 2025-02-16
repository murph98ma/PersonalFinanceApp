import React from "react";
import GrowthGraph from "./GrowthGraph"
import "./Grid.css";
import { Button } from "@mui/material";

const Grid = () => {
    return(
        <div className="grid-container">
            <div className="grid-item">
                <div>Total Across All Accounts</div>
                <div>Account 1</div>
                <div>Account 2</div>
            </div>
            <div className="grid-item">
            <div>Current Count: Name of Account</div>
                <div>Actual</div>
                <div>Actual - pending</div>
            </div>
            <div className="grid-item category-totals">Category Totals</div>
            <div className="grid-item transaction-history">Transaction History</div>
            <div className="grid-item growth-graph">
                <GrowthGraph />
            </div>
            <div className="grid-item">
                <div>Start Date</div>
                <div>End Date</div>
            </div>
            <div className="grid-item">
                <div>Remove Pending Button</div>
            </div>
        </div>
    )
}

export default Grid;