import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles/utilities.css'
import './Styles/index.css'

import Register from './Pages/Register';
import Login from "./Pages/LoginPage";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />


        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
