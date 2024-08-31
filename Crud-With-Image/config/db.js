const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/harshil-crud-app-1");
const db = mongoose.connection;
db.once("open",(err)=>{
    err ? console.log(err) : console.log("Datbase Connected");
});
module.exports = db;