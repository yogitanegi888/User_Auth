const express = require("express");
const { adminLogin } = require("../Services/service");
const AdminService = require("../Services/service")
const AdminSchema = require("../Models/Admin.models")

class AdminController {
    async adminRegistration(req, res) {
        try {
            let adminReg = req.body;
            console.log("start")
            let AdminPayload = await AdminService.adminRegistration(adminReg)

            res.json({
                Message: "registration is Sucessfully done"
            }, 200)

        } catch (error) {

            console.log(error)
            res.status(500).json({
                Message: "User is already exist"
            })

        }
    }
    async adminLogin(req, res) {
        try {
            let credentailes = req.body;
            let AdminLogin = await AdminService.adminLogin(credentailes);
            res.json({
                Message: "Login  is Sucessfully done",
                token: AdminLogin

            }, 200)
        } catch (error) {

            res.json({
                Message: "unable to login"
            })
        }

    }
    async userList(rq, res) {
        try {
            let UserList = await AdminService.GetUserList();
            res.json({
                Message: "users is Get",
                data: UserList
            })

        } catch (error) {

        }






    }




}



module.exports = new AdminController()