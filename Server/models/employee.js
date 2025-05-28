const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("employees",EmployeeSchema)                                                                                                                       //Ye Employeeschema define karta hai ki employees collection ke documents ka structure kya hoga.
module.exports = EmployeeModel

















































//EmployeeModel ek JavaScript object hai jo employees collection ke saath interact karne ke liye use hota hai.

//Is model ke through aap database me records create, read, update, delete (CRUD operations) kar sakte hain.