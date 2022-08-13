const express = require("express");
var app = express();
const path = require("path")
const appRouters = require("./Router/Router")
var Router = express.Router();

const { connect } = require("mongoose");




bodyparser = require("body-parser")
const mongodbConfig = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
var url = "mongodb://localhost:27017/userAuth"
var Database = connect(url, mongodbConfig)


app.use(express.json())
app.use("/api", appRouters)

app.listen(3030, () => console.log("port listen on 3030"));