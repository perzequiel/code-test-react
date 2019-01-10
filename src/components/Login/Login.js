import React, { Component } from "react";
import validator from "validator";
import passwordValidator from "password-validator";
import Spinner from "../../spinner.gif";
import "./Login.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false,
      showEmailError: false,
      EmailErrorMsg: "",
      showPasswordError: false,
      PasswordErrorMsg: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      showEmailError: false,
      EmailErrorMsg: "",
      showPasswordError: false,
      PasswordErrorMsg: ""
    });

    if (!validator.isEmail(this.state.email)) {
      this.setState({
        showEmailError: true,
        EmailErrorMsg: "Please use a valid email"
      });
      return;
    }

    var schema = new passwordValidator();
    // password criteria
    schema
      .is()
      .min(8) // Minimum length 8
      .is()
      .max(100) // Maximum length 100
      .has()
      .letters() // Must have letters
      .has()
      .digits() // Must have digits
      .has(
        // Must have al least one special character
        /[`|~|!|@|#|$|%|^|&|*|(|)|_|°|¬|+|\-|=|?|;|:|'|"|,|.|<|>|\{|\}|\[|\]|\\|\/]/g
      );

    if (!schema.validate(this.state.password)) {
      this.setState({
        showPasswordError: true,
        PasswordErrorMsg: "Please use a valid password"
      });
      return;
    }

    this.setState({
      loading: true
    });

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  };

  render() {
    const {
      loading,
      showEmailError,
      EmailErrorMsg,
      showPasswordError,
      PasswordErrorMsg
    } = this.state;

    if (loading) {
      return (
        <div className="spinner">
          <img src={Spinner} alt="loading" />
        </div>
      );
    } else {
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                autoFocus
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              {showEmailError && (
                <div className="text-danger">{EmailErrorMsg}</div>
              )}
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              {showPasswordError && (
                <div className="text-danger">{PasswordErrorMsg}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.validateForm()}
            >
              Sing In
            </button>
          </form>
        </div>
      );
    }
  }
}
