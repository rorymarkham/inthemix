import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import router from './router'
import Home from './Components/Home/Home'

function App() {
  return (
    <HashRouter>
      {/* <Home/> */}
      {router}
    </HashRouter>
  );
}

export default App;
