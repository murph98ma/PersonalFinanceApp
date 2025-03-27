import express from "express";

const app = express();
const port = 3000;


app.get("/growthTable", (req, res) => {
    res.json({
        months: ["Jan", "Feb", "March"],
        values: [2, 45, 3]
    });
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});