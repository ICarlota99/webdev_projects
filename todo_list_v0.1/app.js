// npm modules
import express from "express";
import bodyParser from "body-parser";

// Constant declarations
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Global variables
let items = [];

// Define __dirname outside the route handler 
const __dirname =  process.cwd(); 

// Functions
app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});

app.get('/', (req, res) => {
  let today = new Date().toDateString();
  res.render("index.ejs", {
    day: today, 
    items: items});
});


app.post('/submit', (req,res)=> {
  let newItem = req.body.newItem;
  items.push(newItem);
  console.log(items);
  res.redirect('/');
});