import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordReset from "./pages/PasswordReset";
import Navigation from "./components/Navbar";

//styling
import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/password-reset" element={<PasswordReset />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
