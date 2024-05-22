const dbPool = require('../config/database')

const getAllEmployees = () => {
    const SQLQuery = 'SELECT * FROM employees';

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllEmployees
}