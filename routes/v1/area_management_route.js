const express = require('express');
const router = express.Router();
const areaManagementController = require('../../controller/area_management_controller');


router.route('/addArea').post(areaManagementController.addArea);



module.exports = router;