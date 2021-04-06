//TODO:
// logErrors: parametr
function showPop($popWrap, $pop) {
	$popWrap.classList.add('pop-wrap--opened')
	$pop.classList.add('pop--opened');
	document.querySelector('html').classList.add('pop-opened--html')
}

function closePop($popWrap, $pop) {
	$popWrap.classList.remove('pop-wrap--opened')
	$pop.classList.remove('pop--opened');
	document.querySelector('html').classList.remove('pop-opened--html')
}

function popToggle($popWrap, $pop){
	let popWrap = $popWrap,
		isPopHidden = window.getComputedStyle(popWrap).getPropertyValue('visibility') == 'hidden',
		pop = $pop;
	isPopHidden
		? showPop(popWrap, pop)
		: closePop(popWrap, pop)

	// let form_status = opener.getAttribute('data-form-name');
	// if (form_status != null){
	//   let form_name_val = popWrap.querySelector('form input[name="arit_formname"]').getAttribute('value');
	//   popWrap.querySelector('form input[name="arit_formname"]').value = `form_name_val ${form_status}`
	// }


	// console.log($popWrap, $pop, 'toggled')
}


function popaAddClasses($popWrap, $pop) {
	if ($popWrap != null || $popWrap != undefined) {
		(!$popWrap.classList.contains('pop-wrap')) ? $popWrap.classList.add('pop-wrap') : false ;
	}
	if ($pop != null || $pop != undefined) {
		(!$pop.classList.contains('pop')) ? $pop.classList.add('pop') : false ;
	}
		
}

function createPopWrapper($) {
	let jsPopWrapper = document.createElement('div');
	jsPopWrapper;
	jsPopWrapper.classList.add($.popWrap.replace('.', ''));
	jsPopWrapper.classList.add('pop-wrap');
	document.querySelector('body').appendChild(jsPopWrapper);
	// console.log('Wrapper created');

	let jsPopAlingner = document.createElement('div');
	jsPopAlingner;
	jsPopAlingner.classList.add('pop-aligner');
	jsPopWrapper.appendChild(jsPopAlingner);
	// console.log('Alginer created');

	let jsPopCloser = document.createElement('button');
	jsPopCloser;
	jsPopCloser.innerText = '×';
	jsPopAlingner.appendChild(jsPopCloser);
	jsPopCloser.classList.add($.popCloser.replace('.', ''));
	// console.log('Closer created');

	let pop = document.querySelector($.pop)
	jsPopAlingner.appendChild(pop);
	// console.log('Now pop inside aligner');
	pop.classList.add('pop');
	// console.log('pop created');
}

function popa($){
	// let opener = [...document.querySelectorAll(data.clickTrigger)];
	// let closer = [...document.querySelectorAll(data.popCloser)];
	let popaData = $;
	createPopWrapper(popaData);

	let popWrap = document.querySelector( $.popWrap );
	let pop = document.querySelector( $.pop );
	let opener = document.querySelector($.clickTrigger);
	let closer = popWrap.querySelector( $.popCloser );

	// popaAddClasses(popWrap, pop)
	
	popWrap.removeAttribute('hidden');
	
	opener.addEventListener("click", function() {popToggle(popWrap, pop)});
	closer.addEventListener('click', function() {closePop(popWrap, pop)});

	// opener.map(mapped => mapped.addEventListener("click", () => popToggle(data.popWrap, data.pop)));
	// closer.map(mapped => mapped.addEventListener('click', () => closePop(data.popWrap, data.pop)));
}
