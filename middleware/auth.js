const jwt = require('jsonwebtoken');
const userService = require("../service/user_service")

module.exports = async function(req, res, next) {
    const token = req.headers["authorization"];
    console.log(token)
    if (!token) {
        return res.status(401).json({
            status: {
                code: 401,
                name: "Unauthorized",
                message: "Unauthorized"
            }
        });
    } else {
        const decodedToken = jwt.verify(token, 'shhhhh');
        await userService.getUserByUserId(decodedToken.userId).then(async (data, error) => {
            if (error) {
                console.log(error)
            } else {
                if (data === undefined) {
                    return res.status(401).json({
                        status: {
                            code: 401,
                            name: "Unauthorized",
                            message: "Unauthorized"
                        }
                    });
                } else {
                    next();
                }
            }
        });
    }

}