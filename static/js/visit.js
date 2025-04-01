document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '5646aee502272160a2c80fa4fbe131b4';
    const lat = 40.4406; // Latitude for Pittsburgh
    const lon = -80.0184; // Longitude for Pittsburgh
    const weatherWidget = document.getElementById('weather-widget');
    const loadingElement = weatherWidget.querySelector('.weather-loading');
    const contentElement = weatherWidget.querySelector('.weather-content');
    const iconElement = document.getElementById('weather-icon');
    const temperatureElement = document.getElementById('temperature');
    const conditionElement = document.getElementById('condition');
    const windElement = document.getElementById('wind');
    const humidityElement = document.getElementById('humidity');
    const weatherLiveDot = document.getElementById('weather-live-dot');
    const inclineStatusDot = document.getElementById('incline-status-dot');
    const inclineStatusLabel = document.getElementById('incline-status-label');

    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                throw new Error(`API Error: ${data.message}`);
            }

            // Update weather widget with data
            const { main, weather, wind } = data;
            iconElement.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
            iconElement.alt = weather[0].description;
            temperatureElement.textContent = `${Math.round(main.temp)}°F`;
            conditionElement.textContent = weather[0].description;
            windElement.textContent = `Wind: ${Math.round(wind.speed)} mph`;
            humidityElement.textContent = `Humidity: ${main.humidity}%`;

            // Show the weather content and hide the loading message
            loadingElement.style.display = 'none';
            contentElement.style.display = 'block';

            // Set the weather live dot to green
            weatherLiveDot.classList.add('live');
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            loadingElement.textContent = 'Unable to load weather information. Please try again later.';
        });

    // Simulate incline status (replace this with real API or logic if available)
    const isInclineOpen = new Date().getHours() >= 6 && new Date().getHours() <= 22; // Open from 6 AM to 10 PM
    if (isInclineOpen) {
        inclineStatusDot.classList.add('open');
        inclineStatusLabel.textContent = 'Incline Open';
    } else {
        inclineStatusDot.classList.add('closed');
        inclineStatusLabel.textContent = 'Incline Closed';
    }
});