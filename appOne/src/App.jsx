import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './index.scss';

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="home">
      <Home />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
