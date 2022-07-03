document.onload = apiFetch();

async function apiFetch() {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Kennewick&appid=f704b08b378b46faee3fbfd691fe3776&units=imperial"

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  

function displayResults(data) {
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('#conditions-title');
    const windSpeed = document.querySelector('#mph');
    const windChill = document.getElementById('wind-chill');

    currentTemp.textContent = data.main.temp.toFixed(0)
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    captionDesc.textContent = data.weather[0].description.toUpperCase()
    windSpeed.textContent = data.wind.speed
    windChill.textContent = calculateWindChill(data.main.temp, data.wind.speed)
}

function calculateWindChill(temp, mph) {
    if(temp <= 50 & mph > 3) {
        windChill = 35.74 + 0.6215 * temp - 35.75 * mph ** 0.16 + 0.4275 * temp * mph ** 0.16
        return Math.round(windChill)
    } else {
        return "N/A"
    }
}

