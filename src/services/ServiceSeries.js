import axios from "axios";
import Global from "../Global";
export default class ServiceSeries {


    getSeries(idSerie) {
         return new Promise(function(resolve) {
        let url = Global.urlApiPersonajes;
        let request = "api/series" + idSerie;
        axios.get(url + request).then((response) => {
            console.log("Leyendo series");
            resolve(response.data);
        })
    })
}

    getSeries() {
        return new Promise(function(resolve) {
        let url = Global.urlApiPersonajes;
        let request = "api/series";
        axios.get(url + request).then((response) => {
            console.log("Leyendo series");
            resolve(response.data);
        })
    })
}}