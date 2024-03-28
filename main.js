import './style.css'

let timeline = gsap.timeline();
timeline.from('.sun',{duration:3, opacity:0, x:50,y:50});
timeline.from('.land',{duration:1, opacity:0, x:50,y:50},"-=1.5");
timeline.from('.gress',{duration:1, opacity:0, y:50,stagger:{
  each:0.2,
  from:"center"
}});
timeline.add('test');
timeline.from('.bird',{duration:1, opacity:0, y:50});
timeline.from('.music',{duration:1, opacity:0, x:50,y:50},"<");
timeline.from('.eye-left, .eye-right',{duration:1,x:30,repeat:-1,yoyo:true});
timeline.to('.mouse',{scaleY:0,transformOrigin:'center center',repeat:-1,yoyo:true},"<");

function hasClass(className){
  return event.target.classList.contains(className)
}


document.addEventListener('click', function (event) {
  let check = event.target.classList;

  if (event.target.matches('button')) { event.target.focus()}


  if(hasClass('play')){ timeline.play() }
  
  if(hasClass('pause')){ timeline.pause() }
  
  if(hasClass('reverse')){ timeline.reverse() }
  
  if(hasClass('restart')){ timeline.restart() }
  
  if(hasClass('test')){ timeline.play('test') }
  
})