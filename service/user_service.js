const userDAL = require('../dal/user_dal');
const { v4: uuidv4 } = require('uuid');
//const bcrypt = require('bcrypt');
const saltRounds = 10;
const regTemp = require('../templete/register_temp');
const mail = require('../util/mail_util');
const jwt = require('jsonwebtoken');
const verifyAccHTML = require("../templete/verify_account_temp");

exports.getUser = async (req, res) => {
    return new Promise(async (resolve, reject) => {
        await userDAL.getUser().then( async (data, err) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        }).catch((err) => {
            reject(err);
        });
    });

}

exports.registerUser = async (user) => {
   return new Promise(async (resolve, reject) => {
       console.log(user)
        //user.id = uuidv4();
        //const salt = bcrypt.genSaltSync(saltRounds);
        //const hash = bcrypt.hashSync(user.password, salt);
       // console.log(bcrypt.compareSync("123", hash))
       // user.password = bcrypt.hashSync(user.password, salt)
        //console.log(hash)
        await userDAL.registerUser(user).then(async (data, err) => {
            if (err) {
                reject(err);
            } else {
                console.log(user)
                let URL = user.verifyAccURL + "/verify-account" + `?userId=${user.id}` + `&fname=${user.firstName}` + `&lname=${user.lastName}`
                console.log(URL)
               
                const mailOptions = {
                    to: user.email,
                    subject: 'Verify Account',
                    body: verifyAccHTML.temp.replace('{{vCode}}', user.vrCode)//verifyAccHTML.html.replace('clientURL', user.verifyAccURL).replace('userId', user.id)
                }
                await mail.sendMail(mailOptions);
                resolve(URL);
            }
        }).catch((err) => {
            reject(err);
        });
    });
    
    
}


exports.checkEmail = async (email) => {
    return new Promise(async (resolve, reject) => {
        await userDAL.checkEmail(email).then( async (data, err) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        }).catch((err) => {
            reject(err);
        });
    });
}


exports.login = async (user) => {
    return new Promise(async (resolve, reject) => {
        await userDAL.login(user.email).then( async (data, err) => {
            if (err) {
                reject(err);
            } else {
                let status =  null;
                let token = null;
                console.log(user.password)
                console.log(data)
                if (user.password === data.password) {
                    token = jwt.sign({ userId: data.id }, 'shhhhh');
                    status = true;
                }
                console.log(token)
                //resolve(true)
                resolve({
                    userId: data.id,
                    employeeNo: data.employeeNo,
                    username: data.firstName,
                    isVerified: data.isVerified,
                    status: status,
                    token: token
                });

                
            }
        }).catch((err) => {
            reject(err);
        });
    });

}

exports.getUserByUserId = async (id) => {
    return new Promise(async (resolve, reject) => {
        await userDAL.getUserByUserId(id).then( async (data, err) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        }).catch((err) => {
            reject(err);
        });
    });
}

exports.requestNewPassword = async (email) => {
    console.log("EM "+email)
    return new Promise(async (resolve, reject) => {
        await userDAL.getUserIdByEmail(email).then(async (data, err) => {
            console.log(data)
            let random = Math.floor(100000 + Math.random() * 900000);
            await userDAL.requestNewPassword(uuidv4(), data.id, random);
            //sent mail
            console.log(random)

            const mailOptions = {
                to: email,
                subject: 'Reset Password Verification',
                body:regTemp.html.replace('{{vCode}}',random)
                
            }
           await mail.sendMail(mailOptions)
           resolve(true);
           
        })
    });
}

exports.getVFCodeByUserId = async (userId, vfCode) => {
    return new Promise(async (resolve, reject) => {
        await userDAL.getVFCodeByUserId(userId).then(async (data, err) => {
            console.log(data.secretCode === vfCode)
            if (err) {
                reject(err);
            } else {
                if (data.secretCode === vfCode) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        });
    })
}


exports.resetPassword = async (userId, password) => {
    return new Promise(async (resolve, reject) => {
        /*const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        password = bcrypt.hashSync(password, salt);*/
        await userDAL.resetPassword(userId, password).then(async (data, err) => {
             if (err) {
                 reject(err);
             } else {
                 resolve(data);               
             }
         }).catch((err) => {
             reject(err);
         });
     });
 }

 exports.verifyAccount = async (userId) => {
    return new Promise(async (resolve, reject) => {
        await userDAL.verifyAccount(userId).then(async (data, err) => {
             if (err) {
                 reject(err);
             } else {
                 resolve(data);               
             }
         }).catch((err) => {
             reject(err);
         });
     });
 }

 exports.checkEmployeeNumber = async (empNo) => {
    return new Promise(async (resolve, reject) => {
        await userDAL.checkEmployeeNumber(empNo).then( async (data, err) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        }).catch((err) => {
            reject(err);
        });
    });
}

exports.verify = async (params) => {
    return new Promise(async (resolve, reject) => {
        await userDAL.verify(params.userId, params.vrCode.replace('-', '')).then( async (data, err) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        }).catch((err) => {
            reject(err);
        });
    });
}
