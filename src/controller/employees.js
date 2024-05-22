const EmployeeModel = require('../models/employees');

const getAllEmployees = async (req, res) => {
    try {
        const [data] = await EmployeeModel.getAllEmployees();

        res.json({
            message: "GET all employees success",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
}

module.exports = {
    getAllEmployees
}