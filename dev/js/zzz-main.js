let dateFormattingOptions = {
	// era: 'long',
	// year: 'numeric',
	month: 'long',
	day: 'numeric',
	// weekday: 'long',
	// timezone: 'UTC',
	// hour: 'numeric',
	// minute: 'numeric',
	// second: 'numeric'
}
let weeks = 16;
let now = new Date();
now.setDate(now.getDate() + weeks * 7 + 8);
now = now.toLocaleString("ru", dateFormattingOptions);

document.querySelector('.hero__deadline').innerText = now;

let popButtonType;

if (window.innerWidth > 1400) {
	popButtonType = 'outer';
} else {
	popButtonType = 'inner';
}



/* 
 *	Gets
 *	1. callback - function
 *	2. offset - number of pixels while script fires
 *	3. target - className of element
 *	4. targets
 *	5. numberOfFires
 *
 * */

function waitUntilPixels($) {
	let target = document.querySelector($.target);
	// let targets = [...$.targets];
	let callback = $.callback;
	let offset = $.offset;
	let pageOffset;

	// let firesNumber = $.firesNumber;
	let firesNumber = 0;


	window.addEventListener('scroll', function() {
		let currentOffset = window.pageYOffset;
		
			if (currentOffset >= (target.offsetTop - offset)) {
				if (firesNumber < 1) {
					callback();
					firesNumber++;
				}
			}
	})
}




function throwBullets() {
	let bullets = [...document.querySelectorAll('.get-features-item')];
	bullets.map(bullet => {
		// console.log(bullet)
		bullet.classList.remove('active');
	})
}
waitUntilPixels({
	callback: throwBullets,
	offset: 200,
	target: '.get__title',
})









