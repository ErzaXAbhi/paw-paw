const petOne = document.querySelectorAll(".pet1");
const petTwo = document.querySelectorAll(".pet2");
const navbar = document.querySelector(".navbar");

gsap.from(petOne, {
  autoAlpha: 0,
  y: -500,
  ease: "linear",
  duration: 1.5,
  delay: 2,
});

gsap.from(petTwo, {
  autoAlpha: 0,
  y: 500,
  ease: "linear",
  duration: 1.5,
  delay: 2,
});

gsap.from(navbar, { autoAlpha: 0, scale: 0, duration: 1.5, ease: "linear" });
