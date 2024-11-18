const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// // Define the root route to render the index.ejs file
// let arr = [1, 2, 3, 45, 5, 6, 6, 7, 8, 8, 8, 4, 3, 3, 2, 1, 2, 1, 2, 2, 6]
// app.get('/', (req, res) => {
//     // let data=Math.random();
//     // let data=(req.params);
//     // let sum=0;
//     res.render('index', { arr });
// });

// app.get('/new',(req,res)=>{
//     res.render('new')
// })


// 18/11/24................................................................................................
app.get('/',(req,res)=>{
    res.render("GetVSPost.ejs");
})


// http://localhost:8080/user?name=bdwg&pass=8272 (this Problem).
app.get('/user',(req,res)=>{
    res.send("Get Request Done");
})

//  http://localhost:8080/user (This Solution)
app.post('/user',(req,res)=>{
    res.send("Post Request Done");
})

app.listen(8080, () => {
    console.log("Server ready on port 8080");
});
