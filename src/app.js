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

    if (event.target.value === "currentCity") {
        cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#display-cities");
    citiesElement.innerHTML = `
    <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
            </div>
            <a href="/">Back to main</a>`;
    
    setTimeout(() => {
        displayCity(event)
    }, 1000);
}

let selectCityElement = document.querySelector("#select-city")
selectCityElement.addEventListener("change", displayCity)

console.log(moment.tz.guess());