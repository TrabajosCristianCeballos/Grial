import React, {Component} from "react";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: '',
            products: '',
            user: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        let credentials = {
            "user": this.state.user,
            "password": this.state.password
        };

        fetch('http://localhost:8080/products/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    this.props.history.push("/products");
                }else{
                    this.props.history.push("/login");
                }
            });
    }

    handleChangeUser(event){
        this.setState({
            user: event.target.value
        });
    }

    handleChangePass(event){
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>¿Ya tienes una cuenta? Entra</h3>

                        <div className="form-group">
                            <label>Usuario</label>
                            <input type="text" className="form-control" placeholder="Digita tu correo"
                                   value={this.state.username} onChange={this.handleChangeUser} />
                        </div>

                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" placeholder="Digita tu contraseña"
                                   value={this.state.password} onChange={this.handleChangePass} />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Permanecer</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Enviar</button>
                        <p className="forgot-password text-right">
                            Olvidaste tu <a href="#">contraseña :c?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;