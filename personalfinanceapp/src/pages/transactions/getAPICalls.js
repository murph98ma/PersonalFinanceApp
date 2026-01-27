import axios from "axios";
import { serverURL } from "../../utils/contants";

//#region Transaction table get call
export const getAllTransactionTableData = async () =>{
    try{
        const response = await axios.get(serverURL + "/allTransactionData");
        return response.data.transactions || [];
    }catch(error){
        console.error("Error when fetching transaction table data: ", error);
        return [];
    }
}
//#endregion

//#region Get Categories
export const getAllCategories = async () => {
    try{
        const response = await axios.get(serverURL + "/allCategories");
        return response.data.categories || [];
    }catch(error){
        console.error("Error when fetching categories list: ", error);
        return [];
    }
}
//#endregion

//#region Get Payment methods
export const getAllPaymentMethods = async () => {
    try{
        const response = await axios.get(serverURL + "/allPaymentMethods");
        return response.data.paymentMethods || [];
    }catch(error){
        console.error("Error when fetching payment methods: ", error);
    }
}
//#endregion

//#region Get Bank Accounts for category filters and adding transactions
export const getAllBankAccounts = async () => {
    try{
        const response = await axios.get(serverURL + "/allBankAccounts");
        return response.data.bankAccounts || [];
    }catch(error){
        console.error("Error when retrieving bank accounts");
    }
}
//#endregion

//#region Bank account totals get route
export const getBankAccountTotalData = async () => {
    try{
        const resposne =  await axios.get(serverURL + "/bankAccountTotalData");
        return resposne.data.accounts || [];
    }catch(error){
        console.error("Error when loading bank account total data: ", error);
        return [];
    }
}
//#endregion

//#region 
export const getDebtTotalData = async () => {
    try{
        const resposne = await axios.get(serverURL + "/debtTotalData");
        return resposne.data.accounts || [];
    }catch(error){
        console.error("Error when loading debt data")
        return;
    }
}
//#endregion
