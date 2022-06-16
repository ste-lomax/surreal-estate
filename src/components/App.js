import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
