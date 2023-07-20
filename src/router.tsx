import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
