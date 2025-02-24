import React from "react";
import CategoryTotal from "./CategoryTotal";
import "./CategoryTotalList.css"

const cardDataArray = [
    { title: "Car", content: "$3600.00" },
    { title: "Student", content: "$20,000.00" },
    { title: "Rent", content: "$1358.00" },
    { title: "Rent", content: "$1358.00" },
    { title: "Rent", content: "$1358.00" },
    { title: "Rent", content: "$1358.00" },
    { title: "Rent", content: "$1358.00" },
    { title: "Rent", content: "$1358.00" },
];

    function CategoryTotalList(props){
        return(
            <div className="category-total-list scroll-container">
                {cardDataArray.map((card, index)=>(
                    <CategoryTotal key={index} title={card.title} content={card.content} />
                ))}
            </div>
        );
    }

export default CategoryTotalList;
 