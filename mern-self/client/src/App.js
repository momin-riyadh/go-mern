
import React, {Component} from "react";
import {BrowserRouter, Routes,  Route} from "react-router-dom";
import './App.css';
import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<ShowBookList/>} />
            <Route path={'/create-book'} element={<CreateBook/>} />
            {/*<Route path={'/create-book'} component={CreateBook} />*/}

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
