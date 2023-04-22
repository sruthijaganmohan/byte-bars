import './App.css';
import React from 'react';
import MarqueeHeader from './components/MarqueeHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <MarqueeHeader/>
        <Routes>
          <Route path="/"/>
          <Route path="/shop"/>
          <Route path="/account"/>
          <Route path="/cart"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
