import React, {useState} from "react";
import "./addCategoryForm.css"

const AddCategoryForm = ({bankAccounts}) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }
    return(
        <div>
          <h3 className="form-title-categories">Add Category</h3>
          <div className="addCategory">
             <form onSubmit={handleSubmit}>
                <div className="form-div-categories">
                    <h4 className="header-adjustments">Category Name</h4>
                    <input 
                        type="text"
                        name="categoryName"
                        placeholder="Enter Category Name"
                        required
                    />
                </div>
                <div className="form-div-categories">
                    <h4 className="header-adjustments">Bank Account</h4>
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
                <div className="form-div-categories">
                    <button className="btn primary-button button-spacing" type="submit">Submit</button>
                </div>
             </form>
          </div>
        </div>
    );
}


export default AddCategoryForm;