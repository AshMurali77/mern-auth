import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and components
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Students from "./pages/Students";
import Institutions from "./pages/Institutions";
import Function from "./pages/Function";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Awaiting from "./pages/Awaiting";
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
            <Route path="/vision" element={<Vision />} />
            <Route path="/students" element={<Students />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/function" element={<Function />} />
            <Route path="/coming-soon" element={<Awaiting />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
