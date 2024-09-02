// App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Sidebar />
       </div>
    </div>
  );
};

export default App;
