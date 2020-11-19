
import axios from "axios";

import querystring from 'querystring';



const COMPTE_API_BASE_URL = "http://localhost:3600/comptes";

// const querystring = require("querystring");

class CompteService {


    getComptes() {
        return axios.get(COMPTE_API_BASE_URL);
    }

    getAbonneByPhone(telephone) {
        return axios.get(`${COMPTE_API_BASE_URL}/${telephone}`);
    }


    addAbonne(abonne){

       return axios.post(COMPTE_API_BASE_URL,
            querystring.stringify({
                nom: abonne.nom,
                postnom: abonne.postnom,
                age: abonne.age,
                sexe: abonne.sexe,
                telephone: abonne.telephone
            }), {
              headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
              }
            })
            // .then(function(response) {
            //     console.log(response);
            // });

        // return axios.post(ABONNE_API_BASE_URL, abonne);
    }

    updateAbonne(telephone, abonne){

        return axios.put(`${COMPTE_API_BASE_URL}/${telephone}`,
             querystring.stringify({
                 nom: abonne.nom,
                 postnom: abonne.postnom,
                 age: abonne.age,
                 sexe: abonne.sexe,
                 telephone: abonne.telephone
             }), {
               headers: { 
                 "Content-Type": "application/x-www-form-urlencoded"
               }
             })
     }

     deleteAbonne(telephone){

        return axios.delete(`${COMPTE_API_BASE_URL}/${telephone}`);
       
     }
}

export default new CompteService();