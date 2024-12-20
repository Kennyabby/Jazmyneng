import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import About from './components/About/About';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Distributor from './components/Distributor/Distributor';
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="landing-page">
      <Header />
      <Routes>
        <Route 
          element={
            <main>
              <Hero />
              <Main />
            </main>
          } 
          path='/'
        />
        <Route element={<About/>} path='/about'/>
        <Route element={<Products/>} path='/products'/>
        <Route element={<Contact/>} path='/contact'/>
        <Route element={<Distributor/>} path='/become-distributor'/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;