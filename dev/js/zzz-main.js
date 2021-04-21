
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





let phoneInput = [...document.querySelectorAll('.input--phone')];

phoneInput.map(input => {
	Inputmask({mask: '+7 (999) 999-99-99'}).mask(input);
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
			machine.querySelector('.look__machine').classList.add('look__machine--movings');

		machine.querySelector('.look-wood-word').classList.add('look-word--effect');

		// document.querySelector('.before-after-slider__controller').classList.add('before-after-slider__controller--preview')
		}
	})
})








// function baseSliders() {
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
	popa({
		clickTrigger: '.has-popup--egor',
		pop: '.pop-egor',
		// popCloserType: 'inner',
		// popCloserType: popButtonType,
		popCloserType: 'inner',
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
		popCloserType: 'inner',
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
		// popCloserType: popButtonType,
		// popCloserType: 'outer',
		onOpen: startNuclearSlider,
		popCloserType: 'inner',
	})
// }

// waitUntilPixels({
//     callback: baseSliders,
//     offset: 2000,
//     target: '.base',
// })
































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
	clickTrigger: '.button__callback',
	// popCloserType: 'outer',
	popCloserType: 'inner',
})
popa({
	pop: '.pop-consult',
	clickTrigger: '.button__consult',
	popCloserType: 'inner',
	// popCloserType: 'outer',
})
popa({
	pop: '.pop-book',
	clickTrigger: '.hero-button',
	popCloserType: 'inner',
	// popCloserType: 'outer',
})





function openBurger() {
	document.querySelector('.burger').classList.add('burger--opened')
}
function closeBurger() {
	document.querySelector('.burger').classList.remove('burger--opened')
}

const burgerLinks = [...document.querySelectorAll('.burger-menu-links__link')];
burgerLinks.map(link => {
	link.addEventListener('click', function() {
		closePop(document.querySelector('.burger-menu-wrapper'), document.querySelector('.burger-menu'), closeBurger);
	})
})

popa({
	pop: '.burger-menu',
	clickTrigger: '.burger',
	onOpen: openBurger,
	onClose: closeBurger,
})

popa({
	pop: '.pop-ilnaz',
	// clickTrigger: '.pop-trigger--ilnaz',
	clickTrigger: '.has-popup--ilnaz',
	// popCloser: '.closer-ilnaz',
	popCloserType: 'inner',
	// popCloserType: 'outer',
})



	popa({
		pop: '.pop-nastya',
		clickTrigger: '.has-popup--nastya',
		popCloserType: 'inner',
		// popCloserType: popButtonType,
		// popCloserType: popButtonType,
	})

	popa({
		clickTrigger: '.about-features__item--learn',
		pop: '.pop-about-learn',
		// popCloserType: popButtonType,
		popCloserType: 'inner',
	})
	popa({
		clickTrigger: '.about-features__item--projects',
		pop: '.pop-about-projects',
		popCloserType: 'inner',
		// popCloserType: popButtonType,
		// popCloserType: 'outer',
	})

	popa({
		clickTrigger: '.about-features__item--database',
		pop: '.pop-about-database',
		// popCloserType: popButtonType,
		popCloserType: 'inner',
		// popCloserType: 'outer',
	})
	popa({
		clickTrigger: '.about-features__item--giving',
		pop: '.pop-about-giving',
		// popCloserType: popButtonType,
		popCloserType: 'inner',
		// popCloserType: 'outer',
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
		popCloserType: popButtonType,
		onOpen: startBuddyingSlider,
		// popCloserType: 'outer',
		popCloserType: 'inner',
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
		onOpen: startPsychoSlider,
		// popCloserType: popButtonType,
		// popCloserType: 'outer',
		popCloserType: 'inner',
	})

	popa({
		clickTrigger: '.about-features__item--meetups',
		pop: '.pop-about-meetups',
		// popCloserType: popButtonType,
		popCloserType: 'inner',
	})

	popa({
		clickTrigger: '.about-features__item--classes',
		pop: '.pop-about-classes',
		// popCloserType: popButtonType,
		// popCloserType: 'outer',
		popCloserType: 'inner',
	})

	popa({
		clickTrigger: '.about-features__item--chats',
		pop: '.pop-about-chats',
		// popCloserType: popButtonType,
		// popCloserType: 'outer',
		popCloserType: 'inner',
	})

	popa({
		clickTrigger: '.about-features__item--combos',
		pop: '.pop-about-combos',
		// popCloserType: popButtonType,
		popCloserType: 'inner',
		// popCloserType: 'outer',
	})





popa({
	clickTrigger: '.programm__certificate-pic-1',
	pop: '.pop-certificate-1',
})
popa({
	clickTrigger: '.programm__certificate-pic-2',
	pop: '.pop-certificate-2',
})

popa({
	clickTrigger: '.programm__certificate-pic-3',
	pop: '.pop-certificate-3',
})

popa({
	clickTrigger: '.programm__certificate-pic-4',
	pop: '.pop-certificate-4',
})



