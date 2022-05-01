const express = require('express');
const router = express.Router();

const userController = require('../../controller/user_controller');
const auth = require("../../middleware/auth");


router.route('/user').get(userController.getUser);
router.route('/register').post(userController.registerUser);
router.route('/checkEmail').post(userController.checkEmail);
router.route('/login').post(userController.login);
router.route('/requestNewPassword').post(userController.requestNewPassword);
router.route('/checkVFCode').post(userController.getVFCodeByUserId);
router.route('/resetPassword').post(userController.resetPassword);
router.route('/verifyAccount').post(auth, userController.verifyAccount);
router.route('/getUserByUserId').post(userController.getUserByUserId);
router.route('/checkEmployeeNumber').post(userController.checkEmployeeNumber);
router.route('/verify').post(userController.verify);

module.exports = router;