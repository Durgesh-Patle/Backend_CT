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

// CSS k liye Middile Ware or Rote to Understand the Server
app.use(express.static('public'))


// Middile ware used For Post request
app.use(express.urlencoded({ extended: true }));


// http://localhost:8080/user?name=bdwg&pass=8272 (this Problem).
// URL Ka Data get krNA HO TO ( req.query) ka use Krte he 
app.get('/user',(req,res)=>{
    let{name,pass} = req.query
    res.send(`Get Request Done Name: ${name} and Password: ${pass}`);
})

//  http://localhost:8080/user (This Solution)
// URL Ka Data get krNA HO TO ( req.body) ka use Krte he 
app.post('/user',(req,res)=>{
    let{name,pass} = req.body
    res.send(`Post Request Done Name: ${name} and Password: ${pass}`);
})

app.listen(8080, () => {
    console.log("Server ready on port 8080");
});
