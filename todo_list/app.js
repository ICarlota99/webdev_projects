// npm modules
import express from "express";
import bodyParser from "body-parser";

// Constant declarations
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

// Define __dirname outside the route handler 
const __dirname =  process.cwd(); 

// Functions
app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});