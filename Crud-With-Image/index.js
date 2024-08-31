const express = require("express");

const port = 7000;

const db = require("./config/db");

const crudschema= require("./model/crudSchema");

const multer = require("multer");

const path = require("path");


const app = express();

app.set("view engine","ejs");

app.use(express.urlencoded());

const Storage = multer.diskStorage({
    destination : (req , file , cb)=>{
        cb(null,"uploads/");
    },
    filename : (req , file , cb)=>{
        cb(null,file.fieldname+"-"+Date.now());
    }
})

const uploadPic = multer({storage : Storage}).single("image");
app.use(express.static(path.join(__dirname,"uploads")));

app.get("/", async(req,res)=>{
    let data = await crudschema.find({});
    data ? res.render("index",{data}) : console.log("Data Not Found");
});

app.post("/insert", uploadPic ,async(req,res)=>{
    req.body.image = req.file.filename;

    let data = await crudschema.create(req.body);
    data ? res.redirect("back") : console.log("Data Not Submitted !!!");
});

app.get("/deleteData", async(req,res)=>{
    let deleteData = await crudschema.findByIdAndDelete(req.query.id);
    deleteData ? res.redirect("back") : console.log("Data Not Deleted !!!");
});

app.get("/editData", async(req,res)=>{
    let editdata = await crudschema.findById(req.query.id);
    editdata ? res.render("edit",{editdata}) : console.log("Edited Not Found");
});

app.post("/editData",async(req,res)=>{
    const update = await crudschema.findByIdAndUpdate(req.query.id,req.body);
    update ? res.redirect("/") : console.log("Data Not Edited !!!");
});

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server Started ${port}`);
});