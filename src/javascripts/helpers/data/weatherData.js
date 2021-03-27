import axios from 'axios';

const getWeather = (weatherObject) => new Promise((resolve, reject) => {
  axios.get(`api.openweathermap.org/data/2.5/weather?q=${weatherObject.city}&appid=4cef936249cdd76be68f50a9b9e3cf55`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getWeather;
