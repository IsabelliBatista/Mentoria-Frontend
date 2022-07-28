import React from 'react';
import About from './components/About/index.jsx';
import Banner from './components/Banner/index.jsx';
import Carrossel from './components/Carrossel/index.jsx';
import Footer from './components/Footer/index.jsx';
import Header from './components/Header/index.jsx'

const App = () => {
  return (
    <>
    <Header />
    <Banner />
    <Carrossel />
    <About />
    <Footer />
    </>
  );
}

export default App;