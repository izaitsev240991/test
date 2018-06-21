(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

    let tab = require('../parts/tab.js');
    let modal = require('../parts/modal.js');
    let ajax = require('../parts/ajax.js');
    let slider = require('../parts/slider.js');
    let calc = require('../parts/calc.js');
    let timer = require('../parts/timer.js');

    tab();
    modal();
    ajax();
    slider();
    calc();
    timer();
});
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function ajax(){
	let message = new Object();
	message.loading = '╨Ч╨░╨│╤А╤Г╨╖╨║╨░...';
	message.success = '╨б╨┐╨░╤Б╨╕╨▒╨╛! ╨б╨║╨╛╤А╨╛ ╨╝╤Л ╤Б ╨▓╨░╨╝╨╕ ╤Б╨▓╤П╨╢╨╡╨╝╤Б╤П';
	message.failure = '╨з╤В╨╛-╤В╨╛ ╨┐╨╛╤И╨╗╨╛ ╨╜╨╡ ╤В╨░╨║';

	let form = document.getElementsByClassName('main-form')[0],
	    contactForm = document.getElementById('form'),
	    phoneInput = contactForm.getElementsByTagName('input')[0],
	    emailInput = contactForm.getElementsByTagName('input')[1],
	    input = form.getElementsByTagName('input'),
	    statusMessage = document.createElement('div');
	    statusMessage.classList.add('status');

	form.addEventListener('submit', function(event) {
	    event.preventDefault();
	    form.appendChild(statusMessage);

	//ajax
	let request = new XMLHttpRequest();
	request.open('POST', 'server.php')

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let formData = new FormData(form);

	request.send(formData);

	request.onreadystatechange = function() {
	     if (request.readyState < 4) {
	         statusMessage.innerHTML = message.loading;
	    } else if (request.readyState === 4) {
	        if (request.status == 200 && request.status < 300) {
	            statusMessage.innerHTML = message.success;
	        } else {
	            statusMessage.innerHTML = message.failure;
	        }
	    }
	}
	    for (let i = 0; i < input.length; i++) {
	        input[i].value = '';

	    }
	});

	contactForm.addEventListener('submit', function(event) {
	    event.preventDefault();
	    contactForm.appendChild(statusMessage);
	 //ajax
	  let request = new XMLHttpRequest();
	  request.open("POST", 'server.php')

	  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	  let formData = new FormData(contactForm);

	  request.send(formData);

	request.onreadystatechange = function(){
	        if (request.readyState < 4) {
	            statusMessage.innerHTML = message.loading;
	        } else if (request.readyState === 4) {
	            if (request.status == 200 && request.status < 300) {
	            statusMessage.innerHTML = message.success;
	        } else {
	            statusMessage.innerHTML = message.failure;
	        }
	    }
	}
	    for (let i = 0; i < input.length; i++) {
	    input[i].value = '';

	    }
	});
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc(){
	let persons = document.getElementsByClassName('counter-block-input')[0],
	    restDays = document.getElementsByClassName('counter-block-input')[1],
	    place = document.getElementById('select'),
	    totalValue = document.getElementById('total'),
	    personSum = 0,
	    daysSum = 0,
	    total = 0;

	totalValue.textContent = 0;

	persons.onkeyup = function(input) {
	    this.value = this.value.replace(/\D/g);
	}

	persons.addEventListener('change', function() {
	    personSum = +this.value;
	    total = (daysSum + personSum) * 4000;

	    if (persons.value == '' || restDays.value == '') {
	        totalValue.textContent = 0;
	    } else {
	        totalValue.textContent = total;
	    }
	});

	restDays.addEventListener('change', function() {
	    daysSum = +this.value;
	    total = (daysSum + personSum) * 4000;
	    if (restDays.value == '' || persons.value == '') {
	        totalValue.textContent = 0;
	    } else {
	        totalValue.textContent = total;
	    }
	});

	restDays.onkeyup = function(input) {
	    this.value = this.value.replace(/\D/g);
	}

	place.addEventListener('change', function() {
	    if (restDays.value == '' || persons.value == '') {
	        totalValue.textContent = 0;
	    } else {
	        let a = total;
	        totalValue.textContent = a * this.options[this.selectedIndex].value;
	    }
	});
}

module.exports = calc;
},{}],4:[function(require,module,exports){
function modal(){
	let more = document.querySelector('.more'),
	    moreTab = document.querySelectorAll('.description-btn'),
	    overlay = document.querySelector('.overlay'),
	    close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
	    this.classList.add('more-splash');
	    overlay.style.display = 'block';
	    document.body.style.overflow = 'hidden';
	});

	for (let i = 0; i < moreTab.length; i++) {

	    moreTab[i].addEventListener('click', function() {
	        this.classList.add('more-splash');
	        overlay.style.display = 'block';
	        document.body.style.overflow = 'hidden';
	    });
	}


	close.addEventListener('click', () => {
	    overlay.style.display = 'none';
	    more.classList.remove('more-splash');
	    document.body.style.overflow = '';
	});

}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider(){
	let slideIndex = 1,
	    slides = document.getElementsByClassName('slider-item'),
	    prev = document.querySelector('.prev'),
	    next = document.querySelector('.next'),
	    dotsWrap = document.querySelector('.slider-dots'),
	    dots = document.getElementsByClassName('dot');

	    showSlides(slideIndex);

	    function showSlides(n) {
	        if (n > slides.length){
	            slideIndex = 1;
	        };
	        if (n < 1){
	            slideIndex = slides.length;
	        };

	        for (let i = 0; i < slides.length; i++){
	            slides[i].style.display = 'none';
	        };

	        for (let i = 0; i < dots.length; i++){
	            dots[i].classList.remove('dot-active');
	        };

	        slides[slideIndex - 1].style.display = 'block';
	        dots[slideIndex - 1].classList.add('dot-active');
	    }

	    function plusSlides (n){
	        showSlides(slideIndex += n);
	    }

	    function currentSlide(n){
	        showSlides(slideIndex = n);
	    }

	    prev.addEventListener('click', function(){
	        plusSlides(-1);
	    });

	     next.addEventListener('click', function(){
	        plusSlides(1);
	    });

	    dotsWrap.addEventListener('click', function(event){
	            for (let i = 0; i < dots.length + 1; i++){
	                if(event.target.classList.contains('dot') && event.target == dots [i - 1]){
	                    currentSlide(i);
	                }
	            }
	    });
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab(){

	let tab = document.getElementsByClassName('info-header-tab'),
	    tabContent = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];

	let hideTabContent = (a) => {
	    for (let i = a; i < tabContent.length; i++) {
	        tabContent[i].classList.remove('show');
	        tabContent[i].classList.add('hide');
	    }
	}
	hideTabContent(1);

	let showTabContent = (b) => {

	    if (tabContent[b].classList.contains('hide')) {
	        hideTabContent(0);
	        tabContent[b].classList.remove('hide');
	        tabContent[b].classList.add('show');
	    }
	}

	info.addEventListener('click', (event) => {
	    let target = event.target;
	    
	    if (target.className == 'info-header-tab') {
	        for (let i = 0; i < tab.length; i++) {
	            if (target == tab[i]) {
	                showTabContent(i);
	                break;
	            }
	        }
	    };
	});

}

