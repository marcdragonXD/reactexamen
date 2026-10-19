import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import Personajes from './Personajes';

export default class ModificarPersonaje extends Component {
    
    cajaSerie = React.createRef();
    cajaPersonaje = React.createRef();
    url = Global.urlApiPersonajes;

    state = {
        mensaje: "",
        status: false
    }

  render() {
    return (
      <div>
        {
            this.state.status == true &&
            (<Navigate to="/personajes"/>)
        }
        <h1>Modificar personaje</h1>
        <h3 style={{color:"red"}}>{this.state.mensaje}</h3>
        <form>
            <label>Serie</label>
            <input type="button" ref={this.cajaSerie} className="dropdown-item" />
            
            <label>Personaje</label>
            <input type="button" ref={this.cajaPersonaje} className="dropdown-item" />
            
            <button onClick={this.insertHospital} className="btn btn-warning">
                Crear
                </button>
        </form>
      </div>
    )
  }
}
