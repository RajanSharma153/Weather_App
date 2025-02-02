function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }
    
    const apiKey = '4a6d174548ed4f53b2595849252401';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('result').innerHTML = "Location not found";
            } else {
                document.getElementById('result').innerHTML = 
                    `Temperature in ${data.location.name}, ${data.location.country}: ${data.current.temp_c}°C`;
            }
        })
        .catch(error => console.log('Error:', error));
    }