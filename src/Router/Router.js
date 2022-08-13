const express = require("express");
const appRouters = express.Router();
const AdminService = require("../Services/service");
const AdminController = require("../Controllers/AdminController")
const adminMiddleware_auth=require("../Controllers/Middleware/Admin_Auth")

appRouters.post("/admin/registration",AdminController.adminRegistration);
appRouters.post("/admin/login", AdminController.adminLogin);
appRouters.get("/getusers",adminMiddleware_auth.adminAuth, AdminController.userList);
appRouters.get("/checkanagram",AdminController.Anagramcheck)






module.exports = appRouters;