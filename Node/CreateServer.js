const { log } = require('console');
let http=require('http');
// console.log(http);

// server Create.
let server=http.createServer((req, res) => {
    // res.end("i am a server and You??");  // client ko response bhejna

    // Multiple Routes How to Works.
    if(req.url=='/'){
        res.end("This is Home page");
    }else if(req.url=='/about'){
        res.end("This is About Page");
    }
    else {
        res.end("404_ERROR , Page Not  Found")
    }
})

// Server ko port 3000 par listen karwane ke liye
const port=8080;
server.listen(port,()=>{
    console.log(`Server running post number ${port}`);
})




