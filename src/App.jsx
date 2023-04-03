import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Contact from "./views/Contact";

function App() {
    return ( 
      <>
      <header>
          <h1>Project Gamma</h1>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
      </header>

      <main>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
       </Routes>
      </main>
    </>
     )
}

export default App
