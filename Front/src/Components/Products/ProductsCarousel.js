import React, {Component} from "react";
import Imagen from "../Imagen";
import Formulario from "../Formulario";
import { todo } from '../../Productos/todo.json'; //Datos de un back por el momento
import { productos } from '../../Productos/productos.json';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


class ProductsCarousel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todo,
            productos,
            AllProducts: ''
        };
        this.handleAddTodo=this.handleAddTodo.bind(this);
    }

    //Recibir tarea
    handleAddTodo(todo){
        this.setState({
            todo: [...this.state.todo, todo]
        });
    }

    render() {
        const productos = this.state.productos;
        let everything = [];
        for(let key in productos){
            everything.push(
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-header">
                            <div>
                                <h3 className="text-lowercase font-weight-bolder text-black-50 m-5"> { productos[key].nombre }</h3>
                                <Formulario onAddTodo={this.handleAddTodo} nombre={productos[key].nombre} precio={productos[key].descripcion}/>
                            </div>
                        </div>

                        <div className="text-lowercase font-weight-bolder text-black-50 m-5">
                            <h5>$ { productos[key].descripcion } </h5>
                        </div>

                    </div>
                </div>
            );
        }

        return(
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
                        {everything}
                    </div>
                </div>
                <div>
                    <Button href={"/charts"} onClick={this.handleClick} className="btn btn-primary mt-5 mb-5" size="lg" block>
                        Ver Graficas
                    </Button>
                </div>
            </div>
        );
    }
}

export default ProductsCarousel;