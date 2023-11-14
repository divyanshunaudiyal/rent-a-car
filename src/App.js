import About from "./pages/about";
import Home from "./pages/Home";
import Navbar from "./Components/navbar";
import Info from "./pages/Info";
import { Route, Routes } from "react-router-dom";

import Testimonials from "./Components/testimonials";
import Contact from "./Components/contact";
import "./Styles/App.scss";
import Models from "./pages/Models";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
      </Routes>
    </>
  );
}

export default App;
