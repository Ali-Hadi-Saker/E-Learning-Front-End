import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles/utilities.css'
import './Styles/index.css'
import { Provider } from "react-redux";

import Register from './Pages/Register';
import Login from "./Pages/LoginPage";
import Home from "./Pages/Home";
import Admin from "./Pages/AdminPage";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/admin" element={<Admin/>}/>
              </Routes>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
