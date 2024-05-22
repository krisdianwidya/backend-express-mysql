const express = require('express')

const EmployeeController = require('../controller/employees')

const router = express.Router();

// READ - GET all employees
router.get('/', EmployeeController.getAllEmployees)

// READ - GET an employee
router.get('/:id', EmployeeController.getEmployee)

// CREATE - POST
router.post('/', EmployeeController.createNewEmployee);

// UPDATE - PATCH
router.patch('/:id', EmployeeController.updateEmployee);

// DELETE - DELETE
router.delete('/:id', EmployeeController.deleteEmployee);

module.exports = router