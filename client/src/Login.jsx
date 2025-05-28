import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Login() {

// const [name, setname]=useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate() 
const handleSubmit  = (e) => {                                                                                                                                //e is an event that stores response data
    e.preventDefault()
    axios.post('http://localhost:3001/login',{ email, password})
    .then(result=> {console.log(result)  
      if (!email || !password) {
      toast.error("Please fill in both email and password");
      return;
    }                                  //result is a variable that store data comes from backend as response
        if(result.data === "Success"){                   //success, because in json backend code i have mention that if user.password === password then print success
            navigate('/MusicApp')
        }
        // navigate("/home")

    })
    .catch(err=> console.log(err)
)
}

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-4 rounded w-25 shadow">

        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e)=> setEmail(e.target.value)}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e)=> setPassword(e.target.value)}

            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0 mb-2">
            Login
          </button>
          </form>
          <Link to="/signup" className="btn btn-light border w-100 rounded-0 text-decoration-none">
            SignUp
          </Link>
        

      </div>
    </div>
  );
}


export default Login;  