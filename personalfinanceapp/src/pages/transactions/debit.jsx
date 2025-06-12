import React, {useState} from "react";
import "./debit.css"

const AddDebit = ({categories}) => {
    const [debitEntries, setDebitEntries] = useState(
        [
            {date: "", decscription: "", category: "", amount: "", paymentMethod: "", pending: ""}
        ]
    );

    const handleDebitEntryChange = (index, field, value) => {
        const updated = [...debitEntries];
        updated[index][field] = value;
        setDebitEntries(updated);
    };

    const addDebitEntry = () => {
        setDebitEntries([...debitEntries, {date: "", decscription: "", category: "", amount: "", paymentMethod: "", pending: ""}]);
    };

    const removeDebitEntry = (indexToRemove) => {
        const updated = debitEntries.filter((_, i) => i !== indexToRemove);
        setDebitEntries(updated);
    }

    const handleDebitFormSubmit = (e)=> {
        e.preventDefault();
        const validDebitEntries = debitEntries.filter(
            (debitEntry) => debitEntry.date && debitEntry.decscription && debitEntry.category && debitEntry.amount && debitEntry.paymentMethod && debitEntry.pending
        );
    }
    return(
        <form onSubmit={handleDebitFormSubmit}>
            {debitEntries.map((debitEntry, index) =>(
            <div className="debit-form-items" key={index}>
                {index === 0 && <label> Date </label>}
                <input
                    type = "date"
                    placeholder = "Enter Date"
                    value={debitEntry.date}
                    onChange={(e) => handleDebitEntryChange(index, "date", e.target.value)}
                />
                {index === 0 && <label> Description </label>}
                <input
                    type = "text"
                    placeholder = "Enter Description"
                    value={debitEntry.decscription}
                    onChange={(e) => handleDebitEntryChange(index, "description", e.target.value)}
                />
                 {index === 0 && <label> Category </label>}
                <select
                    name="category"
                    value={debitEntry.category}
                    onChange={(e) => handleDebitEntryChange(index, "category", e.target.value)}
                >
                    <option value="">Select Category</option>
                    {categories?.length > 0 &&
                        categories.map((cat, index) => (
                        <option key={index} value={cat.toLowerCase()}>
                            {cat}
                        </option>
                    ))}
                </select>
                {index === 0 && <label> Amount </label>}
                 <input
                    type = "number"
                    placeholder = "Enter Amount"
                    value={debitEntry.amount}
                    onChange={(e) => handleDebitEntryChange(index, "amount", e.target.value)}
                    min="0"
                    step="0.01"
                />
                {/* Need to change to drop down menu and add API call to get payment methods later*/}
                 {index === 0 && <label> Payment Method </label>}
                 <input
                    type = "text"
                    placeholder = "Select Payment Method"
                    value={debitEntry.paymentMethod}
                    onChange={(e) => handleDebitEntryChange(index, "paymentMethod", e.target.value)}
                />
                 {index === 0 && <label> Pending </label>}
                 <input
                    type = "checkbox"
                    value={debitEntry.pending}
                    onChange={(e) => handleDebitEntryChange(index, "pending", e.target.value)}
                />
                
                {debitEntries.length > 1 && (
                    <button type="button" onClick={() => removeDebitEntry(index)}>🗑️</button>
                )}
            </div>
          ))}
          <button type="button" onClick={addDebitEntry}>➕ Add Row</button>
          <button type="submit">Submit</button>
        </form>
    );
}

export default AddDebit;