const weather = document.querySelector(".js-weather");
const API_KEYS = "1bcdfdf16649b1cb1fae1b8d7dff3f0d";
const Cords = "coordinate";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`
  )
    .then(function (responsed_data) {
      return responsed_data.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const location = json.name;
      weather.innerText = `${temperature} degree in ${location}`;
    });
}

function SaveCords(coordsObj) {
  localStorage.setItem(Cords, JSON.stringify(coordsObj)); //doesn't have to return
}

function handleSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  SaveCords(coordsObj);
  getWeather(latitude, longitude);
}

function handleError() {
  console.log("Can't get coordinates");
}

function Askcord() {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function loadCoord() {
  const Loadedcoord = localStorage.getItem(Cords);
  if (Loadedcoord == null) {
    Askcord();
  } else {
    const parsedCords = JSON.parse(Loadedcoord);
    getWeather(parsedCords.latitude, parsedCords.longitude);
  }
}

function init() {
  loadCoord();
}

init();
