import React, { Component } from "react";

export default class Joke extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const { icon, value, url, id } = this.props;

    return (
      <div className="Joke col-md">
        <div className="card ">
          <div className="card-header">
            <h5 className="card-title">
              <a href={url}>{id}</a>
            </h5>
          </div>
          <div className="card-body grid-joke">
            <img src={icon} alt="icon" />
            <p>{value}</p>
          </div>
        </div>
      </div>
    );
  }
}
