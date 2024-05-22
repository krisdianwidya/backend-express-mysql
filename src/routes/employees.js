const express = require('express')

const EmployeeController = require('../controller/employees')

const router = express.Router();

// READ - GET
router.get('/', EmployeeController.getAllEmployees)

module.exports = router