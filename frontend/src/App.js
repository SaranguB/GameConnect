import React from "react";
import { Route, Routes } from "react-router-dom";
import Guest from './Guest/App'
import Admin from './Admin/App'
import User from './User/App'
import Developer from './Developer/App'

function App() {
  return (
    <Routes>
      <Route path="/Guest/*" element={<Guest />} />
      <Route path="/Admin/*" element={<Admin />} />
      <Route path="/User/*" element={<User />} />
      <Route path="/Developer/*" element={<Developer />} />
      
    </Routes>
  );
}

export default App;
