import React from 'react';
import './App.css';
import Footer from './Footer.js';
import { Route, Link } from 'wouter';

import Home from './pages/Home';
import Site from './pages/Site';

import TemaProvider from './contexts/Theme';

import Prueba from './Prueba';
import Header from './components/Header';
import ButtonPage from './components/ButtonPage';
import CardContent from './components/CardContent';

export default function App() {
  return (
    <div className="App">
      <TemaProvider>
        <Header />
        <Route path="/" component={Home} />

        <Route component={CardContent} path="/:site/:id" />
        {/* cambiarlo /:page/card/:id */}
        <Route component={Site} path="/:site" />

        {/* <Route component={Prueba} path="/prueba" />
        <Route component={Footer} path="/footer" /> */}
      </TemaProvider>
    </div>
  );
}
