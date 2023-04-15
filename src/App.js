import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  if(window.onload){
    console.log('hi')
  }
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
