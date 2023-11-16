import React from "react";
import Footer from "./Footer/Footer";
import Catalogue from "./Catalogue/Catalogue";
import Panier from "./Panier/Panier";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
