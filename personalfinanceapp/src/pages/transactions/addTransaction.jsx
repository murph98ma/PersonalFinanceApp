import React, {useState} from "react";
import AddDeposit from "./deposit";
import AddDebit from "./debit";
import "./addTransaction.css"

const AddTransaction = ({onClose}) => {
    const [transactionTypeSelection, setTransactionTypeSelection] = useState(null);
    const handleTransactionTypeCheck = (type) => {
        setTransactionTypeSelection(prev => (prev === type ? null : type));
    };

    return(
     <div className="overlay">
        <div className="content">
            <div className="position-add-transaction-close-button">
            <button onClick={onClose}>X</button>
            </div>
            <h3>Choose Transaction Type</h3>
            <div className="position-checkboxes">
                <label>
                    <input
                        type ="checkbox"
                        checked = {transactionTypeSelection === 'Deposit'}
                        onChange={() => handleTransactionTypeCheck('Deposit')}
                    />
                    Deposit
                </label>
                <label>
                    <input
                        type = "checkbox"
                        checked={transactionTypeSelection === "Debit"}
                        onChange={() => handleTransactionTypeCheck('Debit')}
                    />
                    Debit
                </label>
            </div>
            <div>
                {transactionTypeSelection === 'Deposit' &&(
                    <div>
                        <AddDeposit />
                    </div> 
                )}
                {transactionTypeSelection === 'Debit' && (
                    <div> 
                        <AddDebit />
                    </div>
                )}
            </div>
         
        </div> 
    </div>
    );  
}

export default AddTransaction