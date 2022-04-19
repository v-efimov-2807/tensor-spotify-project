import { sliderHandle } from './slider.js';

const sliders = Array.from(document.querySelectorAll('.slider'));

sliders.forEach((slider) => {
    slider.addEventListener("click", (event) => {
        sliderHandle(slider, event.target)
    });
})
