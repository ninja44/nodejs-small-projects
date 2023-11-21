const fs = require("fs");
fs.writeFile("message.txt","hellow from nodejs", (err)=>{
if(err) throw err;
console.log("file has been saved");    
});

//read file
fs.readFile('./message.txt',(err,data)=>{
    if(err) throw err;
    console.log(`The data in the text file is ${data}`);  //prints hellow from nodejs
});
