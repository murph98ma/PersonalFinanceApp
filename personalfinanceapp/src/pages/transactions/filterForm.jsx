import React, {use, useState} from "react";
import "./filterForm.css";

const FilterForm = ({categories, paymentMethods, onAddTransactionClick}) => {
  
    const[formData, setFormData] = useState({
        amount: "",
        fromDate: "",
        toDate: "",
        category: "",
        paymentMethod: "",
    })

    const handleChange = (e) =>{
        const {name, value, type} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name] : type === "number" ? Number(value) : value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Filter form submitted");
        console.log(formData);
    }

    return(
      <div className="filter-positioning">
        <form onSubmit={handleSubmit}>
            <div className="filter-selection">
            <div className="form-divs">
            <label htmlFor="amount">Amount</label>
            <input 
                type="number"
                name="amount"
                placeholder="Enter Amount"
                value={formData.amount}
                onChange={handleChange}
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
                value={formData.fromDate}
                onChange={handleChange}
            />
            </div>
            <div className="form-divs">
            <label htmlFor="toDate">To</label>
             <input 
                type="date"
                name="toDate"
                placeholder="Enter Date To"
                value={formData.toDate}
                onChange={handleChange}
            />
            </div>
            <div className="form-divs">
            <label htmlFor="category">Category</label>
            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
            >
                <option value="">Select Category</option>
                {categories?.length > 0 &&
                    categories.map((cat, index) => (
                    <option key={index} value={cat.title.toLowerCase()}>
                      {cat.title}
                    </option>
                ))}
            </select>
            </div>
            <div className="form-divs">
            <label htmlFor="payment">Payment</label>
            <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
            >
                <option value="">Select Payment Method</option>
                {paymentMethods?.length > 0 &&
                    paymentMethods.map((cat, index) => (
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
    </div>
    );  
}

export default FilterForm;

