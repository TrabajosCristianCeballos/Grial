import React, { Component, Alert } from 'react';
import agua from './Imagenes/agua.png';
import panela from './Imagenes/panela.png';
import atun from './Imagenes/atun.png';
import mantequilla from './Imagenes/mantequilla.png';
import vino from './Imagenes/vino.png';
import  carne from './Imagenes/carne.png';

import './App.css';
import Formulario from './Components/Formulario.js';
import Imagen from './Components/Imagen.js';
import { todo } from './Productos/todo.json'; //Datos de un back por el momento
import { productos } from './Productos/productos.json'; //Datos de un back por el momento


class App extends Component{
  //Construimos el constructor (Almacenará los datos pero antes de heredar todo (Super))
  constructor(){
    super();
    //Creamos estado del componente Al tanto de los datos
    this.state = {
    todo
    };
    //Llamamos los datos de los productos
    this.state = {
    productos
    };
    this.handleAddTodo=this.handleAddTodo.bind(this);
  }
    //Recibir tarea
    handleAddTodo(todo){
      this.setState({
        todo: [...this.state.todo, todo]
      });
    }

  render(){
    const productos = this.state.productos.map((productos, i) => {
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
    })
    return (

      <div className="App">
        <nav className="navbar navbar.dark bg-dark">
          <a href="" className="text-white">
            Práctica de Telemática (Grial)
            <spam className="badge badge-pill badge-light ml-2">
              { this.state.productos.length }
            </spam>
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
      )
    }
  }

export default App;
