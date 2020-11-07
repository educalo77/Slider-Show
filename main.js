const carouselContainer = document.querySelector('.carousel-container');
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const options = document.querySelectorAll('.option');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const vow = document.querySelector('.vow');
const skill = document.querySelector('.skill');
const conviction = document.querySelector('.conviction');
const work = document.querySelector('.work');
const master = document.querySelector('.master');
const wisdom = document.querySelector('.wisdom');
const perfection = document.querySelector('.perfection');
const pride = document.querySelector('.pride');
const results = document.querySelector('.results');
const monk = document.querySelector('.monk');
const monkStart = document.querySelector('.monkStart');
const patience = document.querySelector('.patience');
const innerSteps = document.querySelector('#innersteps');
const temple = document.querySelector('.temple');

const docuwidth = window.document.documentElement.clientWidth;


scaleIn(monkStart);
scaleIn(patience);

carouselContainer.style.visibility = 'hidden';

setTimeout(function () {
	fade(monkStart);
	fade(patience);
	fadeIn(innerSteps)
	fadeIn(carouselContainer);
	fadeIn(vow);
}, 2500)

const size = carouselImages[0].clientWidth;
const wscreen = window.screen.width;

const slide1 = document.querySelector('#radio1');
const slide2 = document.querySelector('#radio2');
const slide3 = document.querySelector('#radio3');
const slide4 = document.querySelector('#radio4');
const slide5 = document.querySelector('#radio5');
const slide6 = document.querySelector('#radio6');
const slide7 = document.querySelector('#radio7');
const slide8 = document.querySelector('#radio8');
const slide9 = document.querySelector('#radio9');

var counter = 0;

options[counter].classList.add('colored');

var x1 = 49;
var x2 = 90;
var x3 = 153;
var x4 = 215;
var x5 = 278;
var x6 = 339;
var x7 = 420;
var x8 = 500;

skill.style.visibility = 'hidden';
conviction.style.visibility = 'hidden';
work.style.visibility = 'hidden';
master.style.visibility = 'hidden';
wisdom.style.visibility = 'hidden';
perfection.style.visibility = 'hidden';
pride.style.visibility = 'hidden';
results.style.visibility = 'hidden';
monk.style.visibility = 'visible';
innerSteps.style.visibility = 'hidden';

carouselSlide.style.transform = 'translateX('(0) + 'px)';

nextBtn.addEventListener('click', forward());
prevBtn.addEventListener('click', backward());

function rmvBtn() {
	if (counter === 0) {
		prevBtn.style.visibility = 'hidden';
	}
}
rmvBtn()

slide1.addEventListener('click', first());

function first() {
	carouselSlide.style.transition = "transform 1s ease-in-out";
	carouselSlide.style.transform = 'translateX(' + (0) + '%)';
	counter = 0
	colorBtn(counter);
	prevBtn.style.visibility = 'hidden';
	nextBtn.style.visibility = 'visible';
	fadeIn(vow);
	temple.style.visibility = 'visible';
	skill.style.visibility = 'hidden';
	conviction.style.visibility = 'hidden';
	work.style.visibility = 'hidden';
	master.style.visibility = 'hidden';
	wisdom.style.visibility = 'hidden';
	perfection.style.visibility = 'hidden';
	pride.style.visibility = 'hidden';
	results.style.visibility = 'hidden';
	ninesteps(counter);
}
slide2.addEventListener('click', second());

function second() {
	carouselSlide.style.transition = "transform 1s ease-in-out";
	carouselSlide.style.transform = 'translateX(' + (-x1) + '%)';
	document.getElementById('radio2').checked = true;
	counter = 1
	colorBtn(counter);
	prevBtn.style.visibility = 'visible';
	nextBtn.style.visibility = 'visible';
	fade(vow);
	fadeIn(skill);
	temple.style.visibility = 'hidden';
	conviction.style.visibility = 'hidden';
	work.style.visibility = 'hidden';
	master.style.visibility = 'hidden';
	wisdom.style.visibility = 'hidden';
	perfection.style.visibility = 'hidden';
	pride.style.visibility = 'hidden';
	results.style.visibility = 'hidden';
	ninesteps(counter);

}
slide3.addEventListener('click', third());

function third() {
	carouselSlide.style.transition = "transform 1s ease-in-out";
	carouselSlide.style.transform = 'translateX(' + (-x2) + '%)';
	counter = 2
	colorBtn(counter);
	nextBtn.style.visibility = 'visible';
	prevBtn.style.visibility = 'visible';
	vow.style.visibility = 'hidden';
	temple.style.visibility = 'hidden';
	fade(skill);
	fadeIn(conviction);
	work.style.visibility = 'hidden';
	master.style.visibility = 'hidden';
	wisdom.style.visibility = 'hidden';
	perfection.style.visibility = 'hidden';
	pride.style.visibility = 'hidden';
	results.style.visibility = 'hidden';
	ninesteps(counter);

}
slide4.addEventListener('click', forth());

