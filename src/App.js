import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SliderBanner from './Components/SliderBanner/SliderBanner';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import MainContent from './Components/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SliderBanner />
        <Navigation />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
