import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import PorteFolio from './components/pages/Portefolio'
import Produtos from './components/pages/Produtos'
import Faleconosco from './components/pages/Faleconosco'

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"

function App() {
  return (

    <Router>

      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/PorteFolio" element={<PorteFolio />} />
          <Route exact path="/produtos" element={<Produtos />} />
          <Route exact path="/faleconosco" element={<Faleconosco />} />
        </Routes>
      </Container>

      <Footer />

    </Router>
  );
}

export default App;