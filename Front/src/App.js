import React, { Component, Alert } from 'react';
import agua from './Imagenes/agua.png';
import panela from './Imagenes/panela.png';
import atun from './Imagenes/atun.png';
import mantequilla from './Imagenes/mantequilla.png';
import vino from './Imagenes/vino.png';
import  carne from './Imagenes/carne.png';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/LoginComponents/Login";
import Register from "./Components/LoginComponents/Register";
import ProductsCarousel from "./Components/Products/ProductsCarousel";
import Graphs from "./Components/Graphs/Graphs/Graphs";


class App extends Component{

  render(){
    return (
        <div className="App">
          <div>
            <Router>
              <div>
                <div className="Inicio">
                  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                      <div className="navbar-brand">Grial</div>
                      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                            <div className="navbar-brand">Semester project</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/sign-up" component={Register}/>
                <Route path="/products" component={ProductsCarousel}/>
                <Route path="/charts" component={Graphs}/>
                <Route path="/" component={Login}/>
              </Switch>
            </Router>
          </div>
        </div>
      );
    }
  }

export default App;


/**
 *
 *
 *
 <Route path="/register" component={Register}/>
 <Route path="/forgotPassword" component={ForgotPassword}/>
 <Route path="/activate/:key?" component={Signin}/>
 <Route path="/reset/finish/:key?" component={ForgotPasswordFinish}/>



 <div className="App">
 <nav className="navbar navbar.dark bg-dark">
 <a href="" className="text-white">
 Práctica de Telemática (Grial)
 <span className="badge badge-pill badge-light ml-2">
 { this.state.productos.length }
 </span>
 </a>
 </nav>
 <div className="Imagenes">
 < Imagen />
 </div>
 <div className="contenedor">
 <div className="row mt-4">
 { productos }
 </div>
 </div>
 </div>
 */