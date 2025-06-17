import React, {useState} from "react";
import "./addAccountDebtForm.css"


const AccountOrDebtForm = ({}) =>{

    const [formData, setFormData] = useState({
        accountName: "",
        startingAmount: "",
        accountType:{
            bank: false,
            debt: false,
        },
    });

    const handleCheckboxChange = (e) =>{
        const{id, checked} = e.target;
        setFormData((prev) => ({
            ...prev,
            accountType:{
                bank: id === "bankAccount" ? checked : false,
                debt: id === "debtAccount" ? checked :false,
            },
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();

        const{bank, debt} = formData.accountType;

        if((bank && debt) || (!bank && !debt)){
            alert("Please select at least one account type: BANK OR DEBT");
            return;
        }

        console.log("Add Account Or Debt Form Submitted!");
        console.log(formData);
    }

    return(
        <div>
            <h3 className="form-title-accounts">Add Account</h3>
        <div className="addAccountDebt">
        <form onSubmit={handleSubmit}> 
        <div className="form-divs-accounts">
        <h4 className="header-adjustments">Account Name</h4>
            <input
                type="text"
                name="startingAmount"
                placeholder="Enter Account Name"
                required
            />
        </div>
        <div className="form-divs-accounts">
        <h4 className="header-adjustments">Account Type</h4>
        <div className="form-divs-checkboxes">
            <div className="checkbox-spacing">
            <label htmlFor="bankAccount">Bank Account</label>
            <input 
                type="checkbox"
                id="bankAccount"
                name="accountType"
                checked={formData.accountType.bank}
                onChange={handleCheckboxChange}
            />
            </div>
            <div className="checkbox-spacing">
            <label htmlFor="debtAccount">Debt</label>
            <input 
                type="checkbox"
                id="debtAccount"
                name="accountType"
                checked={formData.accountType.debt}
                onChange={handleCheckboxChange}
            />
            </div>
        </div>
        </div>
        <div className="form-divs-accounts">
        <h4 className="header-adjustments">Starting Value</h4>
            <input
                type="number"
                name="startingAmount"
                placeholder="Enter Starting Balance"
                required
            />
        <br />
        </div>
        <div className="form-divs-accounts">
         <button className="btn primary-button button-spacing" type="submit">Submit</button>  
        </div> 
        </form>
        </div>
     </div>
    );
}

export default AccountOrDebtForm;