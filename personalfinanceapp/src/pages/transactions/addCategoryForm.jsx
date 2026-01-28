import React, {useState} from "react";
import "./addCategoryForm.css"

const AddCategoryForm = ({}) => {
    const handleSubmit = (e) =>{
        e.preventDefault();

    }
    return(
        <div>
          <h3>Add Category</h3>
          <div>
             <form onSubmit={handleSubmit}>
                <div>
                    <h4>Cateogry Name</h4>
                    <input 
                        type="text"
                        name="categoryName"
                        placeholder="Enter Category Name"
                        required
                    />
                </div>
             </form>
          </div>
        </div>
    )
}


export default AddCategoryForm;