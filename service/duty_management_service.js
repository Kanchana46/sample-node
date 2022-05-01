const dutyDAL = require('../dal/duty_management_dal');
const { v4: uuidv4 } = require('uuid');
const UUID = require('uuid-int');


exports.addDuty = async (duty) => {
    return new Promise(async (resolve, reject) => {
       // console.log(duty)

       function uuidv4() {
         return 'DCxxxx'.replace(/[xy]/g, function(c) {
           var r = Math.random() * 6 | 0, v = c == 'x' ? r : (r & 0x6);
           return v;
         });
       }
       
       console.log('aaaa'+uuidv4());
       

        
           dutyCode1 = "DC"
           dutyCode2 = uuidv4();
            res = dutyCode1.concat(dutyCode2);


        

       duty.dutyCode = uuidv4();
        await dutyDAL.addDuty(duty).then(async (data, err) => {
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