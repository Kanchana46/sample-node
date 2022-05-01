const express = require('express');
const router = express.Router();

const userRoutes = require('./user_route');
const commonRoutes = require('./common_route');
const adminRoutes = require('./admin_route');
const siteRoutes = require('./site_route');
const areaManagementRoutes = require('./area_management_route');
const dutyManagementRoutes = require('./duty_management_route');
const tagManagementRoutes = require('./tag_management_route');

router.use('/users', userRoutes);
router.use('/state', commonRoutes);
router.use('/admin', adminRoutes);
router.use('/site', siteRoutes);
router.use('/area', areaManagementRoutes);
router.use('/duty', dutyManagementRoutes);
router.use('/tag', tagManagementRoutes);

module.exports = router;