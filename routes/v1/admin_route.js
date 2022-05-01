const express = require('express');
const router = express.Router();
const adminController = require('../../controller/admin_controller');


router.route('/addEmployee').post(adminController.addEmployee);
router.route('/updateEmployee').post(adminController.updateEmployee);
router.route('/deleteEmployee').post(adminController.deleteEmployee);

module.exports = router;