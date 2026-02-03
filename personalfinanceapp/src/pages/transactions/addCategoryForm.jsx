import React, {useState} from "react";
import "./addCategoryForm.css"

const AddCategoryForm = ({bankAccounts}) => {

    const[formData, setFormData] = useState ({
        categoryName: "",
        bankAccount: "",
    })

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }));
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault(); 
        console.log("Add category form submitted!");
        console.log(formData);
        setFormData({
            categoryName: "",
            bankAccount: "",
        })
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
                        value={formData.categoryName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-div-categories">
                    <h4 className="header-adjustments">Bank Account</h4>
                    <select
                        name="bankAccount"
                        value={formData.bankAccount}
                        onChange={handleChange}
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