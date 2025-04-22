import React, {useState} from "react";

const FilterForm = () => {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Filter form submitted", {amount, category});
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="number"
                name="amount"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
              <input 
                type=""
                name="amount"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
        </form>
    )
        
    
}