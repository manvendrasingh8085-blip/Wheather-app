let apikey = "b5f1962490d37835aea7643c14c1c897";

let searchBtn = document.querySelector("#search-btn");
let resultBox = document.querySelector("#result");

searchBtn.addEventListener("click", async() => {
    let cityNmae = document.querySelector("#city-name").value.trim();

    if(cityName === ""){
        resultBox.classList.remove("hidden");
        resultBox.innerHTML = `<h3>Please Enter a City Name</h3>`;
        return;
    }
    
    try{

    } catch(error){
        console.log(error);
        resultBox.innerHTML = `<h3>Error in fetching weather details...</h3>`;
    }
});