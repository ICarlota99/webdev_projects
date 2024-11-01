// Import npm modules
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import cookieParser from "cookie-parser";

// Declarations
const app = express();
const port = 3000;

// Globals
let lists = {
  personal: [],
  shopping: [],
  wishlist: [],
  work: [],
}

// Setup npm modules
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`);
});

app.get('/', (req, res) => {
    // Set the 'firstVisit' cookie if it doesn't exist yet
    if (!req.cookies.firstVisit) {
        res.cookie('firstVisit', true, { maxAge: 900000, httpOnly: true }); // Set cookie for 15 minutes
      } 
  
      // Now, the 'firstVisit' cookie is guaranteed to exist
      if (!req.cookies.firstVisit) {
        // Render the welcome page
        res.render('welcome.ejs');
      } else {
        // Render the regular homepage
        res.render('index.ejs');
      }
    });

app.post('/index', (req,res)=>{
    res.render('index.ejs');
});

app.post('/addList', (req,res)=>{
  let category = req.body.categories;
  // Check for valid category
  if (lists.hasOwnProperty(category)) {
    // Create a new list
    let newListName = req.body.newList;
    let newList = {
      name: newListName,
      values: []
    };
    console.log(newList);
        //Add list to dictionary
    lists[category].push(newList);
    console.log(lists);
  } else {
    // Handle invalid category. You might send an error response 
    res.status(400).send("Invalid category"); 
  } 
})