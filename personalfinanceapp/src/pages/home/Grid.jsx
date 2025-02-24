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
        { key: "Date", label: "Date" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "age", label: "Age" },
        {key: "test", label: "Test"}
      ];
      
      const data = [
        { Date: "2-22-25", name: "Alice Johnson", email: "alice@example.com", age: 28 },
        { id: 2, name: "Bob Smith", email: "bob@example.com", age: 35 },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 40 },
        { id: 4, name: "Dana White", email: "dana@example.com", age: 22 }
      ];

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
            <div className="grid-item category-totals">
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
                <div>Remove Pending Button</div>
            </div>
        </div>
    )
}

export default Grid;