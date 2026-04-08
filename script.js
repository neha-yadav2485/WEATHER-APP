const apiKey = "a08235be1caae0361f704fdf23751b6c";

async function getWeather(){
    const city = document.getElementById("cityInput").value.trim();

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // for debugging

        if(data.cod != 200){
            alert(data.message);
            return;
        }

        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent = `🌡️ Temperature: ${data.main.temp} °C`;
        document.getElementById("description").textContent = `🌥️ Weather: ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `🌬️ Wind Speed: ${data.wind.speed} m/s`;

    }
    catch(error){
        alert("API Error. Check console.");
        console.error(error);
    }
}