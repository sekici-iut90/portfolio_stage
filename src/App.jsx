import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Hero.jsx";
import About from "./Pages/About";
import Projects from "./Pages/competence.jsx";
import Contact from "./Pages/Contact";
import Formations from "./Pages/StagePage.jsx";



export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/stage" element={<Formations />} />
                <Route path="/" element={<Home />} />
                <Route path="/entreprise" element={<About />} />
                <Route path="/competence" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
