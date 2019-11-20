import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Inicio.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./LoginComponents/login.component";
import SignUp from "./LoginComponents/signup.component";

function Inicio() {
  return (<Router>
    <div className="Inicio">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Grial</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Ingresar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Registrarse</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default Inicio;
