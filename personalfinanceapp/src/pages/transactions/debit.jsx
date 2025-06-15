import React, {useState} from "react";
import "./debit.css"
import "./secondaryButton.css"

const AddDebit = ({categories, paymentMethods}) => {
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
        setDebitEntries([...debitEntries, {date: "", description: "", category: "", amount: "", paymentMethod: "", pending: ""}]);
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
            <div className="debit-form-container" key={index}>
                <div className="debit-form-item"> 
                {index === 0 && <label> Date </label>}
                <input
                    type = "date"
                    placeholder = "Enter Date"
                    value={debitEntry.date}
                    onChange={(e) => handleDebitEntryChange(index, "date", e.target.value)}
                    required
                />
                </div>
                <div className="debit-form-item">
                    {index === 0 && <label> Description </label>}
                    <input
                    type = "text"
                    placeholder = "Enter Description"
                    value={debitEntry.description}
                    onChange={(e) => handleDebitEntryChange(index, "description", e.target.value)}
                    required
                />
                </div>
                <div className="debit-form-item">
                      {index === 0 && <label> Category </label>}
                <select
                    name="category"
                    value={debitEntry.category}
                    onChange={(e) => handleDebitEntryChange(index, "category", e.target.value)}
                    required
                >
                    <option value="">Select Category</option>
                    {categories?.length > 0 &&
                        categories.map((cat, index) => (
                        <option key={index} value={cat.toLowerCase()}>
                            {cat}
                        </option>
                    ))}
                </select>
                </div>
                <div className="debit-form-item">
                {index === 0 && <label> Amount </label>}
                 <input
                    type = "number"
                    placeholder = "Enter Amount"
                    value={debitEntry.amount}
                    onChange={(e) => handleDebitEntryChange(index, "amount", e.target.value)}
                    min="0"
                    step="0.01"
                    required
                />
                </div>
                <div className="debit-form-item">
                    {index === 0 && <label> Payment Method </label>}
                   <select
                     name="paymentMethod"
                     value={debitEntry.paymentMethod}
                     onChange={(e) => handleDebitEntryChange(index, "paymentMethod", e.target.value)}
                     required                   
                   >
                        <option value="">Select Payment Method</option>
                        {paymentMethods?.length > 0 &&
                            paymentMethods.map((cat, index) => (
                                <option key={index} value={cat.toLowerCase()}>
                                    {cat}
                                </option>
                            ))
                        }
                   </select>
                </div>
              <div className="debit-form-item">
                   {index === 0 && <label> Pending </label>}
                   <input
                    type = "checkbox"
                    value={debitEntry.pending}
                    onChange={(e) => handleDebitEntryChange(index, "pending", e.target.value)}
                />     
              </div>
              <div className="debit-form-item">
                {index === 0 && <label className="placeholder">PH</label>}
                {debitEntries.length > 1 && (
                    <button type="button" onClick={() => removeDebitEntry(index)}>🗑️</button>
                )}
              </div>   
            </div>
          ))}
          <div className="add-row-button-position">
            <button className="btn btn-secondary .btn-secondary:hover btn-secondary:active" type="button" onClick={addDebitEntry}>Add Row</button>
          </div>
          <br></br>
          <button className="btn primary-button button-spacing" type="submit">Submit</button>
        </form>
    );
}

export default AddDebit;