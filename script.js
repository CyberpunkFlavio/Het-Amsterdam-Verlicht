// JavaScript source code
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '8a54471bf7134e8faaa172625242807'; // Replace with your WeatherAPI key
    const city = 'Amsterdam';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherWidget = document.getElementById('weather-widget');
            const temperature = data.current.temp_c;
            const weatherDescription = data.current.condition.text;
            const iconUrl = data.current.condition.icon;

            weatherWidget.innerHTML = `
                <img src="${iconUrl}" alt="Weather Icon">
                <p>Temperatura: ${temperature} °C</p>
                <p>Condizione: ${weatherDescription}</p>
            `;
        })
        .catch(error => console.error('Errore:', error));
});
