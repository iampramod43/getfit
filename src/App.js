import React from 'react';
import './App.css';
import Main from './Main';
import Middlebar from './Middlebar';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">

      <Sidebar />
      <Middlebar />
      <Main />
      </div>
    </div>
  );
}

export default App;
