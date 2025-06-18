import React, {useState} from "react";
import { currencyFormat } from "../../utils/formatters";
import "./deposit.css";

const AddDeposit = ({categories, bankAccounts}) => {

    const [depositEntries, setDepositEntries] = useState(
       [
        {date: "", description:"", bankAccount: "", categoryAmounts: {}}
       ] 
    )

    const handleCategoryAmountChange = (entryIndex, categoryTitle, value) => {
        const updated = [...depositEntries];
        updated[entryIndex].categoryAmounts = {
            ...updated[entryIndex].categoryAmounts,
            [categoryTitle]: parseFloat(value) || 0
        };
        setDepositEntries(updated);
    }

    const getTotalForCategoryEntries = (entry) => {
        return Object.values(entry.categoryAmounts || {}).reduce((sum, val) => sum + val, 0);
    }

    const handleDepositEntryChange = (index, field, value)=> {
        const updated = [...depositEntries];
        updated[index][field] = value;
        setDepositEntries(updated);
    }

    const addDepositEntry = () => {
        setDepositEntries([...depositEntries, {date: "", description:"", bankAccount: "", categoryAmounts: {}}])
    }

    const removeDepositEntry = (indexToRemove) => {
        const updated = depositEntries.filter((_, i) => i !== indexToRemove);
        setDepositEntries(updated);
    }

    const handleDebitFormSubmit=(e)=> {
        e.preventDefault();
        const validDepositEntries = depositEntries.filter(
            (depositEntry) => depositEntry.date && depositEntry.description && depositEntry.bankAccount && depositEntry.categoryAmounts
        );
    }

    return(
        <form>
            {depositEntries.map((depositEntry, index) => (
              <div className="deposit-form-container">
                <div className="deposit-form-item">
                    {index === 0 && <label>Date</label>}
                    {index >= 1 && <label>PH</label>}
                    <input 
                        type="date"
                        placeholder="Enter Date"
                        value={depositEntry.date}
                        onChange={(e) => handleDepositEntryChange(index, "date", e.target.value)}
                        required
                    />
                </div>
                <div className="deposit-form-item">
                    {index === 0 && <label>Description</label>}
                    {index >= 1 && <label>PH</label>}
                    <input 
                        type="text"
                        placeholder="Enter Description"
                        value={depositEntry.description}
                        onChange={(e) => handleDepositEntryChange(index, "description", e.target.value)}
                        required
                    />
                </div>
                <div className="deposit-form-item">
                    {index === 0 && <label>Bank Account</label>}
                    {index >= 1 && <label>PH</label>}
                    <select
                        name="bankAccount"
                        value={depositEntry.bankAccount}
                        onChange={(e) => handleDepositEntryChange(index, "bankAccount", e.target.value)}
                        required
                    >
                        <option value="">Select Bank Account</option>
                        {bankAccounts?.length > 0 &&
                            bankAccounts.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="deposit-category-item" >
                    {categories?.length > 0 && 
                        categories
                        .filter(cat => cat.bankAccount === depositEntry.bankAccount)
                        .map(cat => (
                            <div className="category-display" key={cat.title}>
                            <label>{cat.title}</label>
                            <input 
                                type="number"
                                placeholder="Enter Amount"
                                min="0"
                                step="0.01"
                                value={depositEntry.categoryAmounts?.[cat.title] || ""}
                                onChange={(e) => handleCategoryAmountChange(index, cat.title, e.target.value)}
                            />
                           </div>
                        )) 
                    }
                </div>
                <div className="deposit-form-item">
                    {index === 0 && <label>Total</label>}
                    {index >= 1 && <label>PH</label>}
                    <div>{currencyFormat.format(getTotalForCategoryEntries(depositEntry).toFixed(2))}</div>
                </div>
                <div className="deposit-form-item">
                    {index >= 0 && <label>PH</label>}
                    {depositEntries.length > 1 && (
                        <button type="button" onClick={() => removeDepositEntry(index)}>🗑️</button>
                    )}
                </div>
              </div>
            ))}
            <div>
                <button type="button" onClick={addDepositEntry}>Add Row</button>
            </div>
        </form>
    );
}

export default AddDeposit;