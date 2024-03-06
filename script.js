import countdown from "./countdown.js";

let dateObject;
document.getElementById("getDateButton").addEventListener("click", function() {
  const inputDate = document.getElementById("dateInput").value;
  const dateObject = new Date(inputDate + "T00:00:00");
});

console.log(dateObject)