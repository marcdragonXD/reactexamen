import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'  
import axios from 'axios'
import Global from '../Global' 

export default class MenuComponents extends Component {

    url = Global.urlApiPersonajes; 
     state = { 
        personajes: [] 
    } 
         
         loadPersonajes = () => { 
            let request = "api/personajes"; 
            axios.get(this.url + request).then((response) => { 
                 console.log("Loading personajes"); 
                 this.setState({ 
                    personakes: response.data 
                }) 
            }) 
        } 
        
        componentDidMount = () => { 
            this.loadPersonajes(); 
        } 

  render() {
    return (

                <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
                <div className="container-fluid"> 
                    <a className="navbar-brand" href="#"> </a> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                        <span className="navbar-toggler-icon"><img src='https://appseries.azurewebsites.net/static/media/logo1.1408c71b2c87ca1fb473.png ' width="50px" height="2%"/></span> 
                        </button> 
                        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                                <li className="nav-item"> 
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/nuevo">Nuevo personaje</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/modificar">Modificar personaje</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/lista">Series</NavLink>
                                </li>
                            </ul>
                                                        
                                                    </div> 
                                                    </div> 
                                                    </nav> 

    )
  }
}
