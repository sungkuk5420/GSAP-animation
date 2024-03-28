import './style.css'

const items =document.querySelectorAll('.item');

gsap.defaults({
  duration:0.2
})

items.forEach((currentItem,index)=>{
  let tl= gsap.timeline({paused:true});
  
  tl.to(currentItem.querySelector('.dash'),{x:-5,opacity:1,backgroundColor:'yellow'});
  tl.to(currentItem.querySelector('.text'),{x:5,color:'#fff'},"<");
  currentItem.addEventListener("mouseenter",()=>{
    tl.play();
  })
  currentItem.addEventListener("mouseleave",()=>{
    tl.reverse();
  })
})
