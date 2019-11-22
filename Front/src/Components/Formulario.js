import React, { Component} from 'react';
import { todo } from '../Productos/todo.json'; //Datos de un back por el momento

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: '',
      price: this.props.precio,
      name: this.props.nombre,
      isGood: true,
      show: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this); //Pertenece y sobreescribe
    this.handleSubmit = this.handleSubmit.bind(this); //Manejo del dato en formulario Submit

  }
  handleSubmit(e) {
    e.preventDefault();
    let producto = {
      name: this.state.name,
      price: parseInt(this.state.price),
      comments: this.state.comentario,
      isGood: this.state.isGood,
    };

    fetch(' http://localhost:8080/products/create', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    })
        .then(response => response.json())
        .then(data => {});
    this.setState({ show: "hidden" });
    console.log(this.state);
  }

  handleInputChange(e) {
    //Cambiar datos del estado genéricamente
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const {show} = this.state;
    if(show === 'hidden'){
      return(<div></div>);
    }
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="textarea"
              name="comentario"
              className="form-control"
              value={this.state.comentario}
              onChange={this.handleInputChange}
              placeholder="Comentario, no más de 150 caracteres"
              >
            </input>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar encuestar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
