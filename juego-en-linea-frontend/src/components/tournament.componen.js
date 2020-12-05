import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeNameTournament.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nametournament: '',
        }
    }

    onChangeNameTournament(e){
        this.setState({
            nametournament: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const user = {
          nametournament: this.state.nametournament,
        }
    
        axios.post('http://localhost:5000/user/', user)
            .then(res => console.log(res.data));
    
        console.log(user);
    
        this.setState({
            nametournament: '',
        })
      }

    render(){
        return (
            <div>
                <h3>Crear Torneo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Nombre del torneo:</label>
                        <input  type="text"
                            required
                            className="form-left"
                            value={this.state.nametournament}
                            onChange={this.onChangeNameTournament}
                        />
                    </div>
                    <div className="form-left">
                        <input type="submit" value="Fecha inicio torneo" className="btn btn-primary" />
                    </div>
                    <div className="form-right" class="col text-right">
                        <input type="submit" value="Crear Reglas" className="btn btn-primary" />
                    </div>
                    <div className="form-right" class="col text-right">
                        <input type="submit" value="Ingresar premio" className="btn btn-primary" />
                    </div>
                    <div className="form-right" class="col text-right">
                        <input type="submit" value="Regresar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}