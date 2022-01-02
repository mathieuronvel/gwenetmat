let totalImages = 15;
var imageCounter = 1;

let weddingDate = new Date('2022-08-20T15:00:00')
document.getElementById("wedding-counter-days").innerHTML = remainingDays();
document.getElementById("wedding-counter-hours").innerHTML = remainingHours();

setInterval(function(){ changeImage(); }, 5000);

function changeImage()
{
  var imageIndex = imageCounter % (totalImages - 1);
  console.log("imageIndex="+imageIndex);
  var currentImageUrl = window.getComputedStyle(document.getElementById("splash-container")).getPropertyValue('background-image');
  console.log("currentImageUrl="+currentImageUrl);
  var newImageUrl = currentImageUrl.replace(/(\d+)/, imageIndex);
  console.log("newImageUrl="+newImageUrl);
  document.getElementById("splash-container").style.backgroundImage = newImageUrl;
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

var windowWidth = window.innerWidth / parseFloat(
                    getComputedStyle(
                      document.querySelector('body')
                    )['font-size']
                  );
console.log("windowWidth=" + windowWidth);

var windowHeight = window.innerHeight / parseFloat(
                    getComputedStyle(
                      document.querySelector('body')
                    )['font-size']
                  );
console.log("windowHeight=" + windowHeight);