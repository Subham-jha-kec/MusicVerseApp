import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Login from "./Login";
function Signup() {

const [name, setname]=useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()
const handleSubmit  = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name, email, password})           //register to home   // send all three data to the db
    .then(result=> {console.log(result)
        navigate("/login")

    })
    .catch(err=> console.log(err)
)
}

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-4 rounded w-25 shadow">

        <h2 className="text-center mb-4">Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e)=> setname(e.target.value)}
            />
          </div>

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
              placeholder="Enter Email"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e)=> setPassword(e.target.value)}

            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0 mb-2">
            Register
          </button>
          </form>
          <Link to="/login" className="btn btn-light border w-100 rounded-0 text-decoration-none">
            Login
          </Link>
        

      </div>
    </div>
  );
}

export default Signup;
