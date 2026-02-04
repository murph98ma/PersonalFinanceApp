import express from "express";
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

//#region dashboard page api calls
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
            { id: 3, name: "Enemy", balance: 10000 },      
        ]
    });
});

app.get("/debtTotalData", (req, res) =>{
    res.json({
        accounts:[
            {id: 1, name: "Toyota Tacoma", balance: 16000},
            {id: 2, name: "Student Loans", balance: 18000},
            {id: 3, name: "Cabin", balance: 18000},
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
//#endregion

//#region transactions page get api calls
app.get("/allTransactionData", (req, res) =>{
    res.json({
        transactions: [
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
    })
});


app.get("/allCategories", (req, res) =>{
        res.json({
              categories:[
                {title:"Car", bankAccount: "NCACU"}, 
                {title: "Student", bankAccount: "NCACU"},
                {title: "Rent", bankAccount: "NCACU"},
                {title: "Groceries", bankAccount: "Ally"},
                {title: "Utilities", bankAccount: "NCACU"},
                {title: "Entertainment", bankAccount: "Ally"}

            ]
        })
});


app.get("/allPaymentMethods", (req, res) => {
    res.json({
        paymentMethods:["NCACU", "Ally", "Chase Credit"]
    })
});

app.get("/allBankAccounts", (req, res) => {
    res.json({
        bankAccounts:["NCACU", "Ally"]
    })
});
//#endregion

//#region transactions post API calls
app.post("/categories", (req, res) =>{

    const {categoryName, bankAccount} = req.body;

    console.log("Received new Category: ", req.body);

    if(!categoryName || !bankAccount){
        return res.status(400).json({ message: "Missing Fields"});
    }

    const newCategory = {
        title: categoryName,
        bankAccount
    }

    res.status(201).json({
        message: "Category created successfully",
        category: newCategory,
    });

});


app.post("/accountOrDebt", (req, res) =>{
    
    const {accountName, startingAmount, accountType } = req.body;
    console.log("Received new Bank Account or Debt", req.body);

    if(!accountName || !accountType || !startingAmount){
        return res.status(400).json({message: "Missing Fields"});
    }

    const newAccountOrDebt = {
        id: 4,
        accountName,
        startingAmount,
        accountType,
        createdAt: new Date().toISOString(),   
    }

    res.status(201).json({
        message: "Bank account or Debt account created successfully",
        account: newAccountOrDebt,
    });
});

app.post("/deposit", (req, res) => {
    const deposits = req.body;
    console.log("Received a new deposit", req.body);

    if(!Array.isArray(deposits) || deposits.length <= 0){
        return res.status(400).json({message: "Missing Data"});
    }


    for(const d of deposits){
        const {id, date, description, bankAccount, categoryAmounts} = d;

        if(!date || !description || !bankAccount || !categoryAmounts){
            return res.status(400).json({message: "Invalid data"});
        }
    }

    console.log("Received deposits", deposits);

    res.status(201).json({
        message: "Deposit entered successfully!",
        deposits

    })
})

//#endregion

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});