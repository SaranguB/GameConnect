import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/login/Login"
import Register from "./Pages/register/Register"
import DevRegister from "./Pages/devRegister/DevRegister"
import Edit from './Pages/register/Edit';
import DevEdit from './Pages/devRegister/DevEdit';


const App = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/DevRegister" element={<DevRegister />} />
      <Route path="/Edit" element={<Edit />} />
      <Route path="/DevEdit" element={<DevEdit />} />
    </Routes>
  )
}

export default App