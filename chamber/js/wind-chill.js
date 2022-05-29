let temp = document.getElementById('temp').textContent
let mph = document.getElementById('mph').textContent
let windChillContainer = document.getElementById('wind-chill')

if(temp <= 50 & mph > 3) {
    windChill = 35.74 + 0.6215 * temp - 35.75 * mph ** 0.16 + 0.4275 * temp * mph ** 0.16
    windChillContainer.textContent = Math.round(windChill)
} else {
    windChillContainer.textContent = "N/A"
}
