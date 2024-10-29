// Import npm modules
import express from "express";
import bodyParser from "body-parser";

// Declarations
const app = express();
const port = 3000;

// Setup npm modules
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`);
});

app.get("/", (req,res)=> {
    res.render("index.ejs");
});