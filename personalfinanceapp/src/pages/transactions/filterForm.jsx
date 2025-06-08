import React, {useState} from "react";
import "./filterForm.css";

const FilterForm = ({categories, onAddTransactionClick}) => {
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
            <div className="filter-selection">
            <div className="form-divs">
            <label htmlFor="amount">Amount</label>
            <input 
                type="number"
                name="amount"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.01"
            />
            </div>
            <div className="form-divs">
             <label htmlFor="fromDate">From</label>
             <input 
                type="date"
                name="fromDate"
                placeholder="Enter Date From"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
            />
            </div>
            <div className="form-divs">
            <label htmlFor="toDate">To</label>
             <input 
                type="date"
                name="toDate"
                placeholder="Enter Date To"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
            />
            </div>
            <div className="form-divs">
            <label htmlFor="category">Category</label>
            <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Select Category</option>
                {categories?.length > 0 &&
                    categories.map((cat, index) => (
                    <option key={index} value={cat.toLowerCase()}>
                      {cat}
                    </option>
                ))}
            </select>
            </div>
      <button className="btn btn-secondary button-spacing" type="submit">Submit</button>
      <button className="btn btn-secondary button-spacing">Edit Transaction</button>
      <button 
         className="btn btn-secondary button-spacing"
         type="button"
         onClick={onAddTransactionClick}
      >
       Add Transaction
      </button>
      
      </div>
    </form>
    );  
}

export default FilterForm;