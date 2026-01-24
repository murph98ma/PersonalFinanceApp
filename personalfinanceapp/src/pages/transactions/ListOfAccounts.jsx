import React, {useEffect, useState} from "react";
import "./ListOfAccounts.css"
import "../SharedComponents/BankAccountTotals"
import {getBankAccountTotalData} from "./getAPICalls"
import BankAccountTotals from "../SharedComponents/BankAccountTotals";

const ListOfAccounts = ({}) =>{
     const[accountData, setAccounts] = useState([]);
     useEffect(()=> {
       const getBankAccountComponentTotalData = async () => {
         const data = await getBankAccountTotalData();
         setAccounts(data);
       }
       getBankAccountComponentTotalData();
     }, []);

    return(
        <div className="mainDivListOfAccounts">
            <h3 className="ListOfAccountsHeader">Accounts</h3>

            <div className="ListOfAccountsContent">
                <div className="leftSide">
                    <div>
                        <h5>Bank Accounts</h5>
                        <BankAccountTotals accounts={accountData} label="Bank Accounts"/>
                    </div>
                </div> 
           
                <div className="rightSide">
                 <h5>Debts</h5>
                </div> 
             </div>
        </div>
    );
}

export default ListOfAccounts;