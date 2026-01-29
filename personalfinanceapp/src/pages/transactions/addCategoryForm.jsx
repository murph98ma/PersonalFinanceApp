import React, {useState} from "react";
import "./addCategoryForm.css"

const AddCategoryForm = ({bankAccounts}) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }
    return(
        <div>
          <h3>Add Category</h3>
          <div>
             <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="categoryName">Category Name</label>
                    <input 
                        type="text"
                        name="categoryName"
                        placeholder="Enter Category Name"
                        required
                    />
                </div>
                <div>
                    <label>Bank Account</label>
                    <select
                        name="bankAccount"
                        required
                    >
                    <option value="">Select Bank Account</option>
                    {bankAccounts?.length > 0 && 
                        bankAccounts.map((cat,index) => (
                            <option key={index} value={cat}>
                                {cat}
                            </option>
                        ))
                    }
                    </select>
                </div>
                <button className="btn primary-button button-spacing" type="submit">Submit</button>
             </form>
          </div>
        </div>
    );
}


export default AddCategoryForm;