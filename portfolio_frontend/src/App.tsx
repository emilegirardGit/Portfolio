import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Skills  from './views/Skills';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Javascript from './views/Skills/Javascript';
import Java from './views/Skills/Java';
import Csharp from './views/Skills/Csharp';
import RestAPI from './views/Skills/RestAPI';
import Android from './views/Skills/Android';
import IOS from './views/Skills/IOS';
import Projects from './views/Projects';
import FitWSarah from './views/Projects/FitWSarah';
import Databases from './views/Skills/Databases';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/skills/javascript" element={<Javascript />}/>
          <Route path="/skills/java" element={<Java />}/>
          <Route path="/skills/csharp" element={<Csharp />}/>
          <Route path="/skills/restapi" element={<RestAPI />}/>
          <Route path="/skills/android" element={<Android />}/>
          <Route path="/skills/ios" element={<IOS />}/>
          <Route path="/skills/databases" element={<Databases />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/projects/fitwsarah" element={<FitWSarah />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
