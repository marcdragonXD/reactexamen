import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios' 
import ServicePersonajes from '../services/ServicePersonajes';

export default class Personajes extends Component {

    service = new ServicePersonajes();  
        cajaNombre = React.createRef();
        cajaImagen = React.createRef();
        cajaSerie = React.createRef();
    url = Global.urlApiPersonajes;
    
    state = {
        personajes: [],
        mensaje: "",
        status: false
    }

    loadPersonajes = () => {
        this.service.getPersonajes()
        }

    componentDidMount = () => {
        this.loadPersonajes();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idPersonaje != this.props.idPersonaje){
            this.loadPersonajes();
            this.setState({
                idPersonaje: -1
            })
        }
    }

  render() {
    return (
      <div>
        <table className="table table-primary">
            <thead>
                <tr>
                    <th>idPersonaje</th>
                    <th>nombre</th>
                    <th>imagen</th>
                    <th>idSerie</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.personajes.map((per, index) => {
                        return (<tr key={index}>
                            <td>{per.idPersonaje}</td>
                            <td>{per.nombre}</td>
                            <td>{per.imagen}</td>
                            <td>{per.idSerie}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
  )}

}