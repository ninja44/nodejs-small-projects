import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var json = "";
var bandName = "";

app.use(bodyParser.urlencoded({extended:true}));

//The provided code creates a bandNameGenerator function that takes a request (req), response (res), and a next middleware function (next) as arguments.

//It logs the request body, creates a new band name by combining the "street" and "pet" values from the request body, logs the new band name, and finally calls the next middleware function in the request-response cycle.

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  console.log(bandName);
  next();
}

app.use(bandNameGenerator);

//This code defines an HTTP route handler for a request (req) and response (res) object. When this route is hit, the server will respond by sending the "index.html" file from the "public" directory.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // send the band name to the client
res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
