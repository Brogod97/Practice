const backgroundImage = document.querySelector(".background-image");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(
  backgroundImage,
  1,
  { height: "0%" },
  { height: "70%", ease: Power2.easeInOut }
)
  .fromTo(
    backgroundImage,
    1,
    { width: "100%" },
    { width: "90%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1"
  )
  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(menu, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(headline, 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, "-=0.5");
