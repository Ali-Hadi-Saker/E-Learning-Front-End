import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles/utilities.css'
import './Styles/index.css'

import Register from './Pages/Register';
import Login from "./Pages/LoginPage";

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
