import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./screens/SignIn";
import GetJokes from "./screens/GetJokes";
import GetBitcoinPrice from "./screens/GetBitcoinPrice";

const Router = () => (
  <Switch>
    <Route exact path="/sign-in" component={SignIn} />
    <Route exact path="/get-jokes" component={GetJokes} />
    <Route exact path="/get-btc-price" component={GetBitcoinPrice} />
    <Route component={SignIn} />
  </Switch>
);

export default Router;