const syndromeSlider = new Swiper('.syndrome-slider', {
  // loop: true,
	autoplay: {
		delay: 5000,
	},
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


popa({
	pop: '.main-callback-pop',
	clickTrigger: '.hero-button',
	popCloser: '.close-hero',
	popCloserType: 'outer',
})

document.querySelector('.button__callback').addEventListener('click', function(){
	popToggle(document.querySelector('.main-callback-pop-wrapper'), document.querySelector('.main-callback-pop'))
})
document.querySelector('.button__consult').addEventListener('click', function(){
	popToggle(document.querySelector('.main-callback-pop-wrapper'), document.querySelector('.main-callback-pop'))
})





popa({
	pop: '.pop-ilnaz',
	clickTrigger: '.pop-trigger--ilnaz',
	// popCloser: '.closer-ilnaz',
	popCloserType: 'outer',
})




popa({
	pop: '.pop-nastya',
	clickTrigger: '.pop-trigger--nastya',
	// popCloserType: 'inner',
	popCloserType: popButtonType,
})

popa({
	clickTrigger: '.about-features__item--learn',
	pop: '.pop-about-learn',
	popCloserType: 'outer',
})
popa({
	clickTrigger: '.about-features__item--projects',
	pop: '.pop-about-projects',
	popCloserType: 'outer',
})

popa({
	clickTrigger: '.about-features__item--database',
	pop: '.pop-about-database',
	popCloserType: 'outer',
})
popa({
	clickTrigger: '.about-features__item--giving',
	pop: '.pop-about-giving',
	popCloserType: 'outer',
})



function startBuddyingSlider(){
	var buddyingSlider = new Swiper('.pop-buddying-slider', {
		navigation: {
			nextEl: '.swiper-button-next.buddying-button-next',
			prevEl: '.swiper-button-prev.buddying-button-prev',
		},
	})
}
popa({
	clickTrigger: '.about-features__item--buddying',
	pop: '.pop-about-buddying',
	popCloserType: 'outer',
	onOpen: startBuddyingSlider,
})


function startPsychoSlider() {
	var psychoSlider = new Swiper('.pop-psycho-slider', {
		direction: 'vertical',
		spaceBetween: 3000,
		navigation: {
			nextEl: '.swiper-button-next.psycho-button-next',
			prevEl: '.swiper-button-prev.psycho-button-prev',
		},
	})
}
popa({
	clickTrigger: '.about-features__item--psycho',
	pop: '.pop-about-psycho',
	popCloserType: 'outer',
	onOpen: startPsychoSlider,
})

popa({
	clickTrigger: '.about-features__item--meetups',
	pop: '.pop-about-meetups',
	popCloserType: popButtonType,
})

popa({
	clickTrigger: '.about-features__item--classes',
	pop: '.pop-about-classes',
	popCloserType: 'outer',
})

popa({
	clickTrigger: '.about-features__item--chats',
	pop: '.pop-about-chats',
	popCloserType: 'outer',
})

popa({
	clickTrigger: '.about-features__item--combos',
	pop: '.pop-about-combos',
	popCloserType: 'outer',
})

popa({
	clickTrigger: '.pop-trigger--egor',
	pop: '.pop-egor',
	// popCloserType: 'inner',
	popCloserType: popButtonType,
})


function startElectiveSlider() {
	var electiveSlider = new Swiper('.elective-slider', {
		spaceBetween: 2000,
		navigation: {
			nextEl: '.swiper-button-next.elective-button-next',
			prevEl: '.swiper-button-prev.elective-button-prev',
		},

	})
}
popa({
	clickTrigger: '.button__elective',
	pop: '.pop-elective',
	popCloserType: 'outer',
	onOpen: startElectiveSlider,
})


function startNuclearSlider() {
	var nuclearSlider = new Swiper('.nuclear-slider', {
		spaceBetween: 2000,
		navigation: {
			nextEl: '.swiper-button-next.nuclear-button-next',
			prevEl: '.swiper-button-prev.nuclear-button-prev',
		},

	})
}
popa({
	clickTrigger: '.button__nuclear',
	pop: '.pop-nuclear',
	popCloserType: 'outer',
	onOpen: startNuclearSlider,
})


popa({
	clickTrigger: '.pop-trigger--mikhail',
	pop: '.pop-mikhail',
	popCloserType: 'outer',
})
popa({
	clickTrigger: '.pop-trigger--dim',
	pop: '.pop-dim',
	popCloserType: 'outer',
})
popa({
	clickTrigger: '.pop-trigger--nikolai',
	pop: '.pop-nikolai',
	popCloserType: 'outer',
})
popa({
	clickTrigger: '.pop-trigger--bogdan',
	pop: '.pop-bogdan',
	popCloserType: 'outer',
})



popa({
	clickTrigger: '.learn-faq__coursework',
	pop: '.pop-coursework',
	popCloserType: 'outer',
})


function startProgrammSlider() {
	var programmSlider = new Swiper('.programm-slider', {
		spaceBetween: 2000,
		navigation: {
			nextEl: '.swiper-button-next.programm-button-next',
			prevEl: '.swiper-button-prev.programm-button-prev',
		},
	})
}

popa({
	clickTrigger: '.learn-faq__programm',
	pop: '.pop-programm',
	popCloserType: 'outer',
	onOpen: startProgrammSlider,
})

popa({
	clickTrigger: '.learn-faq__homework',
	pop: '.pop-homework',
	popCloserType: 'outer',
})
popa({
	clickTrigger: '.learn-faq__flex',
	pop: '.pop-flex',
	popCloserType: 'outer',
})
popa({
	clickTrigger: '.learn-faq__warranties',
	pop: '.pop-warranties',
	popCloserType: 'outer',
})
popa({
	clickTrigger: '.learn-faq__communication',
	pop: '.pop-communication',
	popCloserType: 'outer',
})



function startEmployeSlider() {
	var employeSlider = new Swiper('.employe-slider', {
		spaceBetween: 2000,
		navigation: {
			nextEl: '.swiper-button-next.employe-button-next',
			prevEl: '.swiper-button-prev.employe-button-prev',
		},
	})
}
popa({
	clickTrigger: '.learn-faq__employe',
	pop: '.pop-employe',
	popCloserType: 'outer',
	onOpen: startEmployeSlider,
})



function startDragSlider1() {
	var dargSlider1 = new Swiper('.drag-slider-1', {
		spaceBetween: 2000,
		navigation: {
			nextEl: '.swiper-button-next.drag-1-button-next',
			prevEl: '.swiper-button-prev.drag-1-button-prev',
		},
	})
}
popa({
	clickTrigger: '.button-drag-more-1',
	pop: '.pop-drag-1',
	popCloserType: 'outer',
	onOpen: startDragSlider1,
})



function startDragSlider2() {
	var dargSlider2 = new Swiper('.drag-slider-2', {
		spaceBetween: 2000,
		navigation: {
			nextEl: '.swiper-button-next.drag-2-button-next',
			prevEl: '.swiper-button-prev.drag-2-button-prev',
		},
	})
}
popa({
	clickTrigger: '.button-drag-more-2',
	pop: '.pop-drag-2',
	popCloserType: 'outer',
	onOpen: startDragSlider2,
})


function startDragSlider3() {
	var dargSlider2 = new Swiper('.drag-slider-3', {
		spaceBetween: 2000,
		navigation: {
			nextEl: '.swiper-button-next.drag-3-button-next',
			prevEl: '.swiper-button-prev.drag-3-button-prev',
		},
	})
}
popa({
	clickTrigger: '.button-drag-more-3',
	pop: '.pop-drag-3',
	popCloserType: 'outer',
	onOpen: startDragSlider3,
})



// popa({
//   pop: '.pop-leaving',
//   clickTrigger: 'page-leaving',
//   popCloser: '.closer',
//   popCloserType: 'outer',
// })
