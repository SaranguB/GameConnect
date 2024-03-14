import { Link } from "react-router-dom"
import "./register.scss"
import { useState } from "react"
import { Box } from "@mui/material"
import axios from 'axios'

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      username: username,
      email: email,
      password: password,
      name: name
    }

    axios.post('http://localhost:5000/User', data).then((response) => {
      console.log(response.data);
      setEmail('')
      setUsername('')
      setPassword('')
      setConfirmPassword('')
      setName('')
    })
  }


  return (

    <Box className="register" component={'form'} onSubmit={handleSubmit}>
      <div className="card">
        <div className="left">
          <h1>GameConnect</h1>
          <p>“I’m the hero of a thousand stories. I’m a superhero, an assassin a soldier. I’ve slain dragons and traveled through portals. I am a spartan, a commander. A king. I’ve saved a thousand worlds and countless more lives. What am I? I’m a gamer.”</p>

          <span>Do you have an account?</span>
          <Link to="/Guest/login">
            <button>Login</button>
          </Link>
          <span>Are you a developer?</span>
          <Link to="/Guest/DevRegister">
            <button>Register</button>
          </Link>

        </div>
        <div className="right">
          <h1>Register</h1>
          <Box className="form">
            <input type="text" placeholder="Username" value={username}
              onChange={(event) => setUsername(event.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <input type="password" placeholder="confirm password"value={confirmPassword}  onChange={(event) => setConfirmPassword(event.target.value)} />
            <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
            <button type="submit">Register</button>
          </Box>
        </div>
      </div>
    </Box>
  )
}

export default Register