import React, { Component} from 'react';
import { todo } from '../Productos/todo.json'; //Datos de un back por el momento

class TodoForm extends Component {
  constructor () {

    super();
    this.state = {
      comentario: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this); //Pertenece y sobreescribe
    this.handleSubmit = this.handleSubmit.bind(this); //Manejo del dato en formulario Submit
  }

  handleSubmit(e) {
    e.preventDefault(); //Evita refrescar la página
    this.props.onAddTodo(this.state);
    this.setState({
      comentario: ''
    });
  }

  handleInputChange(e) {
    //Cambiar datos del estado genéricamente
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="textarea"
              name="comentario"
              className="form-control"
              onChange={this.handleInputChange}
              value={this.state.comentario}
              onChange={this.handleInputChange}
              placeholder="Comentario, no más de 150 caracteres"
              >
            </input>
          </div>
          <button type="button" className="btn btn-primary">
            Enviar encuestar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
