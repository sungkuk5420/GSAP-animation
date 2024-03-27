import './style.css'

const circle = document.querySelector(".circle")
const bg = document.querySelector(".bg")


let getter = gsap.getProperty(bg);
let x = getter('width','vw')

console.log(x)


circle.addEventListener('mouseenter',()=>{
  
  console.log(gsap.getProperty(bg,'scale'));
  gsap.fromTo(bg,{scale:0},{scale:1})
})