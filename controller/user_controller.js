
const userService = require('../service/user_service');

exports.getUser = async function(req, res, next) {
    console.log('[commonController: getUser()]')
    try {
        await userService.getUser().then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[commonController: getUser() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error get user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[commonController: getUser() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error get user"
            },
            payload: null
        })
    }
}


exports.registerUser = async function(req, res, next) {
    console.log('[usercontroller: registerUser()]')
    try {
        await userService.registerUser(req.body).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[usercontroller: registerUser() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error get user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[usercontroller: registerUser() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error get user"
            },
            payload: null
        })
    }
}


exports.checkEmail = async function(req, res, next) {
    console.log('[usercontroller: checkEmail()]')
    try {
        console.log(req.body)
        await userService.checkEmail(req.body.email).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[usercontroller: checkEmail() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error get user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[usercontroller: checkEmail() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error get user"
            },
            payload: null
        })
    }
}

exports.login = async function(req, res, next) {
    console.log('[usercontroller: login()]')
    try {
        await userService.login(req.body).then((data, err) =>{
            console.log('data con')
            console.log(data)
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[usercontroller: login() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error get user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[usercontroller: login() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error get user"
            },
            payload: null
        })
    }
}

exports.requestNewPassword = async function(req, res, next) {
    console.log('[usercontroller: requestNewPassword()]')
    try {
        console.log(req.body)
        await userService.requestNewPassword(req.body.email).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[usercontroller: requestNewPassword() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error get user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[usercontroller: requestNewPassword() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error get user"
            },
            payload: null
        })
    }
}


exports.getVFCodeByUserId = async (req, res) => {
    console.log('[usercontroller: getVFCodeByUserId()]')
    try {
        console.log(req.body)
        await userService.getVFCodeByUserId(req.body.userId, req.body.vfCode).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[usercontroller: getVFCodeByUserId() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error get user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[usercontroller: requestNewPassword() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error get user"
            },
            payload: null
        })
    }  
}


exports.resetPassword = async function(req, res, next) {
    console.log('[usercontroller: resetPassword()]')
    try {
        console.log(req.body)
        await userService.resetPassword(req.body.userId, req.body.password).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[usercontroller: resetPassword() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error get user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[usercontroller: resetPassword() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error get user"
            },
            payload: null
        })
    }
}

exports.verifyAccount = async function(req, res, next) {
    console.log('[usercontroller: verifyAccount()]')
    try {
        console.log(req.body)
        await userService.verifyAccount(req.body.userId).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[usercontroller: verifyAccount() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error get user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[usercontroller: verifyAccount() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error get user"
            },
            payload: null
        })
    }
}

exports.checkEmployeeNumber = async function(req, res, next) {
    console.log('[usercontroller: checkEmployeeNumber()]')
    try {
        console.log(req.body)
        await userService.checkEmployeeNumber(req.body.empNo).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[usercontroller: checkEmployeeNumber() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error get user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[usercontroller: checkEmployeeNumber() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error get user"
            },
            payload: null
        })
    }
}


exports.getUserByUserId = async function(req, res, next) {
    console.log('[usercontroller: getUserByUserId()]')
    try {
        console.log(req.body)
        await userService.getUserByUserId(req.body.id).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[usercontroller: getUserByUserId() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error get user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[usercontroller: getUserByUserId() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error get user"
            },
            payload: null
        })
    }
}


exports.verify = async function(req, res, next) {
    console.log('[usercontroller: getUserByUserId()]')
    try {
        console.log(req.body)
        await userService.verify(req.body).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success verify user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[usercontroller: getUserByUserId() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error verifying user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[usercontroller: getUserByUserId() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error verifying user"
            },
            payload: null
        })
    }
}


