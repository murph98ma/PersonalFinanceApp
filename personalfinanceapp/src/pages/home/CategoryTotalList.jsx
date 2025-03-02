import React, { useState, useEffect, useRef } from "react";
import CategoryTotal from "./CategoryTotal";
import "./CategoryTotalList.css";

const cardDataArray = [
    { title: "Car", content: "$3600.00" },
    { title: "Student", content: "$20,000.00" },
    { title: "Rent", content: "$1358.00" },
    { title: "Groceries", content: "$500.00" },
    { title: "Utilities", content: "$250.00" },
    { title: "Entertainment", content: "$150.00" },
];

function CategoryTotalList() {
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
    }, [cardDataArray.length]); // Update when content changes

    return (
        <div 
            ref={scrollRef} 
            className="scroll-container"
            style={{ justifyContent: isScrollable ? "flex-start" : "center" }}
        >
            <div className="category-total-list">
                {cardDataArray.map((card, index) => (
                    <CategoryTotal key={index} title={card.title} content={card.content} />
                ))}
            </div>
        </div>
    );
}

export default CategoryTotalList;
