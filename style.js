const apiKey = '99b8ef1e0c0652639d555f0ffc62bcc0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector('.input');
const searchBtn = document.querySelector('.search__btn');

async function searchWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    if (response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } 
    else {
        document.querySelector('.weather__city').innerHTML = data.name;
        document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp) + 'c°';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'km/h';

        if (data.weather[0].main == 'Clouds'){
            document.querySelector('.weather__img').src = './images/clouds.svg';
        } else if (data.weather[0].main == 'Clear'){
            document.querySelector('.weather__img').src = './images/clear.svg';
        } else if (data.weather[0].main == 'Snow'){
            document.querySelector('.weather__img').src = './images/snow.svg';
        } else if (data.weather[0].main == 'Rain'){
            document.querySelector('.weather__img').src = './images/rain.svg';
        } else if (data.weather[0].main == 'Drizzle'){
            document.querySelector('.weather__img').src = './images/drizzle.svg';
        } else if (data.weather[0].main == 'Thunderstorm'){
            document.querySelector('.weather__img').src = './images/thunderstorm.svg';
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
    searchWeather(searchBox.value);
})