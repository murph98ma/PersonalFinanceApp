import React, { useState, useEffect, useRef } from "react";
import CategoryTotal from "./CategoryTotal";
import axios from "axios";
import "./CategoryTotalList.css";

function CategoryTotalList({categories}) {

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

    if(categories.length === 0){
        return <div>Loading Category Totals...</div>
    }

    return (
        <div 
            ref={scrollRef} 
            className="scroll-container"
            style={{ justifyContent: isScrollable ? "flex-start" : "center" }}
        >
            <div className="category-total-list">
                {categories.map((category, index) => (
                    <CategoryTotal key={index} title={category.title} content={category.content} />
                ))}
            </div>
        </div>
    );
}

export default CategoryTotalList;


