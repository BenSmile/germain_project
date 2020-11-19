
import axios from "axios";

import querystring from 'querystring';



const OPERATION_API_BASE_URL = "http://localhost:3600/operations";

// const querystring = require("querystring");

class OperationService {


  getOperations() {
    return axios.get(OPERATION_API_BASE_URL);
  }

  getOperationByNum(numOperation) {
    return axios.get(`${OPERATION_API_BASE_URL}/${numOperation}`);
  }


  addoperation(operation) {

    return axios.post(OPERATION_API_BASE_URL,
      querystring.stringify({
        numOperation: operation.numOperation,
        dateOperation: operation.dateOperation,
        montantOperation: operation.montantOperation,
      }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    // .then(function(response) {
    //     console.log(response);
    // });

    // return axios.post(operation_API_BASE_URL, operation);
  }

  updateOperation(numOperation, operation) {

    return axios.put(`${OPERATION_API_BASE_URL}/${numOperation}`,
      querystring.stringify({
        numOperation: operation.numOperation,
        montantOperation: operation.montantOperation,
        dateOperation: operation.dateOperation,
      
      }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  }

  deleteAbonne(telephone) {

    return axios.delete(`${OPERATION_API_BASE_URL}/${telephone}`);

  }
}

export default new OperationService();