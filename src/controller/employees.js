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

const createNewEmployee = async (req, res) => {
    const { body } = req;

    try {
        await EmployeeModel.createNewEmployee(body);
        res.status(201).json({
            message: "CREATE new user success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }

}

module.exports = {
    getAllEmployees,
    createNewEmployee
}