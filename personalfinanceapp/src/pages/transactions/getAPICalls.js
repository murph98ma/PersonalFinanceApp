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