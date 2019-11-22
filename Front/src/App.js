import React, { Component, Alert } from 'react';
import agua from './Imagenes/agua.png';
import panela from './Imagenes/panela.png';
import atun from './Imagenes/atun.png';
import mantequilla from './Imagenes/mantequilla.png';
import vino from './Imagenes/vino.png';
import  carne from './Imagenes/carne.png';

import './App.css';
import Formulario from './Components/Formulario.js';
import { todo } from './Productos/todo.json'; //Datos de un back por el momento
import { productos } from './Productos/productos.json';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/LoginComponents/Login";


class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            todo: '',
            productos: ''
        };
        this.handleAddTodo=this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo){
        this.setState({
            todo: [...this.state.todo, todo]
        });
    }

  render(){
    /**const productos = this.state.productos.map((productos, i) => {
      return (
        <div className="col-md-4">
        <div className="card mt-4">
        <div className="card-header">
        <div>
          <h3> { productos.nombre }</h3>
          <Formulario onAddTodo={this.handleAddTodo} />
          </div>
          </div>

          <div className="card-descripcion">
          <h5>{ productos.descripcion } </h5>
          </div>

        </div>
        </div>
      )
    });*/
    return (
        <div className="App">
          <div>
            <Router>
              <Switch>
                <Route path="/login" component={Login}/>
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