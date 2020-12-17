import axios from 'axios';


const BASE_URL = process.env.BASE_URL;

console.log("BASE_URL == ", BASE_URL)
if (localStorage)

    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: {}
    })