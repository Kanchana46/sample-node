const db = require('../dbConnection/dbConnection');
var country = require('countrystatesjs');


exports.assignTag = async (tag) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `INSERT INTO tag(tagId,siteId,areaCode,dutyCode,labourHrs) 
            VALUES(
                    '${tag.tagId}', '${tag.siteId}','${tag.areaCode}','${tag.dutyCode}','${tag.labourHrs}'
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


exports.getSiteDetails = async () => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `SELECT * FROM site`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);    
            }
        });
    })
}

exports.getTagDetails = async () => {
    return new Promise(async (resolve, reject) => {
         let dbQuery = `SELECT t.siteId as sid,s.siteId,s.company,s.siteType,s.siteDesc,s.location,s.startDate,s.endDate,
          a.areaDesc, d.dutyDesc,d.hourlyRate,t.labourHrs FROM tag t LEFT JOIN site s ON t.siteId = s.siteId LEFT JOIN area a
           ON t.areaCode = a.areaCode LEFT JOIN duty d ON t.dutyCode = d.dutyCode`;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);    
            }
        });
    })
}


exports.getAreaDetails = async () => {
    return new Promise(async (resolve, reject) => {
         dbQuery = `SELECT * FROM area `;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);    
            }
        });
    })
}


exports.getDutyDetails = async () => {
    return new Promise(async (resolve, reject) => {
         let dbQuery = `SELECT * FROM duty `;
        await db.query(dbQuery,(err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);    
            }
        });
    })
}
