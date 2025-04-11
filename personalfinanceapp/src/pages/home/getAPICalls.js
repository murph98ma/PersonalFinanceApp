import { useEffect, useState } from 'react'
import axios from "axios";

const serverURL = "http://localhost:5000";


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

