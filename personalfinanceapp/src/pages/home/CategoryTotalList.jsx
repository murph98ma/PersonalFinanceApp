import React, { useState, useEffect, useRef } from "react";
import CategoryTotal from "./CategoryTotal";
import axios from "axios";
import "./CategoryTotalList.css";

function CategoryTotalList() {

    const [categoryData, setCategoryData] = useState({title: [], content: []});
    const [isScrollable, setIsScrollable] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const checkScrollable = () => {
            if (scrollRef.current) {
                const hasOverflow = scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
                setIsScrollable(hasOverflow);
            }
        };

        checkScrollable();
        window.addEventListener("resize", checkScrollable);
        return () => window.removeEventListener("resize", checkScrollable);
    }, []);

    useEffect(() => {
        axios.get("http://localhost:5000/categoryTotal")
        .then((response) =>{
            console.log(response.data);

            if(response.data.categories){
                setCategoryData({
                    title: response.data.categories.map(cat => cat.title),
                    content: response.data.categories.map(cat => cat.content),
                });
            }else{
                console.error("Unexpected format", response.data);
            }
           
        })
        .catch((error) => {
            console.log("Error fetching category data: ", error);
        })
    }, []);

    if(!categoryData.title || !categoryData.content || categoryData.title.length === 0 || categoryData.content.length === 0){
        return <div>Loading Category Totals...</div>
    }

    return (
        <div 
            ref={scrollRef} 
            className="scroll-container"
            style={{ justifyContent: isScrollable ? "flex-start" : "center" }}
        >
            <div className="category-total-list">
                {categoryData.title.map((title, index) => (
                    <CategoryTotal key={index} title={title} content={categoryData.content[index]} />
                ))}
            </div>
        </div>
    );
}

export default CategoryTotalList;
