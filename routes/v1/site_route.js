const express = require('express');
const router = express.Router();
const siteController = require('../../controller/site_controller');

router.route('/addsite').post(siteController.addSite);
router.route('/getEmployeeName').get(siteController.getEmployeeName);
router.route('/getAssignedDates').get(siteController.getAssignedDates);

module.exports = router;