module.exports = tab;
},{}],7:[function(require,module,exports){
function timer(){
	let deadline = '2018-06-15';

	let getTimeRemaining = (endtime) => {
	    let t = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
	        seconds = Math.floor((t / 1000) % 60),
	        minutes = Math.floor((t / 1000 / 60) % 60),
	        hours = Math.floor((t / (1000 * 60 * 60)));

	    return {
	        'total': t,
	        'hours': hours,
	        'minutes': minutes,
	        'seconds': seconds
	    };
	};

	let setClock = (id, endtime) => {
	    let timer = document.getElementById(id),
	        hours = timer.querySelector('.hours'),
	        minutes = timer.querySelector('.minutes'),
	        seconds = timer.querySelector('.seconds');
	    if (hours < 1) {
	        hours = '0' + hours;
	    }

	    let updateClock = () => {
	        let t = getTimeRemaining(endtime);
	        hours.textContent = t.hours;
	        if (hours.textContent < 10) {
	            hours.textContent = '0' + hours.textContent;
	        }
	        minutes.textContent = t.minutes;
	        if (minutes.textContent < 10) {
	            minutes.textContent = '0' + minutes.textContent;
	        }
	        seconds.textContent = t.seconds;
	        if (seconds.textContent < 10) {
	            seconds.textContent = '0' + seconds.textContent;
	        }

	        let timeInterval = setInterval(updateClock, 1000);
	        if (t.total <= 0) {
	            clearInterval(timeInterval);
	            hours.textContent = '00';
	            minutes.textContent = '00';
	            seconds.textContent = '00';
	        }
	    };

	    updateClock();

	};

	setClock('timer', deadline)
}

module.exports = timer;
},{}]},{},[1]);
