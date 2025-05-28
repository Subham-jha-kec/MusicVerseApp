const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employee")

const app = express()
app.use(express.json())
app.use(cors())                       //cors is use to communicate frontend with backend 


mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post("/login",(req,res)=>{                                                                                                                                                                                                                 //frontend se aya data (email,pass) ko handle karta h
    const{email,password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){                               
                res.json("Success")                                                                                                                                                                                             //ye (success) response frontend  code pe check hoke yadi success backend bhejta h to home page pe route kardega after successfully login
            }else {
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post('/register', (req,res)=>{                                                                                                                                                                                            //handle register (create new record in db) request from frontend
EmployeeModel.create(req.body)                                                                                                                                                                                           //it is use to insert data comes from frontend to employee model in db
.then(employees => res.json(employees))                                                                                                                                                                                                                       //it is used to send response to frontend ,whatever response have been send by backend  like user created successfully
.catch(err => res.json(err))

})


app.listen(3001,()=>{
    console.log("server is running")
})