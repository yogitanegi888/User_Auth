const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const adminSchema = require("../Models/Admin.models");
const utilis = require("../Utilis/utilis");


class AdminService {
    async adminRegistration(admin) {
        admin.password = bcrypt.hashSync(admin.password, bcrypt.genSaltSync())
        const adminResult = await adminSchema.create(admin)
    }
    async adminLogin(credentailes) {
        const adminLoginAuth = await adminSchema.findOne({ Username: credentailes.Username }).exec()
        let admin = adminLoginAuth;

        if (bcrypt.compareSync(credentailes.password, admin.password)) {
            let payload = {
                name: admin.Name,
                Username: admin.Username,
                role: admin.role
            }
            const token = jwt.sign(payload, utilis.Jwt_Key, {
                algorithm: "HS256",
                expiresIn: 24 * 60 * 60,

            })
            return token;

        } else if (!adminLoginAuth) {
            console.log("User not found", 404)

        }

    }
    async GetUserList() {
        const userList = await adminSchema.find({}, '-password').exec()
        return userList
    }
}
module.exports = new AdminService()