/*!
* Start Bootstrap - Clean Blog v6.0.5 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

let totalImages = 15;
var imageCounter = 1;

let weddingDate = new Date('2022-08-20T15:00:00')
document.getElementById("wedding-counter-days").innerHTML = remainingDays();
document.getElementById("wedding-counter-hours").innerHTML = remainingHours();

setInterval(function(){ changeImage(); }, 5000);

function changeImage()
{
  document.getElementById("header").style.backgroundImage = "url(img/us/" + (imageCounter % (totalImages - 1)) + ".jpg)";
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