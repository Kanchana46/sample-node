const db = require('../dbConnection/dbConnection');
var country = require('countrystatesjs');


exports.addDuty = async (duty) => {
    return new Promise(async (resolve, reject) => {
        let dbQuery = `INSERT INTO duty(dutyCode, dutyDesc, hourlyRate) 
            VALUES(
                    '${duty.dutyCode}', '${duty.dutyDesc}', '${duty.hourlyRate}'
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
