import React, {useState} from "react";

const FilterForm = () => {
    const [amount, setAmount] = useState("");
    const[fromDate, setFromDate] = useState("");
    const[toDate, setToDate] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Filter form submitted", {amount, category});
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
            <input 
                type="number"
                name="amount"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
             <input 
                type="date"
                name="fromDate"
                placeholder="Enter Date From"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
            />
             <input 
                type="date"
                name="toDate"
                placeholder="Enter Date To"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
            />
            <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
            </select>
      <button className="btn btn-secondary button-spacing" type="submit">Submit</button>
      <button className="btn btn-secondary button-spacing">Edit Transaction</button>
      <button className="btn btn-secondary button-spacing">Add Transaction</button>
      </div>
        </form>
    );  
}

export default FilterForm;