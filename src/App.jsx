import React from "react";
import './App.css'
import './Components/Contato/Contato.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/footer';
import Section from './Components/Section/Section';
import Contato from "./Components/Contato/Contato";
import Curriculo from "./Components/Curriculo/Curriculo";




import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <> 
    <Header></Header>

    <Router>
    <div>

        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Portifolio</Link>
            </li>
            <li>
             
              <Link to="/Curriculo">Curriculo</Link>
            </li>
            <li>
              
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <Section></Section>
              <app />
            </>
          } />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Curriculo" element={<Curriculo />} />
        </Routes>
        
    </div>
    </Router>

    <Footer> </Footer>
    
     </>
  )
}

export default App;
