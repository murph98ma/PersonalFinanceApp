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

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});