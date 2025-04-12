import React from "react";
import "./CategoryTotal.css"
import { currencyFormat } from "../../utils/formatters";


function CategoryTotal({title, content}){

    return (
        <div className="category-total-card ">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="category-total-border text-gray-700>">{currencyFormat.format(content)}</p>
        </div>
    )
}

export default CategoryTotal;