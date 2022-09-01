import { api } from './api.js'

api.then((response) => {
    console.log(response.data);
    //Mostra o resultado e devolve somente a parte de interesse
    return response.data;
})
    .then((response) => {
        //mostra o total  e devolve o resultado
        console.log(response.cnt);
        return response;
    })
    .then((response) => {
        console.log("aqui", response['list']);
        return response['list'];
    })
    .then((response) => {
        //para cada list devolva
        //\u00B0 = °
        for (let previsao of response) {
            console.log(`
            ${new Date(previsao.dt * 1000).toLocaleString()},
            ${'Min: ' + previsao.main.temp_min}\u00B0C,
            ${'Max: ' + previsao.main.temp_max}\u00B0C,
            ${"Umd: " + previsao.main.humidity}%,
            ${previsao.weather[0].description}
        `);
        }
        return response;
    })
    .then((response) => {
        //Verificar quantas previsoes tem percepcao humana
        // de temperatura acima de 30 graus
        const listaPercepcaoHumana = response.filter(percepcao => percepcao.main.feels_like >= 30);
        console.log(`
        ${listaPercepcaoHumana.length} previsão têm percepção humana de temperatura acima de 30°
    `);
    })
    .catch((error) => {
        console.log("Deu erro.", error);
    });