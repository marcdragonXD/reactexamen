import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import ServiceSeries from '../services/ServiceSeries';

export default class Series extends Component {
  
    service = new ServiceSeries();  
    url = Global.urlApiSeries;

    state = {
        series: []
    }

    loadSeries = () => {
        this.service.getSeries(this.props.idSerie).then(result => {
            this.setState({
                series: result
            })
        })
    }

    componentDidMount = () => {
        this.loadSeries();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idSerie != this.props.idSerie){
            this.loadSeries();
            this.setState({
                idSerie: -1
            })
        }
    }
  
    render() {
    return (
      <div>
        <h1>Series</h1>
      </div>
    )
  }
}
