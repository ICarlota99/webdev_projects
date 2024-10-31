export {addNewList};

function addNewList(req,res, lists){
    let category = req.body.categories;
    // Check for valid category
    if (lists.hasOwnProperty(category)) {
    // Create a new list
    let newListName = req.body.newList;
    let newList = {
        name: newListName,
        values: []
    };

    //Add list to dictionary
    lists[category].push(newList);
    console.log(lists);
    } else {
    // Handle invalid category. You might send an error response 
    res.status(400).send("Invalid category"); 
    }   
}
