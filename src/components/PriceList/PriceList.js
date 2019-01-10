import React, { Component } from "react";
import Price from "../Price/Price";
import axios from "axios";
import Spinner from "../../spinner.gif";

export default class PriceList extends Component {
  state = {
    prices: []
  };

  componentDidMount() {
    this.getPrices();
    this.interval = setInterval(() => {
      this.getPrices();
    }, 10000);
  }

  getPrices() {
    axios

      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      // Once we get a response, we'll map the API endpoints to our props
      .then(response => {
        this.setState({
          prices: []
        });

        setTimeout(() => {
          this.setState({
            prices: response.data
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
    const { prices } = this.state;

    let ret;

    if (Object.keys(prices).length) {
      ret = (
        <div className="row">
          <Price
            rate={prices.bpi.USD.rate}
            symbol={prices.bpi.USD.code}
            description={prices.bpi.USD.description}
          />
          <Price
            rate={prices.bpi.GBP.rate}
            symbol={prices.bpi.GBP.code}
            description={prices.bpi.GBP.description}
          />
          <Price
            rate={prices.bpi.EUR.rate}
            symbol={prices.bpi.EUR.code}
            description={prices.bpi.EUR.description}
          />

          <p>
            <div className="separator" />
            <small>{prices.disclaimer}</small>
          </p>
          <p>last update: {prices.time.updated} </p>
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
