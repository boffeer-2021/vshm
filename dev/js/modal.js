// TODO:
// logErrors: parametr
function showPop($popWrap, $pop, $onOpen = null) {
	$popWrap.classList.add('pop-wrapper--opened');
	$pop.classList.add('pop--opened');
	document.querySelector('html').classList.add('pop-opened--html');
	if ($onOpen != null) {
		$onOpen();
	}
}

function closePop($popWrap, $pop, $onClose = null) {
	$pop.classList.remove('pop--opened');
	$popWrap.classList.remove('pop-wrapper--opened')
	document.querySelector('html').classList.remove('pop-opened--html')
	if ($onClose != null) {
		$onClose();
	}
}

function popToggle($popWrap, $pop, $onOpen, $onClose){
	let popWrap = $popWrap;
	let	isPopHidden = window.getComputedStyle(popWrap).getPropertyValue('visibility') == 'hidden';
	let pop = $pop;
	isPopHidden
		? showPop(popWrap, pop, $onOpen)
		: closePop(popWrap, pop, $onClose)

	// let form_status = opener.getAttribute('data-form-name');
	// if (form_status != null){
	//   let form_name_val = popWrap.querySelector('form input[name="arit_formname"]').getAttribute('value');
	//   popWrap.querySelector('form input[name="arit_formname"]').value = `form_name_val ${form_status}`
	// }


	// console.log($popWrap, $pop, 'toggled')
}


function popaAddClasses($popWrap, $pop) {
	if ($popWrap != null || $popWrap != undefined) {
		(!$popWrap.classList.contains('pop-wrapper')) ? $popWrap.classList.add('pop-wrapper') : false ;
	}
	if ($pop != null || $pop != undefined) {
		(!$pop.classList.contains('pop')) ? $pop.classList.add('pop') : false ;
	}
		
}

function createPopStructure($) {
	let jsPopWrapper = document.createElement('div');
	jsPopWrapper;
	jsPopWrapper.classList.add($.popWrap.replace('.', ''));
	jsPopWrapper.classList.add('pop-wrapper');
	document.querySelector('body').appendChild(jsPopWrapper);
	// console.log('Wrapper created');

	let jsPopAlingner = document.createElement('div');
	jsPopAlingner;
	jsPopAlingner.classList.add('pop-aligner');
	jsPopWrapper.appendChild(jsPopAlingner);
	// console.log('Alginer created');

	let jsPopCloser = document.createElement('button');
	let closerCounter = 0;
	jsPopCloser;
	jsPopCloser.innerText = '×';

	if ($.popCloser != undefined) {
		jsPopCloser.classList.add($.popCloser.replace('.', ''));
	}
	jsPopCloser.classList.add('pop-closer');
	


	let pop = document.querySelector($.pop)
	jsPopAlingner.appendChild(pop);
	// console.log('Now pop inside aligner');
	pop.classList.add('pop');
	// console.log('pop created');
	
	/* === inner closer ====  */
	if ( $.popCloserType === 'inner' ) {
		jsPopCloser.classList.add('pop-closer--inner');
		pop.appendChild(jsPopCloser)
		closerCounter = 1;
	}

	/* === outer closer ====  */
	if ( $.popCloserType === 'outer')  {
		jsPopCloser.classList.add('pop-closer--outer');
		pop.appendChild(jsPopCloser)
		closerCounter = 1;
	}
	
	/* === corner close button === */
	if (closerCounter == 0) {
		jsPopAlingner.appendChild(jsPopCloser);
		jsPopCloser.classList.add('pop-closer--corner');
	}
	// console.log('Closer created');
}

function popa($){
	// let opener = [...document.querySelectorAll(data.clickTrigger)];
	// let closer = [...document.querySelectorAll(data.popCloser)];
	let popaData = $;
	$.popWrap = $.pop + '-wrapper';

	createPopStructure(popaData);

	// let popWrap = document.querySelector( $.popWrap );
	let popWrap = document.querySelector( $.pop + '-wrapper' );
	let pop = document.querySelector( $.pop );

	if ($.clickTrigger == 'page-leaving') {
		document.addEventListener('mouseleave', function() {
			showPop(popWrap, pop);
		})
	} else {
		let opener = document.querySelector($.clickTrigger);
		opener.addEventListener("click", function() { popToggle(popWrap, pop, $.onOpen, $.onClose);
		});
	}

	let closer;
	if (closer == undefined) {
		closer = popWrap.querySelector('.pop-closer')
	} else {
		closer = popWrap.querySelector( $.popCloser );
	}

	// popaAddClasses(popWrap, pop)
	
	popWrap.removeAttribute('hidden');
	
	closer.addEventListener('click', function() {closePop(popWrap, pop, $.onClose)});

	// opener.map(mapped => mapped.addEventListener("click", () => popToggle(data.popWrap, data.pop)));
	// closer.map(mapped => mapped.addEventListener('click', () => closePop(data.popWrap, data.pop)));
}
