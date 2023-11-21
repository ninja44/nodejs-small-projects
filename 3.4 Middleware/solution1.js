import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// this line helps dynamically finding courrect file path 
// because on the server you dont know what will be the file path
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// this line include bodyParser middle ware in our code
// app.use(bodyParser.urlencoded({extended:true}));
   app.use(express.urlencoded({ extended: true }));

//The below code sends the file "index.html" from the "public" directory when the user accesses the web application. The __dirname variable represents the directory path of the currently executing script, and is used to specify the correct file path.
app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

//This code is a Node.js middleware function. It logs the request body to the console. The req.body property contains the parsed body of the request.
app.post("/submit", (req, res) => {
  console.log(req.body);
});

//This code is a concise arrow function in JavaScript. It logs a message to the console when the server is listening on a specific port. The port number is represented by the variable 'port'.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});