import { useEffect, useState } from 'react'
import axios from "axios";
import { serverURL } from '../../utils/contants';


//#region Transacation Table Get Call
export const getTransactionTableData = async () =>{
    try{
        const response = await axios.get(serverURL + "/transactionData");
        return response.data.transactions || [];
    }catch(error){
        console.error("Error when fetching transaction table data: ", error);
        return [];
    }
};
//#endregion

//#region Bank Account Total Get Route
export const getBankAccountTotalData = async () => {
    try{
        const response = await axios.get(serverURL + "/bankAccountTotalData");
        return response.data.accounts || [];
    }catch(error){
        console.error("Error when loading bank account total data: ", error);
        return [];
    }
}
//#endregion

//#region Total Money After Pending Get Route
export const getPendingChargesData = async () => {
    try{
        const response = await axios.get(serverURL + "/pendingChargesData");
        return response.data.pending || [];
    }catch(error){
        console.log("Error when getting pending charges data:", error);
        return[];
    }
}
//#endregion

//#region Debt Total Get Route
export const getDebtTotalData = async () => {
    try{
        const response = await axios.get(serverURL + "/debtTotalData");
        return response.data.accounts || [];
    }catch(error){
         console.error("Error when getting debt data:", error);
         return [];
    }
}
//#endregion

//#region Category Total Get Route
export const getCategoryTotalData = async () => {
    try{
        const response = await axios.get(serverURL + "/categoryTotal");
        return response.data.categories || [];
    }catch(error){
        console.error("Error getting cagtegory total data: ", error);
        return [];
    }
}
//#endregion

//#region Growth Graph Get Route
export const getGrowthChartData = async () => {
    try{
        const response = await axios.get(serverURL + "/growthTable");
        return {
            months: response.data.months || [],
            values: response.data.values || []
        };
    }catch(error){
        console.error("Error getting Growth Chart data:", error);
        return [];
    }
}
//#endregion

