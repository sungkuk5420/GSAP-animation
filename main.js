import './style.css'



const button = document.querySelector('.button');
const animation =gsap.to('.button',{scale:1,repeat:-1,yoyo:true,paused:true})
button.addEventListener('mouseenter',()=>{
  animation.restart();
})
button.addEventListener('mouseleave',()=>{
  animation.pause();
  gsap.to('.button',{scale:0.8})
})