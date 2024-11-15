const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define the root route to render the index.ejs file
app.get('/', (req, res) => {
    // let data=Math.random();
    let arr=[1,2,3,45,5,6,6,7,8,8,8,4,3,3,2,1,2,1,2,2,6]
    // let data=(req.params);
    let sum=0;
    res.render('index',{arr,sum});
});
app.listen(8080, () => {
    console.log("Server ready on port 8080");
});
