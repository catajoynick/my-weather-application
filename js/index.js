/*
Get data from openweathermap
*/

//Unique API key that will be use to request the data
let API_KEY = "5f84d37d533f63e99ab827a930898cf5";

//This function sends the request/fetch to openweathermap
function query() {
  const searchCity = document.getElementById("input-city").value;
  console.log(searchCity);

  const FULL_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;
  const weatherPromise = fetch(FULL_URL);

  weatherPromise
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      displayCurrenetWeather(resData);
    });
}

//This function takes the response in JSON fomat as argument and takes the specified data to be displayed
function displayCurrenetWeather(responseData) {
  document.getElementById(
    "city"
  ).innerHTML = `${responseData.name} ${responseData.sys.country}`;
  document.getElementById(
    "temp"
  ).innerHTML = `Current temp: ${responseData.main.temp} celcius`;
  document.getElementById(
    "max-temp"
  ).innerHTML = `Max temp: ${responseData.main.temp_max} celcius`;
  document.getElementById(
    "min-temp"
  ).innerHTML = `Min temp: ${responseData.main.temp_min} celcius`;
}
