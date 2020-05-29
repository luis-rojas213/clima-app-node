const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=74da443450b67894806d2f892e86dc14&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}