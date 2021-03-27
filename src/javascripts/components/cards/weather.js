const getWeatherForm = () => {
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML += `<form class="form-container" style="width 25em"><div class="form-title"><h5>Search The Weather</h5></div>
  <div class="mb-3">
  <input type="text" class="form-control" id="city" placeholder="City">
</div>
<button type="submit" class="btn btn-success" id="search-weather">SEARCH FOR WEATHER</button>
</form>`;
};

const printWeather = (weatherObject, weather) => {
  document.querySelector('#title-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML += `
  <h2 class="city">${weatherObject.city}</h2>
  <h2 class="weather">${weather.list.main.temp}</h2>`;
};

export { getWeatherForm, printWeather };
