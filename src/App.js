import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./styles/header.scss";
// import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./styles/mediaquery.scss";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
