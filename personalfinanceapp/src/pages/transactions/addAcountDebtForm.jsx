import React, {useState} from "react";

const AccountOrDebtForm = ({}) =>{

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Add Account Or Debt Form Submitted!")
    }

    return(
        <form onSubmit={handleSubmit}> 
        <h3>Account Type</h3>
        <label htmlFor="moneyAccount">Bank Account</label>
            <input 
                type="checkbox"
                name="moneyAccount"
                value="BankAccount"
            />
        <label htmlFor="moneyAccount">Debt</label>
            <input 
                type="checkbox"
                name="debtAccount"
                value="DebtAccount"
            />
        
        <h3>Starting Value</h3>
        <label></label>
            <input
                type="number"
                name="startingAmount"
                placeholder="Enter Starting Balance"
            />
            
        </form>
    );
}

export default AccountOrDebtForm;