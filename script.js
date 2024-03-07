import countdown from "./countdown.js";

let dateObject;
document.getElementById("getDateButton").addEventListener("click", function() {
  const inputDate = document.getElementById("dateInput").value;
  dateObject = new Date(inputDate + "T00:00:00");
  const tempo = new countdown(dateObject);
  const final = tempo.final;
  const days = document.getElementById("days");
  days.innerText += final.days + " dias, ";
  const hours = document.getElementById("hours");
  hours.innerText +=final.hours +":";
  const minutes = document.getElementById("minutes");
  minutes.innerText +=final.minutes +":";
  const seconds = document.getElementById("seconds");
  seconds.innerText +=final.seconds;
});

