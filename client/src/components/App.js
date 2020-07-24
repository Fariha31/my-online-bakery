import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import userDashboard from "./userDashboard";
import adminDashboard from "./adminDashboard";
import AdminRoute from "./adminRoutes";
import UserRoute from "./userRoutes";
import UploadProductPage from "./uploadProductPage";
import CakesHomePage from "./cakes";
import notFound from "./notFound";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <UserRoute exact path="/user/dashboard" component={userDashboard} />
        <AdminRoute exact path="/admin/dashboard" component={adminDashboard} />
        <Route exact path="/menu/Cakes/HomePage" component={CakesHomePage} />
        <Route
          exact
          path="/admin/dashboard/uploadProduct"
          component={UploadProductPage}
        />
        <Route exact path="/notfound" component={notFound} />
        <Redirect to="/notfound" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
