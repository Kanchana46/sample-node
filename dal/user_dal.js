const db = require('../dbConnection/dbConnection');
var country = require('countrystatesjs');

exports.getUser = async () => {
    return new Promise(async (resolve, reject) => {
        await db.query(`select * from user`,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results)
            }
        });
    })
}

exports.registerUser = async (user) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery =`UPDATE user SET firstName = '${user.firstName}', lastName = '${user.lastName}', gender = '${user.gender}', 
        email = '${user.email}', phone = '${user.phone}', password = '${user.password}', category = '${user.category}', mobileNo = '${user.mobileNo}',
        streetAddress = '${user.streetAddress}', postalCode = '${user.postalCode}', state = '${user.state}', taxFileNo = '${user.taxFileNo}', 
        hourlyRate = '${user.hourlyRate}', penalty1 = '${user.penalty1}', penalty2 = '${user.penalty2}', downloadURL = '${user.downloadURL}', vrCode = '${user.vrCode}'
         WHERE employeeNo = '${user.employeeNo}'`;
       
        await db.query(dbQuery, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0])
            }
        });
    })
}


exports.checkEmail = async (email) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `SELECT id, email, category FROM user WHERE email ='${email}'`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                if (results[0]) {
                    resolve(results[0]);
                } else {
                    resolve(null);
                } 
            }
        });
    })
}


exports.login = async (email) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `SELECT * FROM user WHERE email ='${email}'`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0]);    
            }
        });
    })
}

exports.getUserByUserId = async (id) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `SELECT * FROM user WHERE id = "${id}"`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0])
            }
        });
    })
}

exports.requestNewPassword = async (id, userId, verificationCode) => {
    return new Promise(async (resolve, reject) => {
        await db.query(`DELETE FROM resetpassword WHERE userId = "${userId}"`,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0])
            }
        });
        let dbQuery = `INSERT INTO resetpassword VALUES("${id}", "${userId}", "${verificationCode}")`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0])
            }
        });
    })
}

exports.getUserIdByEmail = async (email) => {
    return new Promise(async (resolve, reject) => {
        await db.query(`SELECT id FROM user WHERE email = "${email}"`,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0])
            }
        });
    })
}

exports.getVFCodeByUserId = async (userId) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `SELECT secretCode FROM resetpassword WHERE userId = "${userId}"`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0])
            }
        });
    })
}


exports.resetPassword = async (userId, password) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `UPDATE user SET password = "${password}" WHERE id = "${userId}"`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0])
            }
        });
    })
}

exports.verifyAccount = async (userId) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `UPDATE user SET isVerified = "1" WHERE id = "${userId}"`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0])
            }
        });
    })
}

exports.checkEmployeeNumber = async (empNo) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `SELECT * FROM user WHERE employeeNo = '${empNo}'`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                if (results[0]) {
                    resolve(results[0]);
                } else {
                    resolve(null);
                } 
            }
        });
    })
}

exports.verify = async (userId, vrCode) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `SELECT COUNT(Id) AS cnt FROM user WHERE Id = '${userId}' AND vrCode = '${vrCode}'`;
        await db.query(dbQuery,async (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                if (results[0]) {
                    if (results[0].cnt == 0) {
                        resolve(false)
                    } else {
                        let dbQuery1 = `UPDATE user SET isVerified = "1" WHERE id = "${userId}"`;
                        await db.query(dbQuery1,(err, results, fields) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(true)
                            }
                        });
                    }
                } else {
                    resolve(null);
                } 
            }
        });
    });
}



