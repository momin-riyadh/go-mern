
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}


