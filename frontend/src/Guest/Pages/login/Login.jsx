import { Link } from "react-router-dom"
import "./login.scss"
import { useState } from "react"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome Back </h1>
          <p>Eat. Sleep. Game. Repeat.</p>

          <span>Don't you have an account</span>
          <Link to="/Guest/register">
            <button>Register</button>
          </Link>
          <span>Are you a developer?</span>
          <Link to="/Guest/DevRegister">
            <button>Register</button>
          </Link> 
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
            <input type="password" placeholder="password"  onChange={(event) => setPassword(event.target.value)} />
            
            <button>Login</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Login