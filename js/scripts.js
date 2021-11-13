let totalImages = 15;
var imageCounter = 1;

let weddingDate = new Date('2022-08-20T15:00:00')
document.getElementById("wedding-counter-days").innerHTML = remainingDays();
document.getElementById("wedding-counter-hours").innerHTML = remainingHours();

setInterval(function(){ changeImage(); }, 5000);

function changeImage()
{
  document.getElementById("splash-container").style.backgroundImage = "url(../img/us/" + (imageCounter % (totalImages - 1)) + ".jpg)";
  imageCounter++;
}

function remainingDays() {
  var now = Date.now();
  var ms = weddingDate.getTime() - now;
  var days = parseInt(ms / 1000 / 60 / 60 / 24, 10);
  return days;
}

function remainingHours() {
  var now = Date.now();
  var ms = weddingDate.getTime() - now;
  var hours = parseInt(ms / 1000 / 60 / 60, 10);
  return hours - remainingDays() * 24;
}