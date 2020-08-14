import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import userDashboard from "./userDashboard";
import AdminDashboard from "./adminDashboard";
import AdminRoute from "./adminRoutes";
import UserRoute from "./userRoutes";
import UploadProduct from "./uploadProduct";
import UpdateProduct from "./updateProduct";
import UpdateCategory from "./updateCategory";
import CakesHomePage from "./cakes";
import DisplayProducts from "./DisplayProducts";
import DisplayCategory from "./DisplayCategory";
import GetCategory from "./getOnlyCategory";
import notFound from "./notFound";
import DisplayProd from "./displayProduct";
import DetailProductPage from "./DetailProductPage";
import CartContextProvider from "../contexts/CartContext";
import CartList from "./CartList";
const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <UserRoute exact path="/user/dashboard" component={userDashboard} />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <Route exact path="/menu/Cakes/HomePage" component={CakesHomePage} />
          <Route
            exact
            path="/admin/dashboard/DisplayProduct"
            component={DisplayProducts}
          />
          <Route exact path="/Cart/Items" component={CartList} />
          <Route
            exact
            path="/admin/dashboard/DisplayCategory"
            component={DisplayCategory}
          />
          <Route
            exact
            path="/admin/dashboard/uploadProduct"
            component={UploadProduct}
          />
          <Route
            exact
            path="/admin/dashboard/updateProduct/:id"
            component={UpdateProduct}
          />
          <Route
            exact
            path="/admin/dashboard/updateCategory/:id"
            component={UpdateCategory}
          />
          <Route
            exact
            path="/home/item/itemDetail/:id"
            component={DetailProductPage}
          />
          <Route exact path="/home/Items" component={DisplayProd} />
          <Route exact path="/category" component={GetCategory} />
          <Route exact path="/notfound" component={notFound} />
          <Redirect to="/notfound" />
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
