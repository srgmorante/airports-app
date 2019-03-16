import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import HomeContainer from './01-containers/home';
import AirportsContainer from './01-containers/airports';
import ContactContainer from './01-containers/contact';
import HeaderComponent from './00-components/header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderComponent />

          <Route path="/" exact component={HomeContainer} />
          <Route path="/airports/" component={AirportsContainer} />
          <Route path="/contact/" component={ContactContainer} />
        </div>
      </Router>

    );
  }
}

export default App;
