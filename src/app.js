// Display time on landing page

function updateTime(){
    // L.A.
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date")
    let losAngelesTimeElement = losAngelesElement.querySelector(".time")

    losAngelesDateElement.innerHTML = moment().tz("America/Los_Angeles").format("MMMM D, YYYY");
    losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("hh:mm:ss [<small>]A[</small>]");

    // Sydney
    let sydneyElement = document.querySelector("#sydney");
    let sydneyDateElement = sydneyElement.querySelector(".date")
    let sydneyTimeElement = sydneyElement.querySelector(".time")

    sydneyDateElement.innerHTML = moment().tz("Australia/Sydney").format("MMMM D, YYYY");
    sydneyTimeElement.innerHTML = moment().tz("Australia/Sydney").format("hh:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

// Select and display new city from drop-down menu
function displayCity(event) {
    let cityTimeZone = event.target.value;
    let cityTime = moment().tz("cityTimeZone").format("hh:mm:ss");
    let cityDate = moment().tz("cityTimeZone").format("MMMM D, YYYY");
    console.log(cityTimeZone);
    console.log(cityDate);
}

let selectCityElement = document.querySelector("#select-city")
selectCityElement.addEventListener("change", displayCity)