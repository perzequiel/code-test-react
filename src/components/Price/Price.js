import React, { Component } from "react";

export default class Price extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const { rate, symbol, description } = this.props;

    return (
      <div className="Price col-md">
        <div className="card ">
          <div className="card-header">
            <h5 className="card-title">{description}</h5>
          </div>
          <div className="card-body">
            <h3>
              {symbol} {rate}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
