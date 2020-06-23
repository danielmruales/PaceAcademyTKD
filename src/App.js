import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar.js'
import Home from './Home/Home.js'
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
          <Route exact path='/'  component={Home} />
          {/* <Route path='/'  component={} /> */}
          {/* <Route path='/'  component={} /> */}
          {/* <Route path='/'  component={} /> */}
          {/* <Route path='/'  component={} /> */}
          
      </Switch>
    </div>
  );
}

export default App;
