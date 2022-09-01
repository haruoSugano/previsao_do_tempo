import dotenv from 'dotenv'
import axios from 'axios';

dotenv.config();

const appid = process.env.appid;

const q = 'Manaus';

//metric: celsius
//imperial: farenheit
const units = 'metric';

const lang = 'pt_br';

const cnt = 10;

const base_url = 'https://api.openweathermap.org/data/2.5/forecast';

const url = `${base_url}?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

// Exibindo a url da API
// console.log(url);

// Faz a requisição
export const api = axios.get(url);