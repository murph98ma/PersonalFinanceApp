import React from "react";
import "./CategoryTotal.css"


function CategoryTotal({title, content}){

    return (
        <div className="category-total-card ">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="category-total-border text-gray-700>">{content}</p>
        </div>
    )
}

export default CategoryTotal;