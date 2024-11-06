// Import npm modules
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import cookieParser from "cookie-parser";
import * as listHandler from './myModules/listHandler.js';

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

app.post('/addList', (req,res,)=>{
  listHandler.addNewList(req, res, lists);
})