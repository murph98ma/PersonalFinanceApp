import React, {useState} from "react";

const AddDeposit = ({categories, bankAccounts}) => {

    const [depositEntries, setDepositEntries] = useState(
       [
        {date: "", description:"", bankAccount: "" }
       ] 
    )

    const handleDepositEntryChange = (index, field, value)=> {
        const updated = [...depositEntries];
        updated[index][field] = value;
        setDepositEntries(updated);
    }

    const addDepositEntry = () => {
        setDepositEntries([...depositEntries, {date: "", bankAccount: ""}])
    }

    return(
        <form>
            {depositEntries.map((depositEntry, index) => (
              <div>
                <div>
                    {index === 0 && <label>Date</label>}
                    <input 
                        type="date"
                        placeholder="Enter Date"
                        value={depositEntry.date}
                        onChange={(e) => handleDepositEntryChange(index, "date", e.target.value)}
                        required
                    />
                </div>
                <div>
                    {index === 0 && <label>Description</label>}
                    <input 
                        type="text"
                        placeholder="Enter Description"
                        value={depositEntry.description}
                        onChange={(e) => handleDepositEntryChange(index, "description", e.target.value)}
                        required
                    />
                </div>
                <div>
                    {index === 0 && <label>Bank Account</label>}
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
                <div>
                    {categories?.length > 0 && 
                        categories
                        .filter(cat => cat.bankAccount === depositEntry.bankAccount)
                        .map(cat => (
                            <div key={cat.title}>
                            {index === 0 && <label>{cat.title}</label>}
                            <input 
                                type="number"
                                placeholder="Enter Amount"
                                min="0"
                                step="0.01"
                            />
                           </div>
                        )) 
                    }
                </div>
              </div>
            ))}
        </form>
    );
}

export default AddDeposit;