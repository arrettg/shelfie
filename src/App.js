import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";

function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/from" component={Form} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
