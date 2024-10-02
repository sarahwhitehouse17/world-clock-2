function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  losAngelesTimeElement = document.querySelector(".time");

  let losAngelesDate = moment()
    .tz("America/Los_Angeles")
    .format(`dddd, MMMM Do, YYYY`);

  let losAngelesDateElement = document.querySelector(".date");
  losAngelesDateElement.innerHTML = losAngelesDate;

  let losAngelesTime = moment()
    .tz("America/Los_Angeles")
    .format(`H:mm:ss [<small>]A[</small>]`);

  losAngelesTimeElement.innerHTML = losAngelesTime;
  ///////////////////////////////////////////////////

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("dddd, MMMM Do, YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small>] ");
}

updateTime();
setInterval(updateTime, 1000);
