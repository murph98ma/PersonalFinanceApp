import React from "react";
import GrowthGraph from "./GrowthGraph";
import "./Grid.css";
import DataTable from "./TransactionTable";
import DatePicker from "./DateSelection";
import { Button } from "@mui/material";
import CategoryTotalList from "./CategoryTotalList";

const Grid = () => {

    //Test date for table.
    const columns = [
        { key: "date", label: "Date" },
        { key: "description", label: "Description" },
        { key: "category", label: "Category" },
        { key: "amount", label: "Amount" },
        { key: "paymentMethod", label: "Payment Method" }
    ];
    
    const data = [
        { date: "02-22-2025", description: "Grocery Shopping", category: "Food", amount: "$75.30", paymentMethod: "Credit Card" },
        { date: "02-20-2025", description: "Rent Payment", category: "Housing", amount: "$1,200.00", paymentMethod: "Bank Transfer" },
        { date: "02-18-2025", description: "Gas Station", category: "Transport", amount: "$45.67", paymentMethod: "Debit Card" },
        { date: "02-15-2025", description: "Movie Night", category: "Entertainment", amount: "$30.00", paymentMethod: "Cash" },
        { date: "02-10-2025", description: "Electricity Bill", category: "Utilities", amount: "$120.50", paymentMethod: "Online Payment" },
        { date: "02-08-2025", description: "Gym Membership", category: "Health", amount: "$50.00", paymentMethod: "Credit Card" }
    ];
    

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
                <DataTable columns={columns} data={data} />
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
                    <p>Debts</p>
                    <CategoryTotalList />
                </div>
            </div>
        </div>
    )
}

export default Grid;