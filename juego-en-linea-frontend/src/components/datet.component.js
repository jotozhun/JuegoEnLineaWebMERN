import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker"
import 'react.datepicker/dist/react'

export default class Login extends Component {
    state={
        fecha: new Date("2020", "05", "02")
    }
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
    onChange=fecha=>{
        this.setState({fecha});
    }
    mostrarFecha = fecha=>{
        alert(fecha);
    }
    render(){
        return (
            <div>
                <h3>Torneo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Fecha inicio de torneo:</label>
                        <DatePicker selected={this.state.fecha} onChange={this.onChange}
                        />
                        <br></br>
                        <input type="button" value="Mostrar fecha" className="btn b"></input>
                    </div>
                    <div className="form-group"> 
                        <label>Fecha final de torneo:</label>
                        <DatePicker selected={this.state.fecha} onChange={this.onChange}
                        />
                        <br></br>
                        <input type="button" value="Mostrar fecha" className="btn b" onClick={()=>this.mostrarFecha(this.state.fecha)}></input>
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