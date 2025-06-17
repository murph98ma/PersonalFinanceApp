import React, {useState} from "react";

const AddDeposit = ({categories, bankAccounts}) => {

    const [depositEntries, setDepositEntries] = useState(
       [
        {date: "", bankAccount: "" }
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
                    {index === 0 && <label>Date</label>}
                    <input 
                        type="date"
                        placeholder="Enter Date"
                        value={depositEntry.date}
                        onChange={(e) => handleDepositEntryChange(index, "date", e.target.value)}
                        required
                    />
                </div>
            ))}
        </form>
       
    );
}

export default AddDeposit;