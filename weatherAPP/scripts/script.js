let button = document.querySelector(".searchButton");
let cityInput = document.querySelector(".cityInput");
let cityName = document.querySelector(".city-name");
let cityDesc = document.querySelector(".city-desc");
let cityTemp = document.querySelector(".city-temp");
let weatherIcon = document.querySelector(".weather-icon");

const initWeather = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=8aa87ed1baa121bf9ef01da73725b67d&units=metric"
  )
    .then(response => response.json())
    .then(data => {
      let name = data.name + ", " + data.sys.country;
      let temp = data.main.temp;
      let desc = data.weather[0].description;
      let icon = data.weather[0].icon;
      //"http://openweathermap.org/img/w/10d.png"
      //   console.log(name);
      //   console.log(temp);
      //   console.log(desc);

      cityName.innerHTML = name;
      cityTemp.innerHTML = temp + "&#8451;";
      cityDesc.innerHTML = desc.toUpperCase();
      weatherIcon.setAttribute(
        "src",
        `http://openweathermap.org/img/w/${icon}.png`
      );
      //console.log(data);
    })
    .catch(error => alert("City not found"));
};

button.addEventListener("click", () => {
  //console.log("button pressed");
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityInput.value +
      "&appid=8aa87ed1baa121bf9ef01da73725b67d&units=metric"
  )
    .then(response => response.json())
    .then(data => {
      let name = data.name + ", " + data.sys.country;
      let temp = data.main.temp;
      let desc = data.weather[0].description;
      let icon = data.weather[0].icon;
      //"http://openweathermap.org/img/w/10d.png"
      //   console.log(name);
      //   console.log(temp);
      //   console.log(desc);

      cityName.innerHTML = name;
      cityTemp.innerHTML = temp + "&#8451;";
      cityDesc.innerHTML = desc.toUpperCase();
      weatherIcon.setAttribute(
        "src",
        `http://openweathermap.org/img/w/${icon}.png`
      );
      //console.log(data);
    })
    .catch(error => alert("City not found"));
});
