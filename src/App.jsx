import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleProject from "./components/SingleProject";

import Home from "./components/Home";
import "./css/style.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:projectId" element={<SingleProject />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
