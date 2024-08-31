const mongoose = require('mongoose');

const crud = mongoose.Schema({
    Title : {
        type : String,
        required : true
    },
    Author : {
        type : String,
        required : true
    },
    PublishedYear : {
        type : String,
        required : true
    },
    Pages : {
        type : String,
        required : true
    },
    Price : {
        type : String,
        required : true
    },
    PublishedCopies : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

const crudTbl = mongoose.model("crud", crud);

module.exports = crudTbl;