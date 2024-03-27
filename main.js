import './style.css'

gsap.from(".box", {y:-100,stagger:{
  // amount:2,
  each:0.2,
  from:"edges" // center , edges
}});

document.querySelectorAll(".box").forEach(function(box) {
  box.addEventListener("click", function() {
    gsap.to(".box", {
      duration: 0.5, 
      opacity: 0, 
      y: -100, 
      stagger: 0.1,
      ease: "back.in"
    });
  });
});