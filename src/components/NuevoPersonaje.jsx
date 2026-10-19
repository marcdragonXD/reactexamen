import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import ServicePersonajes from '../services/ServicePersonajes';

export default class NuevoPersonaje extends Component {
    service = new ServicePersonajes(); 
    cajaNombre = React.createRef();
    cajaImagen = React.createRef();
    cajaSerie = React.createRef();
    url = Global.urlApiPersonajes;  

    insertPersonaje = (event) => {
        event.preventDefault();
        let request = "api/personajes";
        let personaje = {
            idPersonaje: parseInt(this.cajaId.current.value),
            nombre: this.cajaNombre.current.value,
            imagen: this.cajaImagen.current.value,
            serie: this.cajaSerie.current.value
        }
        this.service.insertPersonaje(personaje).then((result) => {
            this.setState({
                status: true
            })
        })
    }
    
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
        <h1>Crear personaje</h1>
        <h3 style={{color:"blue"}}>{this.state.mensaje}</h3>
        <form>
            <label>Nombre</label>
            <input type="text" ref={this.cajaNombre} className="form-control" />
            
            <label>Imagen</label>
            <input type="text" ref={this.cajaImagen} className="form-control" />
            
            <label>Serie</label>
            <input type="button" ref={this.cajaSerie} className="dropdown-item" > 
            </input>
            
            <button onClick={this.insertHospital} className="btn btn-warning">
                Crear
                </button>
        </form>
      </div>
    )
  }
}
