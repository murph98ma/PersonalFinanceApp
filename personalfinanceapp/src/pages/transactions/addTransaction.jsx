import React, {useState} from "react";
import "./addTransaction.css"

const AddTransaction = ({onClose}) => {
    const [transactionTypeSelection, setTransactionTypeSelection] = useState(null);
    const handleTransactionTypeCheck = (type) => {
        setTransactionTypeSelection(prev => (prev === type ? null : type));
    };

    return(
     <div className="overlay">
        <div className="content">
            <button onClick={onClose}>X</button>
            <div>
                <label>
                    <input
                        type ="checkbox"
                        checked = {transactionTypeSelection === 'Deposit'}
                        onChange={() => handleTransactionTypeCheck('Deposit')}
                    />
                    Show Deposit Form
                </label>
                <label>
                    <input
                        type = "checkbox"
                        checked={transactionTypeSelection === "Debit"}
                        onChange={() => handleTransactionTypeCheck('Debit')}
                    />
                    Show Debit Form
                </label>
            </div>
            <div>
                {transactionTypeSelection === 'Deposit' &&(
                    <div>
                        <h3>Deposit Form is showing!!!</h3>
                    </div> 
                )}
                {transactionTypeSelection === 'Debit' && (
                    <div> 
                        <h3>DEBIT FORM IS SHOWING</h3>
                    </div>
                )}
            </div>
        </div> 
    </div>
    );  
}

export default AddTransaction