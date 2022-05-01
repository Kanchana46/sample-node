const express = require('express');
const router = express.Router();
const dutyManagementController = require('../../controller/duty_management_controller');


router.route('/addDuty').post(dutyManagementController.addDuty);



module.exports = router;