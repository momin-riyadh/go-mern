
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import CreateBook from "./components/CreateBook";
import showBookList from "./components/ShowBookList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={showBookList} />
            <Route path={'/create-book'} component={CreateBook} />
            {/*<Route path={'/create-book'} component={CreateBook} />*/}

        </div>
      </Router>
    );
  }
}

export default App;
