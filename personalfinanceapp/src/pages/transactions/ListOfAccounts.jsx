import React, {useEffect, useState} from "react";
import "./ListOfAccounts.css"
import "../SharedComponents/BankAccountTotals"
import {getBankAccountTotalData, getDebtTotalData} from "./getAPICalls"
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

     const[debtData, setDebts] = useState([]);
     useEffect(() => {
        const getDebtTotalComponentData = async () => {
            const data = await getDebtTotalData();
            setDebts(data);
        };
        getDebtTotalComponentData();
     }, []);

    return(
        <div className="mainDivListOfAccounts">
            <h3 className="ListOfAccountsHeader">Accounts</h3>

            <div className="ListOfAccountsContent">
                <div className="leftSide">
                    <div className="sectionContent">
                        <h5 className="sectionHeaders">Bank Accounts</h5>
                        <BankAccountTotals accounts={accountData} label="Bank Accounts"/>
                    </div>
                </div> 
               <div className="rightSide">
                    <div className="sectionContent">
                        <h5 className="sectionHeaders">Debts</h5>
                        <BankAccountTotals accounts ={debtData} label="Debt Accounts"/>
                    </div> 
                </div>
             </div>
        </div>
    );
}

export default ListOfAccounts;