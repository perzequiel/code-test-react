import React, { Component } from "react";
import SideBar from "../Sidebar/Sidebar";
import Router from "../../routing/Router";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faIgloo,
  faUserAstronaut,
  faCoins,
  faGrinSquintTears
} from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo);
library.add(faUserAstronaut);
library.add(faCoins);
library.add(faGrinSquintTears);

class App extends Component {
  render() {
    return (
      <div id="App">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div id="page-wrap" className="container">
          <h1 className="header-center">Code Test</h1>
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
