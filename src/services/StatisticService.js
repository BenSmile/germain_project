import axios from "axios";



const ABONNE_API_BASE_URL = "http://localhost:3600/statistics";


class StatisticService{

    getAbonneCount() {
        return axios.get(`${ABONNE_API_BASE_URL}/abonnescount`);
    }

    getOperationDatas() {
        return axios.get(`${ABONNE_API_BASE_URL}/operationDatas`);
    }

    getOperationCount() {
        return axios.get(`${ABONNE_API_BASE_URL}/opsCount`);
    }

    


}



export default new StatisticService();