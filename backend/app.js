const express = require('express'); //to build backend quickly
const app = express(); //instance of express. 
const cors = require('cors'); //cross origin policy
const PORT = 8745;

app.use(cors()); //use cors package when server starts
app.use(express.json()); //to parse json data
app.use(express.urlencoded({extended:true})); //to parse url encoded data
app.use(express.static('public')); //to serve static files

//DB
require('./dB')
app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`);
}
)
