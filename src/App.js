import "./App.css"

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Commercial from "./Pages/Commercial";
import External from "./Pages/External";
import Internal from "./Pages/Internal";
import Residential from "./Pages/Residential";
import Header from "./component/Header";

function App() {
  return (
    <div className="main-contaner">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/external" element={<External />} />
          <Route path="/internal" element={<Internal />} />
          <Route path="/residential" element={<Residential />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
