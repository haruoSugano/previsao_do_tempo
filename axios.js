//dotenv
require("dotenv").config();
const axios = require('axios');

const appid = process.env.appid;

const q = 'Itu';

//metric: celsius
//imperial: farenheit
const units = 'metric';

const lang = 'pt_br';

const cnt = 10;

const base_url = 'https://api.openweathermap.org/data/2.5/forecast';

const url = `${base_url}?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

// Exibindo a url da API
// console.log(url);

const promise = axios.get(url);
promise.then((response) => {
    console.log(response.data)
    return response.data;
});
