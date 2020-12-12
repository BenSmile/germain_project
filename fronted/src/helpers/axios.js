import axios from "axios";


const baseURL = process.env.BACKEND_URL;
let headers={};

console.log("BASE_URL = ", baseURL)

if(localStorage.tokec){
headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers : headers
})

export default axiosInstance;