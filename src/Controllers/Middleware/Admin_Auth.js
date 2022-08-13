const jwt = require("jsonwebtoken")

const utilis = require("../../Utilis/utilis");

const AUTH_HEADER = "Authorization";
class Middleware_auth {
    async adminAuth(req, res, next) {
        const authHeader = req.header(AUTH_HEADER);
        if (authHeader) {
            if (authHeader.startsWith("Bearer ")) {
                const token = authHeader.substr(7);
                const userPayload = jwt.verify(token, utilis.Jwt_Key);
                if (userPayload.role === "admin") {
                    req.user = userPayload
                    next();
                } else {
                    res.status(401).json({ message: "You're not valid User " })
                }
            } else {
                res.status(401).json({
                    message: "Authentication Failed. Token Expired or Malformed Token"
                })
            }
        } else {
            res.status(401).json({ message: "You're not authenticated " })
        }
    }
}
module.exports = new Middleware_auth();