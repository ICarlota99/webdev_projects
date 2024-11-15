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


// Content
const homeHeader = "HOME";
const aboutHeader = "ABOUT US";
const contactHeader = "CONTACT US";
const composeHeader = "NEW ENTRY";
const homeStartingContent = "Lorem ipsum dolor sit amet. Nam recusandae sunt qui mollitia beatae eum eveniet excepturi. Et dolor nobis et saepe voluptatum ex nulla perferendis et libero sunt. Aut libero sunt aut enim error qui velit fuga vel similique facilis non eligendi quia id explicabo omnis ut fugiat totam."
const aboutContent = "Lorem ipsum dolor sit amet. Aut assumenda necessitatibus sed veritatis error et autem doloribus. Nam modi quia sed rerum rerum in accusamus veniam eos repellendus nisi ut rerum praesentium et voluptatibus aliquid. Qui voluptatem maxime ab explicabo ipsam ea ratione magnam cum temporibus natus. Eos beatae quia non illum enim non ipsa sequi et asperiores autem aut reprehenderit iste. Et reiciendis voluptates et facere culpa ut galisum modi ad labore dolores vel autem sequi 33 reiciendis nobis non voluptates aspernatur? Aut magni amet sit ratione eius aut placeat nobis et sequi blanditiis aut suscipit laboriosam. Aut voluptate sint aut repellat veritatis ut provident quasi sed eaque placeat qui voluptatem sint in tempora sunt qui aperiam amet. In dignissimos ipsa aut nemo adipisci et dolorem perspiciatis non repellat saepe et eaque dolorem eum repudiandae omnis. 33 illo quia sit nesciunt quam et consequatur perferendis aut temporibus officia?"
const contactContent = "Et reiciendis voluptates et facere culpa ut galisum modi ad labore dolores vel autem sequi 33 reiciendis nobis non voluptates aspernatur? Aut magni amet sit ratione eius aut placeat nobis et sequi blanditiis aut suscipit laboriosam."

// Globals
let posts = [];

//Routes
app.get('/', (req, res)=>{
    res.render("index.ejs", {
        header: homeHeader, 
        content: homeStartingContent,
        posts: posts,
    });
});
app.get('/about', (req, res)=>{
    res.render("about.ejs", {header: aboutHeader, content: aboutContent});
});
app.get('/contact', (req, res)=>{
    res.render("contact.ejs", {header: contactHeader, content: contactContent});
});
app.get('/compose', (req, res)=>{
    res.render("compose.ejs", {header: composeHeader});
});
app.get('/posts/:post', (req, res)=>{
    res.render("posts.ejs", {
        date: posts[req.params.post].date,
        header: posts[req.params.post].title,
        content: posts[req.params.post].content,
    });
});
app.post('/newPost', (req, res)=>{
    let date = new Date(req.body.entryDate).toLocaleString();
    const post = {
        date: date,
        title: req.body.entryTitle,
        content: req.body.entryContent
    };
    posts.push(post);

    res.redirect('/');
});


app.listen(port, ()=>{
    console.log(`App listening on port ${port}.`);
})