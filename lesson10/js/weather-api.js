const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=f704b08b378b46faee3fbfd691fe3776&units=imperial"


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


async function apiFetch() {

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  

function displayResults(data) {
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    captionDesc.textContent = data.weather[0].description.toUpperCase()
}

apiFetch();