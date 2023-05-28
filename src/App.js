import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
