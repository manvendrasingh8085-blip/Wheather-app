let apiKey = "b5f1962490d37835aea7643c14c1c897";

let searchBtn = document.querySelector("#search-btn");
let resultBox = document.querySelector("#result");

searchBtn.addEventListener("click", async () => {
    let cityName = document.querySelector("#city-name").value.trim();

    if (cityName === "") {
        resultBox.classList.remove("hidden");
        resultBox.innerHTML = `<h3>Please Enter a City Name</h3>`;
        return;
    }

    try {
        resultBox.classList.remove("hidden");

        resultBox.innerHTML = `
        <div class="flex justify-center items-center">
            <div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin">
            </div>
        <p>Fetching Weather Details...</p>
        </div>
        `;

        let reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
        );

        if(!response.ok){
            resultBox.innerHTML = `<h3>City Not Found. Please Try Again.</h3>`;
            return;
        }

        let data = await reponse.json();
        console.log(data);

        //wether icon
        let icon = data.weather[0].icon;

        resultBox.innerHTML = `
        <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">${data.name}, ${data.sys.country}</h2>
            <p class="text-lg text-gray-600">${data.weather[0].main}</p>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt = "loading.." class="mx-auto"/>
            
            <h1 class="text-5xl font-bold text-blue-500">${data.main.temp}°C</h1>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="bg-white/40 p-4 rounded-xl shadow">
            <p class="text-gray-600">Humidity</p>
            <h3 class="text-2xl font-bold text-gray-800">${data.main.humidity}%</h3>
            </div>

            <div class="bg-white/60 p-4 rounded-xl shadow">
            <p class="text-gray-600">Wind Speed</p>
            <h3 class="text-2xl font-bold text-gray-800">${data.wind.speed} m/s</h3>
            </div>
            <p class="ml-2 text-gray-600">Fetching Additional Details...</p>
        </div>

        `;
    } catch (error) {
        console.log(error);
        resultBox.innerHTML = `<h3>Error in fetching weather details...</h3>`;
    }
});