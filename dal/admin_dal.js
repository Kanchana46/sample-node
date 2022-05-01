const db = require('../dbConnection/dbConnection');
var country = require('countrystatesjs');

exports.addEmployee = async (user) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = ``;
        if (user.gender == undefined && user.phone == undefined && user.mobileNo == undefined && user.streetAddress == undefined
            && user.postalCode == undefined && user.state == undefined) {
                dbQuery = `INSERT INTO user(id, employeeNo, firstName, lastName, gender, email, phone, category,
                    mobileNo, streetAddress, postalCode ,state, taxFileNo, hourlyRate, penalty1, penalty2) 
                    VALUES(
                            '${user.id}', '${user.employeeNo}', '${user.firstName}', '${user.lastName}', "", 
                            '${user.email}', null, '${user.category}', null, null, null, null, '${user.taxFileNo}', 
                            '${user.hourlyRate}', '${user.penalty1}', '${user.penalty2}'
                        )`;
        } else {
                dbQuery = `INSERT INTO user(id, employeeNo, firstName, lastName, gender, email, phone, category,
                    mobileNo, streetAddress, postalCode ,state, taxFileNo, hourlyRate, penalty1, penalty2) 
                    VALUES(
                            '${user.id}', '${user.employeeNo}', '${user.firstName}', '${user.lastName}', '${user.gender}', 
                            '${user.email}', '${user.phone}', '${user.category}', '${user.mobileNo}',
                            '${user.streetAddress}', '${user.postalCode}', '${user.state}', '${user.taxFileNo}', 
                            '${user.hourlyRate}', '${user.penalty1}', '${user.penalty2}'
                        )`;
        } 
        await db.query(dbQuery, (err, results, fields) => {

            if (err) {
                reject(err);
            } else {
                resolve(results[0])
            }
        });
    })
}


exports.updateEmployee = async (user) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = ``;
        if (user.gender == undefined && user.phone == undefined && user.mobileNo == undefined && user.streetAddress == undefined
            && user.postalCode == undefined && user.state == undefined) { 
                dbQuery =  `UPDATE user SET firstName = '${user.firstName}', lastName = '${user.lastName}', gender = '', 
                            email = '${user.email}', phone = null, category = '${user.category}', mobileNo = null,
                            streetAddress = null, postalCode = null, state = null, taxFileNo = '${user.taxFileNo}', 
                            hourlyRate = '${user.hourlyRate}', penalty1 = '${user.penalty1}', penalty2 = '${user.penalty2}'
                            WHERE employeeNo = '${user.employeeNo}'`;
        } else {
            dbQuery =  `UPDATE user SET firstName = '${user.firstName}', lastName = '${user.lastName}', gender = '${user.gender}', 
                        email = '${user.email}', phone = '${user.phone}', category = '${user.category}', mobileNo = '${user.mobileNo}',
                        streetAddress = '${user.streetAddress}', postalCode = '${user.postalCode}', state = '${user.state}', taxFileNo = '${user.taxFileNo}', 
                        hourlyRate = '${user.hourlyRate}', penalty1 = '${user.penalty1}', penalty2 = '${user.penalty2}'
                        WHERE employeeNo = '${user.employeeNo}'`;
        }
        
        await db.query(dbQuery, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0])
            }
        });
    })
}

exports.deleteEmployee = async (userId) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `DELETE FROM user WHERE id = "${userId}"`;
        await db.query(dbQuery, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                console.log(results)
                resolve(results)
            }
        });
      
    })
}

