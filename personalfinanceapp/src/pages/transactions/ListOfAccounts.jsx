import React, {useState} from "react";
import "./ListOfAccounts.css"

const ListOfAccounts = ({}) =>{
   
    return(
        <div className="mainDivListOfAccounts">
            <h3 className="ListOfAccountsHeader">Accounts</h3>

            <div className="ListOfAccountsContent">
                <div className="leftSide">
                    <h5>Bank Accounts</h5>
                </div> 
           
                <div className="rightSide">
                 <h5>Debts</h5>
                </div> 
             </div>
        </div>
    );
}

export default ListOfAccounts;