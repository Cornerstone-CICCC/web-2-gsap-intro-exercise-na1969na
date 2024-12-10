const box = document.querySelector(".box");
const moveDistanceX = window.innerWidth - box.offsetWidth;
const moveDistanceY = window.innerHeight - box.offsetWidth;

gsap.from(".box.red", {
  opacity: 0,
  x: -1000,
  y: -1000,
  duration: 1,
});

gsap.from(".box.green", {
  opacity: 0,
  x: 1000,
  y: -1000,
  duration: 1,
  delay: 0.5,
});

gsap.from(".box.yellow", {
  opacity: 0,
  x: -1000,
  y: 1000,
  duration: 1,
  delay: 1.5,
});

gsap.from(".box.blue", {
  opacity: 0,
  x: 1000,
  y: 100,
  duration: 1,
  delay: 1.0,
});

gsap.to(".box.red", {
  x: moveDistanceX,
  duration: 1,
  delay: 3,
  borderRadius: "50%",
  ease: "power1.inOut",
  backgroundColor: "green",
});

gsap.to(".box.green", {
  y: moveDistanceY,
  duration: 1,
  delay: 3,
  borderRadius: "50%",
  ease: "power1.inOut",
  backgroundColor: "blue",
});

gsap.to(".box.yellow", {
  y: -moveDistanceY,
  duration: 1,
  delay: 3,
  borderRadius: "50%",
  ease: "power1.inOut",
  backgroundColor: "red",
});

gsap.to(".box.blue", {
  x: -moveDistanceX,
  duration: 1,
  delay: 3,
  borderRadius: "50%",
  ease: "power1.inOut",
  backgroundColor: "yellow",
});

gsap.to(".box.red", {
  x: 10000,
  duration: 4,
  delay: 4,
  ease: "power1.inOut",
});

gsap.to(".box.green", {
  x: 10000,
  duration: 4,
  delay: 4,
  ease: "power1.inOut",
});

gsap.to(".box.yellow", {
  x: -10000,
  duration: 4,
  delay: 4,
  ease: "power1.inOut",
});

gsap.to(".box.blue", {
  x: -10000,
  duration: 4,
  delay: 4,
  ease: "power1.inOut",
});