function forth() {
	carouselSlide.style.transition = "transform 1s ease-in-out";
	carouselSlide.style.transform = 'translateX(' + (-x3) + '%)';
	counter = 3
	colorBtn(counter);
	nextBtn.style.visibility = 'visible';
	prevBtn.style.visibility = 'visible';
	vow.style.visibility = 'hidden';
	temple.style.visibility = 'hidden';
	skill.style.visibility = 'hidden';
	fade(conviction);
	fadeIn(work);
	master.style.visibility = 'hidden';
	wisdom.style.visibility = 'hidden';
	perfection.style.visibility = 'hidden';
	pride.style.visibility = 'hidden';
	results.style.visibility = 'hidden';
	ninesteps(counter);

}
slide5.addEventListener('click', fifth());

function fifth() {
	carouselSlide.style.transition = "transform 1s ease-in-out";
	carouselSlide.style.transform = 'translateX(' + (-x4) + '%)';
	counter = 4
	colorBtn(counter);
	nextBtn.style.visibility = 'visible';
	prevBtn.style.visibility = 'visible';
	vow.style.visibility = 'hidden';
	temple.style.visibility = 'hidden';
	skill.style.visibility = 'hidden';
	conviction.style.visibility = 'hidden';
	fade(work);
	fadeIn(master);
	wisdom.style.visibility = 'hidden';
	perfection.style.visibility = 'hidden';
	pride.style.visibility = 'hidden';
	results.style.visibility = 'hidden';
	ninesteps(counter);
}
slide6.addEventListener('click', sixth());

function sixth() {
	carouselSlide.style.transition = "transform 1s ease-in-out";
	carouselSlide.style.transform = 'translateX(' + (-x5) + '%)';
	counter = 5
	colorBtn(counter);
	nextBtn.style.visibility = 'visible';
	prevBtn.style.visibility = 'visible';
	vow.style.visibility = 'hidden';
	temple.style.visibility = 'hidden';
	skill.style.visibility = 'hidden';
	conviction.style.visibility = 'hidden';
	work.style.visibility = 'hidden';
	fade(master);
	fadeIn(wisdom);
	perfection.style.visibility = 'hidden';
	pride.style.visibility = 'hidden';
	results.style.visibility = 'hidden';
	ninesteps(counter);

}
slide7.addEventListener('click', seventh());

function seventh() {
	carouselSlide.style.transition = "transform 1s ease-in-out";
	carouselSlide.style.transform = 'translateX(' + (-x6) + '%)';
	counter = 6
	colorBtn(counter);
	nextBtn.style.visibility = 'visible';
	prevBtn.style.visibility = 'visible';
	vow.style.visibility = 'hidden';
	temple.style.visibility = 'hidden';
	skill.style.visibility = 'hidden';
	conviction.style.visibility = 'hidden';
	work.style.visibility = 'hidden';
	master.style.visibility = 'hidden';
	fade(wisdom);
	fadeIn(perfection);
	pride.style.visibility = 'hidden';
	results.style.visibility = 'hidden';
	ninesteps(counter);
}
slide8.addEventListener('click', eigth());

function eighth() {
	carouselSlide.style.transition = "transform 1s ease-in-out";
	carouselSlide.style.transform = 'translateX(' + (-x7) + '%)';
	counter = 7
	colorBtn(counter);
	nextBtn.style.visibility = 'visible';
	prevBtn.style.visibility = 'visible';
	vow.style.visibility = 'hidden';
	temple.style.visibility = 'hidden';
	skill.style.visibility = 'hidden';
	conviction.style.visibility = 'hidden';
	work.style.visibility = 'hidden';
	master.style.visibility = 'hidden';
	wisdom.style.visibility = 'hidden';
	fade(perfection);
	fadeIn(pride);
	setTimeout(function () {
		fade(pride);
		fadeIn(results)
	}, 3000);
	ninesteps(counter);
}
slide9.addEventListener('click', nineth());

function nineth() {
	carouselSlide.style.transition = "transform 1s ease-in-out";
	carouselSlide.style.transform = 'translateX(' + (-x8) + '%)';
	counter = 8
	colorBtn(counter);
	nextBtn.style.visibility = 'hidden';
	prevBtn.style.visibility = 'visible';
	vow.style.visibility = 'hidden';
	temple.style.visibility = 'hidden';
	skill.style.visibility = 'hidden';
	conviction.style.visibility = 'hidden';
	work.style.visibility = 'hidden';
	master.style.visibility = 'hidden';
	wisdom.style.visibility = 'hidden';
	perfection.style.visibility = 'hidden';
	pride.style.visibility = 'hidden';
	fade(results);
	ninesteps(counter);
}

