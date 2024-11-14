// Import npm modules
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

// Declarations
const app = express();
const port = 3000;

// Setup npm modules
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Routes
app.get('/', (req, res)=>{
    res.render("index.ejs");
});



app.listen(port, ()=>{
    console.log(`App listening on port ${port}.`);
})