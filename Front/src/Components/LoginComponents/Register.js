import React, { Component } from "react";

class Register extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
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
                </div>
            </div>
        );
    }
}

export default Register;