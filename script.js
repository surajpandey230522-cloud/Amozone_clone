const sliderTrack = document.getElementById("sliderTrack");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

const cardWidth = 400;

next.addEventListener("click", function () {

    index++;
    

    sliderTrack.style.transform =
        `translateX(-${index * cardWidth}px)`;

});


prev.addEventListener("click", function () {

    index--;

    if (index < 0) {
        index = sliderTrack-1;
    }

    sliderTrack.style.transform =
        `translateX(-${index * cardWidth}px)`;

});