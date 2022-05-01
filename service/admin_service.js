const adminDAL = require('../dal/admin_dal');
const { v4: uuidv4 } = require('uuid');
const addEmpTemp = require('../templete/addEmployee_temp');
const mail = require('../util/mail_util');

exports.addEmployee = async (user) => {
    return new Promise(async (resolve, reject) => {
        user.id = uuidv4();
        await adminDAL.addEmployee(user).then(async (data, err) => {
             if (err) {
                reject(err);
             } else {
                resolve(data);
                const mailOptions = {
                    to: user.email,
                    subject: 'Employee Registration',
                    body:addEmpTemp.html.replace('{{vCode}}',user.employeeNo)
                }
                await mail.sendMail(mailOptions);
             }
        }).catch((err) => {
            reject(err);
        });
     });
     
     
 }


 exports.updateEmployee = async (user) => {
    return new Promise(async (resolve, reject) => {
        user.id = uuidv4();
        await adminDAL.updateEmployee(user).then(async (data, err) => {
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

 exports.deleteEmployee = async (userId) => {
    return new Promise(async (resolve, reject) => {
        await adminDAL.deleteEmployee(userId).then( async (data, err) => {
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
