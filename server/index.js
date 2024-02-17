const express = require("express")
// const mongoose = require("mongoose")
const { default: mongoose } = require("mongoose")
const cors = require("cors")

const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())


const dbConnect = () => {
    try {
        const conn = mongoose.connect("mongodb+srv://Admin:Pass1327@cluster0.dhen0jn.mongodb.net/employee");
        console.log("Database connection successful");
    } catch (error) {
        console.log("Database Error");
    }
}

dbConnect()
// mongoose.connect("mongodb+srv://Admin:Pass1327@cluster0.dhen0jn.mongodb.net/employee")

app.post('/register', (req,res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log("Server is up and running ")
})