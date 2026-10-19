import axios from "axios";
import Global from "../Global";
export default class ServicePersonajes {


    getPersonajes(idPersonaje) {
         return new Promise(function(resolve) {
        let url = Global.urlApiPersonajes;
        let request = "api/personajes" +idPersonaje;
        axios.get(url + request).then((response) => {
            console.log("Leyendo personajes");
            resolve(response.data);
        })
    })
}

    getPersonajes() {
        return new Promise(function(resolve) {
        let url = Global.urlApiPersonajes;
        let request = "api/personajes";
        axios.get(url + request).then((response) => {
            console.log("Leyendo personajes");
            resolve(response.data);
        })
    })
}}