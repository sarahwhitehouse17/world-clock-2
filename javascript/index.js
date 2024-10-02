function updateTime() {
  let lAElement = document.querySelector("#los-angeles");
  let lADateElement = lAElement.querySelector(".date");
  let lATimeElement = lAElement.querySelector(".time");
  let lATime = moment().tz("America/Los_Angeles");
  lADateElement.innerHTML = lATime.format("dddd, MMMM Do, YYYY");
  lATimeElement.innerHTML = lATime.format("h:mm:ss[<small>]A[</small>] ");

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("dddd, MMMM Do, YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small>] ");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format(`A`)}</small></div>
          </div>
        </div>
      </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