popa({
	clickTrigger: '.has-popup--mikhail',
	pop: '.pop-mikhail',
	// popCloserType: 'iner',
	// popCloserType: popButtonType,
	popCloserType: 'inner',
})
popa({
	clickTrigger: '.has-popup--dim',
	pop: '.pop-dim',
	// popCloserType: 'outer',
	// popCloserType: popButtonType,
	popCloserType: 'inner',
})
popa({
	clickTrigger: '.has-popup--nikolai',
	pop: '.pop-nikolai',
	// popCloserType: 'outer',
	// popCloserType: popButtonType,
	popCloserType: 'inner',
})
popa({
	clickTrigger: '.has-popup--bogdan',
	pop: '.pop-bogdan',
	// popCloserType: 'outer',
	// popCloserType: popButtonType,
	popCloserType: 'inner',
})



popa({
	clickTrigger: '.learn-faq__coursework',
	pop: '.pop-coursework',
	popCloserType: 'inner',
	// popCloserType: popButtonType,
	// popCloserType: 'outer',
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
	popCloserType: 'inner',
	onOpen: startProgrammSlider,
})

popa({
	popCloserType: 'inner',
	clickTrigger: '.learn-faq__homework',
	pop: '.pop-homework',
	// popCloserType: popButtonType,
	// popCloserType: 'outer',
})
popa({
	clickTrigger: '.learn-faq__flex',
	pop: '.pop-flex',
	popCloserType: 'inner',
	// popCloserType: popButtonType,
	// popCloserType: 'outer',
})
popa({
	clickTrigger: '.learn-faq__warranties',
	pop: '.pop-warranties',
	// popCloserType: popButtonType,
	popCloserType: 'inner',
	// popCloserType: 'outer',
})
popa({
	clickTrigger: '.learn-faq__communication',
	pop: '.pop-communication',
	// popCloserType: popButtonType,
	popCloserType: 'inner',
	// popCloserType: 'outer',
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
	popCloserType: 'inner',
	// popCloserType: popButtonType,
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
	popCloserType: 'inner',
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
	popCloserType: 'inner',
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
	popCloserType: 'inner',
	onOpen: startDragSlider3,
})



function startThanksSlider() {
	var thanksSlider = new Swiper('.thanks-slider', {
		spaceBetween: 300,
		navigation: {
			nextEl: '.swiper-button-next.thanks-button-next',
			prevEl: '.swiper-button-prev.thanks-button-prev',
		},
	})
}
popa({
	clickTrigger: '.team-thanks-button',
	pop: '.pop-thanks',
	popCloserType: 'inner',
	onOpen: startThanksSlider,
})

function makeTestimonialsPops() {
	popa({
		clickTrigger: '.testimonials-more-1',
		pop: '.pop-testimonials-1',
		// popCloserType: 'inner',
	})
	popa({
		clickTrigger: '.testimonials-more-2',
		pop: '.pop-testimonials-2',
		// popCloserType: 'inner',
	})
	popa({
		clickTrigger: '.testimonials-more-3',
		pop: '.pop-testimonials-3',
		// popCloserType: 'inner',
	})
	popa({
		clickTrigger: '.testimonials-more-4',
		pop: '.pop-testimonials-4',
		// popCloserType: 'inner',
	})
	popa({
		clickTrigger: '.testimonials-more-5',
		pop: '.pop-testimonials-5',
		// popCloserType: 'inner',
	})
	popa({
		clickTrigger: '.testimonials-more-6',
		pop: '.pop-testimonials-6',
		// popCloserType: 'inner',
	})
	popa({
		clickTrigger: '.testimonials-more-7',
		pop: '.pop-testimonials-7',
		// popCloserType: 'inner',
	})
	popa({
		clickTrigger: '.testimonials-more-8',
		pop: '.pop-testimonials-8',
		// popCloserType: 'inner',
	})
}
waitUntilPixels({
	callback: makeTestimonialsPops,
	offset: 2000,
	target: '.testimonials',
})


popa({
	pop: '.pop-privacy',
	clickTrigger: '.button-privacy',
	popCloserType: 'inner',
})

document.querySelector('.footer-link-privacy').addEventListener('click', function(){
	showPop(document.querySelector('.pop-privacy-wrapper'), document.querySelector('.pop-privacy'))
})
popa({
	pop: '.pop-leaving',
	clickTrigger: 'page-leaving',
	popCloser: '.closer',
	popCloserType: 'inner',
  // popCloserType: 'outer',
})

document.querySelector('.button-leaving').addEventListener('click', function() {
	ym(75764569,'reachGoal','on-leaving');
})
document.querySelector('.hero-book-form').addEventListener('submit', function() {
	ym(75764569,'reachGoal','hero-book');
})
document.querySelector('.callback').addEventListener('submit', function() {
	ym(75764569,'reachGoal','callback');
})
document.querySelector('.consult-form').addEventListener('submit', function() {
	ym(75764569,'reachGoal','consult');
})

document.querySelector('.header-phone').addEventListener('click', function(){
	ym(75764569,'reachGoal','phone');
})

document.querySelector('.button-drag-1').addEventListener('click', function(){
	ym(75764569,'reachGoal','demo');
})

document.querySelector('.testimonials-all-cases').addEventListener('click', function(){
	ym(75764569,'reachGoal','all-cases');
})

document.querySelector('.pricing-button').addEventListener('click', function(){
	ym(75764569,'reachGoal','pricing');
})

document.querySelector('.changes-offer__button').addEventListener('click', function(){
	ym(75764569,'reachGoal','last-start');
})


