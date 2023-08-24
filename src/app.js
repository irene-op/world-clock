// Display time on landing page

function updateTime(){
    // L.A.
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date")
        let losAngelesTimeElement = losAngelesElement.querySelector(".time")

        losAngelesDateElement.innerHTML = moment().tz("America/Los_Angeles").format("MMMM D, YYYY");
        losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("hh:mm:ss [<small>]A[</small>]");
    }
    

    // Sydney
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
        
        let sydneyDateElement = sydneyElement.querySelector(".date")
        let sydneyTimeElement = sydneyElement.querySelector(".time")

        sydneyDateElement.innerHTML = moment().tz("Australia/Sydney").format("MMMM D, YYYY");
        sydneyTimeElement.innerHTML = moment().tz("Australia/Sydney").format("hh:mm:ss [<small>]A[</small>]");
    }
}

updateTime();
setInterval(updateTime, 1000);

// Select and display new city from drop-down menu
function displayCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz("cityTimeZone");
    let citiesElement = document.querySelector("#display-cities");
    citiesElement.innerHTML = `
    <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
            </div>`;
    
    console.log(cityTimeZone);
    console.log(cityTime.format("hh:mm:ss A"));
    //console.log(cityDate);
}

let selectCityElement = document.querySelector("#select-city")
selectCityElement.addEventListener("change", displayCity)