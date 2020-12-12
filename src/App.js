import React from 'react';
import Navbar from './components/navbar/Navbar';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' />
      </Switch>
    </Router>
  );
}

export default App;
