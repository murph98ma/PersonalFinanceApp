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

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});