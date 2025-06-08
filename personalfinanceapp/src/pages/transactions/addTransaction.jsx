import React, {useState} from "react";
import "./addTransaction.css"

const AddTransaction = ({onClose}) => {

    return(
     <div className="overlay">
        <div className="content">
            <h3>Pop-up is showing!</h3>
            <button onClick={onClose}>X</button>
        </div> 
    </div>
    );  
}

export default AddTransaction