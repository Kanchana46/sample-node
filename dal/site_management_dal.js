const db = require('../dbConnection/dbConnection');
var country = require('countrystatesjs');


exports.addSite = async (site) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `INSERT INTO site(siteId, company, siteDesc, location, address, siteType, suburb, postCode,
            state, country, siteMgr ,siteAstMgr, headCleaner, teamLeader, startDate, endDate, siteManagerId, siteAsstManagerId, teamLeaderId, headCleanerId) 
            VALUES(
                    '${site.siteId}', '${site.company}', '${site.siteDesc}', '${site.location}', '${site.address}', 
                    '${site.siteType}', '${site.suburb}', '${site.postCode}', '${site.state}',
                    '${site.country}', '${site.siteMgr.fullName}', '${site.siteAstMgr.fullName}', '${site.headCleaner.fullName}', 
                    '${site.teamLeader.fullName}', '${site.startDate}', '${site.endDate}', '${site.siteManagerId}', '${site.siteAsstManagerId}', 
                    '${site.teamLeaderId}', '${site.headCleanerId}'
                )`;
       
        await db.query(dbQuery, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0])
            }
        });
    })
}


exports.getEmployeeName = async () => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `SELECT id, CONCAT(firstName,' ', lastName) AS fullName, category FROM user WHERE category ='Site Manger' OR
         category ='Team Leader' OR category = 'Assist. Manager' OR category = 'Head Cleaner'`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);    
            }
        });
    })
}


exports.getAssignedDates= async () => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `SELECT user.employeeNo AS asstManagerEmpNo, site.siteManagerId, 
        site.siteAsstManagerId, site.teamLeaderId, site.headCleanerId, site.startDate, site.endDate FROM site LEFT JOIN user ON site.siteManagerId = user.id`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);    
            }
        });
    })
}

exports.getEmployeeNo = async (id) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `SELECT employeeNo FROM user WHERE id = '${id}'`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);    
            }
        });
    })
}