import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles/utilities.css'
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
