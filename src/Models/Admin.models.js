const { Schema, model } = require("mongoose");
//const mongoose=require("mongoose");
const AdminSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true,
        unique:true
        
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }

})
const models = model("admin", AdminSchema);
module.exports = models;