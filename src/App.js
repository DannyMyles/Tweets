import './App.css';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import React from 'react';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className="content">
      <Home />
     </div>
    </div>
  );
}

export default App;
