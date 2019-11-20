import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Registrarse</h3>

                <div className="form-group">
                    <label>Primer nombre</label>
                    <input type="text" className="form-control" placeholder="Primer nombre" />
                </div>

                <div className="form-group">
                    <label>Segundo nombre</label>
                    <input type="text" className="form-control" placeholder="Segundo nombre" />
                </div>

                <div className="form-group">
                    <label>Direccion de correo</label>
                    <input type="email" className="form-control" placeholder="Direccion de correo" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Digita tu contraseña" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Registrarme</button>
                <p className="forgot-password text-right">
                    ¿Ya tienes una cuenta? ¡Maravilloso! <a href="#">ingresar a mi cuenta </a>
                </p>
            </form>
        );
    }
}
