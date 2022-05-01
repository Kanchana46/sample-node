const express = require('express');
const router = express.Router();
const tagManagementController = require('../../controller/tag_management_controller');


router.route('/assignTag').post(tagManagementController.assignTag);
router.route('/getSiteDetails').get(tagManagementController.getSiteDetails);
router.route('/getAreaDetails').get(tagManagementController.getAreaDetails);
router.route('/getDutyDetails').get(tagManagementController.getDutyDetails);
router.route('/getTagDetails').get(tagManagementController.getTagDetails);




module.exports = router;