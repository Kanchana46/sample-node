const tagDAL = require('../dal/tag_management_dal');
const { v4: uuidv4 } = require('uuid');

exports.assignTag = async (tag) => {
    return new Promise(async (resolve, reject) => {
       // console.log(area)
      
       console.log('aaaa'+uuidv4());
        tag.tagId = uuidv4();
        await tagDAL.assignTag(tag).then(async (data, err) => {
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


 exports.getSiteDetails = async () => {
   return new Promise(async (resolve, reject) => {
       await tagDAL.getSiteDetails().then( async (data, err) => {
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


exports.getAreaDetails = async () => {
    return new Promise(async (resolve, reject) => {
        await tagDAL.getAreaDetails().then( async (data, err) => {
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


 exports.getDutyDetails = async () => {
    return new Promise(async (resolve, reject) => {
        await tagDAL.getDutyDetails().then( async (data, err) => {
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


 exports.getTagDetails = async () => {
    return new Promise(async (resolve, reject) => {
        await tagDAL.getTagDetails().then( async (data, err) => {
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
