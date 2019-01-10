import React, { Component } from "react";
import Joke from "../Joke/Joke";
import axios from "axios";
import Spinner from "../../spinner.gif";

export default class JokeList extends Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    this.getJokes();
    this.interval = setInterval(() => {
      this.getJokes();
    }, 120000);
  }

  getJokes() {
    axios
      .get("https://api.chucknorris.io/jokes/search?query=friend")
      // Once we get a response, we'll map the API endpoints to our props
      .then(response => {
        this.setState({
          jokes: []
        });

        setTimeout(() => {
          this.setState({
            jokes: response.data.result
          });
        }, 1000);
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch(error => this.setState({ error }));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { jokes } = this.state;

    let ret;
    console.log(jokes);
    if (Object.keys(jokes).length) {
      ret = (
        <div className="row">
          {jokes.map((joke, i) => {
            return (
              <Joke
                icon={joke.icon_url}
                value={joke.value}
                url={joke.url}
                id={joke.id}
              />
            );
          })}
        </div>
      );
    } else {
      ret = (
        <div className="spinner">
          <img src={Spinner} alt="loading" />
        </div>
      );
    }
    return (
      <div className="card">
        <div className="card-body">{ret}</div>
      </div>
    );
  }
}
