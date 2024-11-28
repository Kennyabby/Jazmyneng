import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
// import Products from './components/Products';
// import QualityControl from './components/QualityControl';
// import DistributorForm from './components/DistributorForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;