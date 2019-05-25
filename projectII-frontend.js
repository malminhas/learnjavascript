// Project II-frontend
// -------------------
// 

//import {Backend} from "./demo/backend.js"
const backend = require('./projectII-backend.js');

const getAmsterdamWeather = () => {
    // create a new instance of Backend and set the base url
    // /weather/amsterdam.json
    const API = new backend.Backend();
    API.setBaseUrl('https://api.learnjavascript.online/demo');
    API.get('/weather/amsterdam.json')
    .then(data => {
        showTemperature(data.temperature);
    });
}

function showTemperature(temperature){
    //do not change this function
    console.log(temperature)
}


//sample usage
getAmsterdamWeather();
