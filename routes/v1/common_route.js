const express = require('express');
const router = express.Router();

const commonController = require('../../controller/common_controller');


router.route('/states').get(commonController.getStates);


module.exports = router;