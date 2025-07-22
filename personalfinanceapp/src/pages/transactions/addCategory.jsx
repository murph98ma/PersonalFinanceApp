import { useState } from "react";

const AddCategory =({}) => {

    const[formData, setFormData] = useState({
        categoryName: "",
        bankAccount: "",
        newOrTransfer:{
            new: false,
            transfer: false,
        },
        cateoryToTransferFrom: "",
        newDepositAmount: "",
    });

    const handleCheckboxChange = (e) =>{
        const{id, checked} = e.target;
        setFormData((prev) => ({
            ...prev,
            newOrTransfer:{
                new: id==="newDeposit" && checked,
                transfer: id==="transfer" && checked,
            },
        }));
    }

    return(
        <div>
            <h3>Add Category</h3>
            <div>
                <form>
                    <h4>Category Name</h4>
                        <input 
                            type="text"
                            name="categoryName"
                            placeholder="Enter Category Name"
                            required
                        />
                    <h4>Bank Account</h4>
                        <select
                            name="bankAccountSelection"
                            value="Fill in later"
                            //onChange={}
                            required
                        >
                            <option value="">Select Bank Account</option>
                            {/*Need to map bank account later here*/}
                        </select>
                    {/*Need to rename this later*/}
                    <h4>New Deposit or Transfer</h4>
                    <div>
                        <div>
                            <label htmlFor="newMoney">New Deposit</label>
                            <input 
                                type="checkbox"
                                id="newDeposit"
                                name="newMoney"
                                checked={formData.newOrTransfer.new}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="transferMoney">Transfer</label>
                            <input 
                                type="checkbox"
                                id="transfer"
                                name="transferMoney"
                                checked={formData.newOrTransfer.transfer}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    </div>
                {formData.newOrTransfer.transfer && (
                   <>
                    <h4>Category To Transfer From</h4>
                        <select
                            name="categoryToTransferFrom"
                            value="formData.categoryToTransferFrom"
                            onChange={(e) =>
                                setFormData({...formData, cateoryToTransferFrom: e.target.value})
                            }
                            //onChange={}
                            required
                        >
                            <option value="">Select Category</option>
                            {/*Need to map bank account later here*/}
                        </select>
                  </>
                )}   
                    <h4>Starting Amount</h4>
                        <input
                            type="number"
                            name="startingAmount"
                            placeholder="Enter Starting Balance"
                            required
                        />
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddCategory;