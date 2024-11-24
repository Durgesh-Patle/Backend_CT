let mongoose = require('mongoose');
let express = require('express');
const User = require('./model/User');
let app = express();

// Middile Ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// set the ejs Path...
app.set('view engine' , 'ejs');

// Connect DB
mongoose.connect('mongodb://127.0.0.1:27017/databasename').then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log(err);
})

// Home Page
app.get('/', (req, res) => {
    res.render("index");
})


// Register Page Create..
app.get('/create',(req,res)=>{
    res.render('Create')
})

app.post("/create",async (req, res) => {
    let user = req.body;
    // console.log(user);
    let data=await User.findOne({email:user.email})

    if(data){
        res.send("User Alreadyy Exits")
    }else{
      let dbUser=  new User({
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            passWord:user.passWord,
        })
       await dbUser.save();
       res.send("Apka Account Successfully Create Ho gya");
    }
})


// Login Page
app.get('/login',(req,res)=>{
    res.render('Login')
})

app.post('/login',async (req,res)=>{
    let loginData=req.body;

    let data=await User.findOne({email:loginData.email});
    if(data){
        let validPass=await loginData.passWord==data.passWord;
        if(validPass){
            res.send("Loginnnnnnnnnnnn....")
        }else{
            res.send("Invalid Pass");
        }
    }else{
        res.send("Phle Account Create Kro....")
    }
})


// Server Readyyyy
app.listen(8000, console.log("Server On Port 8000"));