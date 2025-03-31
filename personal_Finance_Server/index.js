import express from "express";
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());

app.get("/growthTable", (req, res) => {
    res.json({
        months: ["Jan", "Feb", "March", "April","May", "June"],
        values: [2, 45, 3, 100]
    });
});

app.get("/categoryTotal", (req, res) => {
    res.json({

        categories:[
            {title: "Car", content: "$3,600.00"},
            {title: "Student", content: "$20,000.00"},
            {title: "Rent", content: "$1358.00"},
            {title: "Groceries", content: "$500.00"},
            {title: "Utilities", content: "$250.00"},
            {title: "Entertainment", content: "$150.00"},
        ]
    });
});

app.get("/transactionData", (req , res) => {
    res.json({
        transactions:[
            { date: "02-22-2025", description: "Grocery Shopping", category: "Food", amount: "$75.30", paymentMethod: "Credit Card" },
            { date: "02-20-2025", description: "Rent Payment", category: "Housing", amount: "$1,200.00", paymentMethod: "Bank Transfer" },
            { date: "02-18-2025", description: "Gas Station", category: "Transport", amount: "$45.67", paymentMethod: "Debit Card" },
            { date: "02-15-2025", description: "Movie Night", category: "Entertainment", amount: "$30.00", paymentMethod: "Cash" },
            { date: "02-10-2025", description: "Electricity Bill", category: "Utilities", amount: "$120.50", paymentMethod: "Online Payment" },
            { date: "02-08-2025", description: "Gym Membership", category: "Health", amount: "$50.00", paymentMethod: "Credit Card" }
        ]
    });
})



app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});