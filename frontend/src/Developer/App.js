

import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import Home from "./pages/home/Home";
import "./style.scss";
import Profile from "./pages/profile/Profile";



function App() {

  return (
    <div className={`theme-dark`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 9 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />

          </Routes>
        </div>
      </div>
    </div>
  );

}

export default App;
