import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import './assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      {/* initialize here the different route....  */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
