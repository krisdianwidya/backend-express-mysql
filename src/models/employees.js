const dbPool = require('../config/database')

const getAllEmployees = () => {
    const SQLQuery = 'SELECT * FROM employees';

    return dbPool.execute(SQLQuery)
}

const createNewEmployee = (body) => {
    const SQLQuery = `INSERT INTO employees (first_name, last_name, gender, role, salary, birth_date, join_date) 
    VALUES ('${body.first_name}', '${body.last_name}', '${body.gender}', '${body.role}', '${body.salary}', '${body.birth_date}', '${body.join_date}')`

    return dbPool.execute(SQLQuery)
}

const updateEmployee = (body, id) => {
    const SQLQuery = `UPDATE employees SET first_name='${body.first_name}', last_name='${body.last_name}', gender='${body.gender}', role='${body.role}', salary=${body.salary}, birth_date='${body.birth_date}', join_date='${body.join_date}' WHERE employee_id='${id}'`

    return dbPool.execute(SQLQuery)
}

const deleteEmployee = (id) => {
    const SQLQuery = `DELETE FROM employees WHERE employee_id=${id}`

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee
}