let mongoose = require('mongoose');
let express = require('express');
const User = require('./model/User');
let app = express();


app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/databasename').then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send("Home Page");
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
       res.send("Created Account");
    }
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

// app.post('/update',async(req,res)=>{
//     let upData = req.body

//     let data= await User.updateOne({email:upData.email});
// })

app.listen(8000, console.log("Server On Port 8000"));