import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const user = {
          username: this.state.username,
          password: this.state.password
        }
    
        axios.post('http://localhost:5000/user/', user)
            .then(res => console.log(res.data));
    
        console.log(user);
    
        this.setState({
            username: '',
            password: ''
        })
      }

    render(){
        return (
            <div>
                <h3>Modificar Torneo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Nombre del torneo: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                        <label>Cantidad de grupos: </label>
                        <input  type="int"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Cambiar reglas" className="btn btn-primary" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Cambiar premios" className="btn btn-primary" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Cambiar fecha torneo" className="btn btn-primary" />
                    </div>
                    <div className="form-right" class="col text-right">
                        <input type="submit" value="Guardar cambios" className="btn btn-primary" />
                    </div>
                    <div className="form-right" class="col text-right">
                        <input type="submit" value="Eliminar torneo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}