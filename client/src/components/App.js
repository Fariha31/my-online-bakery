import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/Signup" component={SignUp} />
        <Route exact path="/Login" component={LogIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
