const syndromeSlider = new Swiper('.syndrome-slider', {
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next.syndrome-button-next',
    prevEl: '.swiper-button-prev.syndrome-button-prev',
  },
});





const machines = [...document.querySelectorAll('.look-wood')];
let machinesWords = 0;
machines.map(machine => {
	window.addEventListener('scroll', function() {
		let machineOffset = window.pageYOffset;
		if (machineOffset >= ( machine.offsetTop - 500 )) {
			machine.querySelector('.look__machine').classList.add('look__machine--moving');

		machine.querySelector('.look-wood-word').classList.add('look-word--effect');

		document.querySelector('.before-after-slider__controller').classList.add('before-after-slider__controller--preview')
		}
	})
})










const baseSlider1 = new Swiper('.base-slider-1', {
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next.base-1-button-next',
    prevEl: '.swiper-button-prev.base-1-button-prev',
  },
});
const baseSlider2 = new Swiper('.base-slider-2', {
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next.base-2-button-next',
    prevEl: '.swiper-button-prev.base-2-button-prev',
  },
});


// popa({
//   pop
// })






















const slider = document.querySelector('.before-after-slider');
const before = document.querySelector('.before-section');
const beforeImage = before.querySelector('.before-after-slide-inner');
const resizer = document.querySelector('.before-after-slider__controller');
// resizer.dispatchEvent(new Event('mouseover'));
// resizer.dispatchEvent(new Event('mouseenter'));
resizer.dispatchEvent(new Event('mousedown'));
resizer.click()
// resizer.dispatchEvent(new Event('mouseup'));

let active = false;

//Sort overflow out for Overlay Image
document.addEventListener("DOMContentLoaded", function() {
	let width = slider.offsetWidth;
	console.log(width);
	beforeImage.style.width = width + 'px';
});

//Adjust width of image on resize 
window.addEventListener('resize', function() {
	let width = slider.offsetWidth;
	console.log(width);
	beforeImage.style.width = width + 'px';
})

resizer.addEventListener('mousedown',function(){
	active = true;
	resizer.classList.add('resize');

});

document.body.addEventListener('mouseup',function(){
	active = false;
	resizer.classList.remove('resize');
});

document.body.addEventListener('mouseleave', function() {
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

resizer.addEventListener('touchstart',function(){
  active = true;
  resizer.classList.add('resize');
});

document.body.addEventListener('touchend',function(){
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('touchcancel',function(){
  active = false;
  resizer.classList.remove('resize');
});

//calculation for dragging on touch devices
document.body.addEventListener('touchmove',function(e){
  if (!active) return;
  let x;
  
  let i;
  for (i=0; i < e.changedTouches.length; i++) {
		x = e.changedTouches[i].pageX; 
  }
  
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

function slideIt(x){
	let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
	before.style.width = transform+"px";
	resizer.style.left = transform-0+"px";
}

//stop divs being selected.
function pauseEvent(e){
	if(e.stopPropagation) e.stopPropagation();
	if(e.preventDefault) e.preventDefault();
	e.cancelBubble=true;
	e.returnValue=false;
	return false;
}
before.style.width = '50px'
















document.addEventListener('DOMContentLoaded',function(event){
	// array with texts to type in typewriter
	var dataText = [
		"маркетолог",
		"таргетолог",
		"контекстолог",
		"директолог",
		"копирайтер",
		"smm-менеджер",
		"продюсер",
		"коммьюнити-менеджер",
		"аккаунт-менеджер",
		"автоворонщик",
	];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".bad-marketing-character__spec").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 160);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 500);
    }
  }

  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 150);
        // }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
