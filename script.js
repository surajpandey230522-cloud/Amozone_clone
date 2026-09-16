const sliderTrack = document.getElementById("sliderTrack");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

const cardWidth = 500;

next.addEventListener("click", function () {
 
    if(index<3)
      index++;

    sliderTrack.style.transform =
        `translateX(-${index * cardWidth}px)`;

});


prev.addEventListener("click", function () {

    index--;

    if (index < 0) {
       index=0;
    }
    sliderTrack.style.transform =
        `translateX(-${index * cardWidth}px)`;

});