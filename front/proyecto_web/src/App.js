import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <center>Contenido aqui</center>
    <Footer/>
    </div>
  );
}

export default App;
