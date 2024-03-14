import Home from "./pages/home/Home"

import {
  Routes,
  Route
} from "react-router-dom";
import "./style/dark.scss"
import UploadGame from "./pages/uploadGame/UploadGame";

function App() {
  return (
    <div className="app ">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uploadgame" element={<UploadGame />} />
      </Routes>

    </div>
  );
}

export default App;
