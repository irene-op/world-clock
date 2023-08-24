
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
    sydneyTimeElement.innerHTML = moment().tz("Australis/Sydney").format("hh:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);