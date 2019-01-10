import React from "react";
import Login from "../../components/Login/Login";

const SignIn = () => (
  <div>
    <h2 className="header-center">Sign In</h2>

    <div className="card signin">
      <div className="card-body">
        <h5 className="card-title">Login User</h5>

        <Login />
      </div>
    </div>
  </div>
);

export default SignIn;
