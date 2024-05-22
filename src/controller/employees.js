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

const getEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        const [data] = await EmployeeModel.getEmployee(id);

        res.json({
            message: "GET an employee success",
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
            message: "CREATE new employee success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }

}

const updateEmployee = async (req, res) => {
    const { id } = req.params
    const { body } = req;

    try {
        await EmployeeModel.updateEmployee(body, id);
        res.json({
            message: "UPDATE an amployee success",
            data: { id, ...body }
        })
    } catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}


const deleteEmployee = async (req, res) => {
    const { id } = req.params
    try {
        await EmployeeModel.deleteEmployee(id)
        res.json({
            message: "Delete an employee success",
            data: null
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
    getEmployee,
    createNewEmployee,
    updateEmployee,
    deleteEmployee
}