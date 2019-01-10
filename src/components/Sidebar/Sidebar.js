import React from "react";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.scss";

export default props => {
  return (
    // Pass on our props
    <Menu right id={"menu-site"}>
      <h2>Menu</h2>

      <a className="menu-item" href="/sign-in">
        <FontAwesomeIcon icon="user-astronaut" />
        <span>Sign In</span>
      </a>

      <a className="menu-item" href="/get-jokes">
        <FontAwesomeIcon icon="grin-squint-tears" />
        <span>Get Jokes</span>
      </a>

      <a className="menu-item" href="/get-btc-price">
        <FontAwesomeIcon icon="coins" />
        <span>Get Bitcoin Price</span>
      </a>
    </Menu>
  );
};
