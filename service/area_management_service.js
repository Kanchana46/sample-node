const areaDAL = require('../dal/area_management_dal');
const { v4: uuidv4 } = require('uuid');

exports.addArea = async (area) => {
    return new Promise(async (resolve, reject) => {
        function uuidv4() {
         return 'ACxxxx'.replace(/[xy]/g, function(c) {
           var r = Math.random() * 6 | 0, v = c == 'x' ? r : (r & 0x6);
           return v;
         });
       }
      area.areaCode = uuidv4();
        await areaDAL.addArea(area).then(async (data, err) => {
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