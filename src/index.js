require('dotenv').config();
const PORT = process.env.PORT || 5000
const express = require('express');

const employeesRoutes = require('./routes/employees')

const app = express()
app.use(express.json())

app.use('/employees', employeesRoutes)

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server successfully run in port ${PORT}`);
})