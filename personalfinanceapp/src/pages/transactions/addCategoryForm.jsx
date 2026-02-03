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
    
    const handleSubmit = async (e) =>{
        e.preventDefault(); 

        const payload = {
            categoryName: formData.categoryName,
            bankAccount: formData.bankAccount,
        };

        try{
            const repsonse = await fetch("http://localhost:5000/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if(!repsonse.ok){
                throw new Error("Failed to add category");
            }

            const data = await repsonse.json();
            console.log("Category saved: ", data);

            setFormData({
                categoryName: "",
                bankAccount: "",
            });


        }catch(error){
            console.log("Error submitting category:", error);
        }
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