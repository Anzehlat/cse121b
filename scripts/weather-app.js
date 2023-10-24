// Anzehla Wolfley
// CSE121B Final Project

const locations = [
    "Salt Lake City, US",
    "Phoenix, US",
    "San Francisco, US",
    "Honolulu, US"
];

async function getWeather() {
    const locationSelect = document.getElementById('locationSelect');
    const selectedLocation = locationSelect.value;
    const apiKey = 'd124e6d8f35a3e9f3118d4d2f61b6fb5';

    if (locations.includes(selectedLocation)) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedLocation}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response not ok');
            }
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            displayError("Weather data couldn't be fetched. Please try again.");
        }
    } else {
        console.error('Invalid location selected');
        displayError('Invalid location selected. Please choose from the provided options.');
    }
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const locationName = `${data.name}, ${data.sys.country}`;
    const temperature = `${data.main.temp}°C`;
    const conditions = data.weather[0].description;
    const windSpeed = `${data.wind.speed} m/s`;
    const humidity = `${data.main.humidity}%`;
    weatherDisplay.innerHTML = `
        <h2>Weather for ${locationName}</h2>
        <p>Temperature: ${temperature}</p>
        <p>Conditions: ${conditions}</p>
        <p>Wind Speed: ${windSpeed}</p>
        <p>Humidity: ${humidity}</p>
    `;
}

function displayError(errorMessage) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.innerHTML = `<p class="error">${errorMessage}</p>`;
}

getWeather();
