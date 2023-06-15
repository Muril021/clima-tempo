const inputValue = document.querySelector("#city");
const search = document.querySelector("#search");
const cityName = document.querySelector("#cityname");
const temp = document.querySelector("#temp");
const description = document.querySelector("#description");
const wind = document.querySelector("#wind");

const apiKey = "737b2567b50aea4f550810ae8dd4e9c8";

function convert(value) {
    return (value - 273).toFixed();
}

search.addEventListener('click', function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid="+apiKey)
    .then(response => response.json())
    .then(jsonBody => {
        const nameVal = jsonBody['name'];
        const temperature = jsonBody['main']['temp'];
        const conditions = jsonBody['weather']['0']['main'];
        const windSpeed = jsonBody['wind']['speed'];

        cityName.innerHTML = `Clima de ${nameVal}`;
        temp.innerHTML = `Temperatura: ${convert(temperature)}ºC`;
        description.innerHTML = `Condições do céu: ${conditions}`;
        wind.innerHTML = `Velocidade dos ventos: ${windSpeed}Km/h`;
    })
    .catch(error => alert('Por favor, verifique a cidade informada.'));
});