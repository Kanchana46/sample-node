const siteDAL = require('../dal/site_management_dal');
const { v4: uuidv4 } = require('uuid');

exports.addSite = async (site) => {
    return new Promise(async (resolve, reject) => {
        console.log(site)
        
        site.siteId = uuidv4();
        await siteDAL.addSite(site).then(async (data, err) => {
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


exports.getEmployeeName = async () => {
    return new Promise(async (resolve, reject) => {
        await siteDAL.getEmployeeName().then( async (data, err) => {
            console.log(data)
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

exports.getAssignedDates = async () => {
    return new Promise(async (resolve, reject) => {
        await siteDAL.getAssignedDates().then( async (data, err) => {
            console.log(data)
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


