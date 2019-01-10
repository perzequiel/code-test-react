import React, { Component } from "react";
import "./Popup.scss";

export default class Popup extends Component {
  onClick(event) {
    this.props.closePopup();
    this.props.login_handler(true);
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <button className="btn btn-primary" onClick={this.props.closePopup}>
            close me
          </button>
        </div>
      </div>
    );
  }
}
