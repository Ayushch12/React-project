
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Homepage/Hero";
import Header from "./components/Navbar/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      {/* <Routes>

        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/quisommes" element={<Quisommes />} />
        <Route exact path='/Solutions '  element={<Solutions />} />
        <Route exact path='/Contactez' element={<Contactez />} />

      </Routes> */}
      <Footer />
    </BrowserRouter>

  );
}

export default App;