function forward() {
	counter++;
	carouselSlide.style.transition = "transform 1s ease-in-out"
	if (counter === 1) {
		carouselSlide.style.transform = 'translateX(' + (-x1) + '%)';
		colorBtn(counter);
		prevBtn.style.visibility = 'visible';
		fade(vow);
		fadeIn(skill);
		temple.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);

	}
	if (counter === 2) {
		carouselSlide.style.transform = 'translateX(' + (-x2) + '%)';
		colorBtn(counter);
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		fade(skill);
		fadeIn(conviction);
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);

	}
	if (counter === 3) {
		carouselSlide.style.transform = 'translateX(' + (-x3) + '%)';
		colorBtn(counter);
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		fade(conviction),
			fadeIn(work);
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);

	}
	if (counter === 4) {
		carouselSlide.style.transform = 'translateX(' + (-x4) + '%)';
		colorBtn(counter);
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		fade(work);
		fadeIn(master);
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);

	}
	if (counter === 5) {
		carouselSlide.style.transform = 'translateX(' + (-x5) + '%)';
		colorBtn(counter);
		vow.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		fade(master);
		fadeIn(wisdom);
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);
	}
	if (counter === 6) {
		carouselSlide.style.transform = 'translateX(' + (-x6) + '%)';
		colorBtn(counter);
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		fade(wisdom);
		fadeIn(perfection);
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);
	}
	if (counter === 7) {
		carouselSlide.style.transform = 'translateX(' + (-x7) + '%)';
		colorBtn(counter);
		nextBtn.style.visibility = 'visible';
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		fade(perfection);
		fadeIn(pride)
		setTimeout(function () {
			fade(pride);
			results.style.visibility = 'visible';
		}, 1000);
		ninesteps(counter);
	}
	if (counter === 8) {
		carouselSlide.style.transform = 'translateX(' + (-x8) + '%)';
		colorBtn(counter);
		nextBtn.style.visibility = 'hidden';
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);
	}

}

function backward() {
	carouselSlide.style.transition = "transform 1s ease-in-out"
	counter--;
	if (counter === 0) {
		carouselSlide.style.transform = 'translateX(' + (0) + 'px)';
		colorBtn(counter);
		rmvBtn()
		fadeIn(vow);
		temple.style.visibility = 'visible';
		skill.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);

	}
	if (counter === 1) {
		carouselSlide.style.transform = 'translateX(' + (-x1) + '%)';
		colorBtn(counter);
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		fadeIn(skill);
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);

	}
	if (counter === 2) {
		carouselSlide.style.transform = 'translateX(' + (-x2) + '%)';
		colorBtn(counter);
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		fadeIn(conviction);
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);
	}
	if (counter === 3) {
		carouselSlide.style.transform = 'translateX(' + (-x3) + '%)';
		colorBtn(counter);
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		fadeIn(work);
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);
	}
	if (counter === 4) {
		carouselSlide.style.transform = 'translateX(' + (-x4) + '%)';
		colorBtn(counter);
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		fadeIn(master);
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);
	}
	if (counter === 5) {
		carouselSlide.style.transform = 'translateX(' + (-x5) + '%)';
		colorBtn(counter);
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		fadeIn(wisdom);
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);
	}
	if (counter === 6) {
		carouselSlide.style.transform = 'translateX(' + (-x6) + '%)';
		colorBtn(counter);
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		fadeIn(perfection);
		fade(pride);
		fade(results);
		ninesteps(counter);
	}
	if (counter === 7) {
		carouselSlide.style.transform = 'translateX(' + (-x7) + '%)';
		colorBtn(counter);
		nextBtn.style.visibility = 'visible';
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		fadeIn(pride);
		setTimeout(function () {
			fade(pride)
			fadeIn(results)
		}, 1000);
		ninesteps(counter);
	}
	if (counter === 8) {
		carouselSlide.style.transform = 'translateX(' + (-x8) + '%)';
		colorBtn(counter);
		nextBtn.style.visibility = 'visible';
		vow.style.visibility = 'hidden';
		temple.style.visibility = 'hidden';
		skill.style.visibility = 'hidden';
		conviction.style.visibility = 'hidden';
		work.style.visibility = 'hidden';
		master.style.visibility = 'hidden';
		wisdom.style.visibility = 'hidden';
		perfection.style.visibility = 'hidden';
		pride.style.visibility = 'hidden';
		results.style.visibility = 'hidden';
		ninesteps(counter);
	}
}

function colorBtn(counter) {
	options.forEach(option => option.classList.remove('colored'));
	options[counter].classList.add('colored');
}

function fade(element) {
	var op = 1; // initial opacity
	var timer = setInterval(function () {
		if (op <= 0.1) {
			clearInterval(timer);
			element.style.visibility = 'hidden';
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op -= op * 0.1;
	}, 30);
}

function fadeIn(element) {
	var op = 0.1; // initial opacity
	var timer = setInterval(function () {
		element.style.visibility = 'visible';

		if (op >= 1) {
			clearInterval(timer);
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += op * 0.1;
	}, 30);
}

function scaleIn(element) {
	var sc = 0.1;
	var timer = setInterval(function () {
		element.style.visibility = 'visible';
		element.style.transform = 'scale(0.1,0.1)';
		if (sc >= 1) {
			clearInterval(timer);
		}
		element.style.transform = 'scale(' + sc + ')';
		sc += sc * 0.1;
	}, 60);
}

function ninesteps(counter) {
	if (counter >= 0) {
		innerSteps.innerHTML = 'Step' + ' ' + (counter + 1) + ' ' + 'of 9 on the path to digital entertainment'
	}
}
ninesteps(counter);