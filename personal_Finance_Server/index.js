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
            {title: "Car", content: "3600"},
            {title: "Student", content: "20000"},
            {title: "Rent", content: "1358"},
            {title: "Groceries", content: "500"},
            {title: "Utilities", content: "250"},
            {title: "Entertainment", content: "150"},
        ]
    });
});

app.get("/transactionData", (req , res) => {
    res.json({
        transactions:[
            { date: "02-22-2025", description: "Grocery Shopping", category: "Food", amount: "$75.30", paymentMethod: "Credit Card"},
            { date: "02-20-2025", description: "Rent Payment", category: "Housing", amount: "$1,200.00", paymentMethod: "Bank Transfer" },
            { date: "02-18-2025", description: "Gas Station", category: "Transport", amount: "$45.67", paymentMethod: "Debit Card" },
            { date: "02-15-2025", description: "Movie Night", category: "Entertainment", amount: "$30.00", paymentMethod: "Cash" },
            { date: "02-10-2025", description: "Electricity Bill", category: "Utilities", amount: "$120.50", paymentMethod: "Online Payment" },
            { date: "02-08-2025", description: "Gym Membership", category: "Health", amount: "$50.00", paymentMethod: "Credit Card" },
            { date: "02-10-2025", description: "Electricity Bill", category: "Utilities", amount: "$120.50", paymentMethod: "Online Payment" },
            { date: "02-10-2025", description: "Electricity Bill", category: "Utilities", amount: "$120.50", paymentMethod: "Online Payment" },
            { date: "02-10-2025", description: "Electricity Bill", category: "Utilities", amount: "$120.50", paymentMethod: "Online Payment" },
            { date: "02-10-2025", description: "Electricity Bill", category: "Utilities", amount: "$120.50", paymentMethod: "Online Payment" },
            { date: "02-10-2025", description: "Electricity Bill", category: "Utilities", amount: "$120.50", paymentMethod: "Online Payment" },
            { date: "02-10-2025", description: "Electricity Bill", category: "Utilities", amount: "$120.50", paymentMethod: "Online Payment" },
            { date: "02-10-2025", description: "Electricity Bill", category: "Utilities", amount: "$120.50", paymentMethod: "Online Payment" },
            { date: "02-10-2025", description: "Electricity Bill", category: "Utilities", amount: "$120.50", paymentMethod: "Online Payment" },
        ]
    });
});

app.get("/bankAccountTotalData", (req, res) => {

    res.json({
        accounts:[
            { id: 1, name: "NCACU", balance: 20000 },
            { id: 2, name: "Ally", balance: 10000 },    
        ]
    });
});

app.get("/debtTotalData", (req, res) =>{
    res.json({
        accounts:[
            {id: 1, name: "Toyota Tacoma", balance: 16000},
            {id: 2, name: "Student Loans", balance: 18000},
        ]
    })
})

app.get("/pendingChargesData", (req, res) => {
    res.json({
        pending:[
            {id: 1, name: "Pending Charges", balance: 1000}
        ]
    })
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});