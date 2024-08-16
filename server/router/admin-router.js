const express = require('express');
const { getAllUsers, getAllContact } = require('../controller/admin-controller');
const router = express.Router();

router.route('/users').get(getAllUsers);
router.route('/contact').get(getAllContact);

module.exports = router;