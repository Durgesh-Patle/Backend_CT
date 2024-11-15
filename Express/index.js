let express = require('express')
let app = express()

//  Middile Ware  get method..............................................
// app.use((req,res,next)=>{
//     // res.send("I a Body Gourd")
//     next(); // Passes control to the next middleware
// })

//  middileware..................................................
//json()--------------- post method to data get use with middileware.   Json()formate......................
// app.use(express.json())

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));



// app.use((req,res)=>{
//     // res.send("I a Body Gourd")
//     // next(); // Passes control to the next middleware

//     res.send("Secound Middileware")
// })

// Noramal formate..................
// app.get('/', (req, res) => {
//     res.send("Home Page");
// })

// app.get('/about', (req, res) => {
//     res.send("About Page");
// })

//  Dynamic Routing ....................................... Path Parameter.
// let arr = [1, 2, 3, 4, 5, 6, 6, 7, 1, 2, 3, 4, 1, 55, 6, 777, 8, 8]

// app.get('/:data', (req, res) => {
//     console.log(req.params);
//     let { data } = req.params;

// For Loop Through;...............
// let c = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (data == arr[i]) c++;
// }
// if(c>0){
//     res.send(`${data} is =${c} time repeat`);
//     while(c!=0){
//         res.send('Durgesh Patle')
//     }
// }else{
//     res.send(`data: ${data}`)
// }

// filter method through.............
//     let filterData = arr.filter((val) => {
//         return val == data;
//     })

//     // res.send(filterData)

//     // Print the Name .
//     let name=filterData.map(() => {
//         return "Durgesh Patle"
//     })
//     res.send(name)
// })



//  Dynamic Routing ....................................... Quiry Parameter.  get mathod.
// http://localhost:8080/search?fistname=Durgesh&&lastname=Patle
app.get('/search', (req, res) => {
    // res.send("Quiry Parameter.")
    // res.send(req.query)
    // console.log(req.query);
    let { fistname, lastname } = req.query
    res.send(`${fistname}  ${lastname}`)
})

// Post method .........................................
app.post('/search',(req,res)=>{
    // console.log(req.body,"json() Data Method");

    // form Data.
    // const formData = req.body;
    // console.log("Received form data:", formData);
    // res.send("Form data received!");
})


// Server Create...........................
app.listen(8080, (req, res) => {
    console.log("Server ready on port 8080");
})