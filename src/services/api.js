import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
    //exemplo: 'http://localhost:3333', essa url nada mais é do que o seu ip (localhost) mais a porta de comunicação
});

export default api;