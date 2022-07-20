document.onload = apiFetch();

async function apiFetch() {

    const URL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.7608&lon=-111.8910&appid=f704b08b378b46faee3fbfd691fe3776&units=imperial"

    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        displayWeather(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
    }
}

function displayWeather(data) {
  const alert = document.querySelector('#weather-alert');
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const hilo = document.querySelector('#hilo');
  const currentConditions = document.querySelector('#current-conditions');
  const currentHumidity = document.querySelector("#current-humidity")

  currentTemp.textContent = `${data.current.temp.toFixed(0)}°`
  weatherIcon.src = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`
  hilo.textContent = `${data.daily[0].temp.max.toFixed(0)}° / ${data.daily[0].temp.min.toFixed(0)}°`
  currentConditions.textContent = data.current.weather[0].description.toUpperCase()
  currentHumidity.textContent = `Humidity: ${data.current.humidity}%`

  for (let i = 1; i < 4; i++) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"]

    const title = document.getElementsByClassName('weather-day-title')[i];
    const futureIcon = document.getElementsByClassName('weather-day-icon')[i];
    const futureTemp = document.getElementsByClassName('weather-day-temp')[i];
    const futureHilo = document.getElementsByClassName('weather-day-hilo')[i];
    const futureConditions = document.getElementsByClassName('weather-day-conditions')[i];
    const futureHumidity = document.getElementsByClassName('weather-day-humidity')[i];

    title.textContent = days[new Date(data.daily[i].dt * 1000).getDay()];
    futureIcon.src = `https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png`;
    futureTemp.textContent = `${data.daily[i].temp.day.toFixed(0)}°`;
    futureHilo.textContent = `${data.daily[i].temp.max.toFixed(0)}° / ${data.daily[i].temp.min.toFixed(0)}°`;
    futureConditions.textContent = data.daily[i].weather[0].description.toUpperCase();
    futureHumidity.textContent = `Humidity: ${data.daily[i].humidity}%`;
  }

  try {
    alert.style.display ="flex";
    alert.innerHTML = `<p>${data.alerts[0].event}: ${data.alerts[0].description}</p><a href="#" id="close-alert">❌</a>`

    if (window.innerWidth < 650) {
      document.getElementById('social-icons').style.marginTop = "78.5px";
    }

    document.getElementById('close-alert').addEventListener('click', removeEvent) 
  } catch (error) {
    alert.style.display = "none";
  }
}

function removeEvent(event) {
  event.target.parentElement.remove();

  if (window.innerWidth < 650) {
    document.getElementById('social-icons').style.marginTop = "17.5px"
  }
}

