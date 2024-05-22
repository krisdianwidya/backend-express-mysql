const express = require('express')

const EmployeeController = require('../controller/employees')

const router = express.Router();

// READ - GET
router.get('/', EmployeeController.getAllEmployees)

// CREATE - POST
router.post('/', EmployeeController.createNewEmployee);

// UPDATE - patch
router.patch('/:id', EmployeeController.updateEmployee)

module.exports = router