import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Juego de Penales</Link>
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/" className="nav-link">Inicio</Link>
              </li>
              <li className="navbar-item">
              <Link to="/register" className="nav-link">Registrar</Link>
              </li>
              <li className="navbar-item">
              <Link to="/login" className="nav-link">Entrar</Link>
              </li>
            </ul>
            </div>
          </nav>
        );
      }
}