import React from "react";
import { Redirect, Route, Switch } from "react-router";
import './App.css';
import Home from "./Home/Home";
import SearchResults from "./SearchResults/SearchResults";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/search">
          <SearchResults/>
        </Route>
        <Route path="/" exact>
          <Home/> 
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
