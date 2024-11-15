// console.log("Helloo");

// File System .. (FS) - Pre-Define      --------------- sync
const { log } = require("console");
let fs=require("fs");
// console.log(fs);    // Methods hote he.

// 1... File Create krna.
// fs.writeFileSync("index.html","sync File System")

// 2... Read krna.
// let data=fs.readFileSync('index.html')
// console.log(data.toString()); // BUffer data deta esliye toString krna pdta he

//3... File delete krna.
// fs.unlinkSync('index.html')

// 4.. Update krna.
// fs.appendFileSync("index.html",'update sync File System')


// File System .. (FS)      --------------- async
// 1........... Create File.
fs.writeFile('index1.html','async file System',(err)=>{
    if(err) throw err
    console.log("All clear");  
})

// 2........... Read File
fs.readFile('index1.html',(err,data)=>{
    if(err) throw err
    console.log(data.toString());  
})

// 3...... Update krna File me.
fs.appendFile('index1.html','Update File System',(err)=>{
    if(err) throw err
    // console.log("All clear");  
})

// 4..... Delete krna 
fs.unlink('index1.html',(err)=>{
    if(err) throw err
    // console.log("All clear");  
})