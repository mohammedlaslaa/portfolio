import React from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';

import Home from './pages/Home';
import Maintenance from './pages/Maintenance';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/style.scss';

const maintenance = false;

function App() {
  return (
    <div className="App">
      {maintenance ? (
        <Maintenance />
      ) : (
        <>
          <Header />
          {/* initialize here the different route....  */}
          <Home />
          {/* <Footer /> */}
        </>
      )}
    </div>
  );
}

export default App;
