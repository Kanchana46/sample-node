const db = require('../dbConnection/dbConnection');
var country = require('countrystatesjs');


exports.addArea = async (area) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `INSERT INTO area(areaCode, areaDesc) 
            VALUES(
                    '${area.areaCode}', '${area.areaDesc}'
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
