const commonDAL = require('../dal/common_dal');
var country = require('countrystatesjs');

const mail = require('../util/mail_util');
const regTemp = require('../templete/register_temp');


exports.getStates = async () => {
    let states = country.states('AU');
   // console.log(regTemp.temp)
    return states;



}





