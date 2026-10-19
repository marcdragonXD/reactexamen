import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import ServiceSeries from '../services/ServiceSeries';

export default class ListaSeries extends Component {

    url = Global.urlApiSeries;
    service = new ServiceSeries();


  render() {
    return (
      <div>
        <select size="10">
                    <option>Juego de tronos</option>
                    <option>The Mandalorian</option>
                    <option>Stanger Things</option>
                    <option>Narcos</option>
                    <option>The Boys</option>
                    <option>The Big Bang Theory</option>
                    <option>Campeones</option>
                    <option>Como conoci a vuestra madre</option>
                    <option>La casa de papel</option>
                    <option>Futurama</option>
        </select>

        
      </div>
    )
  }
}
