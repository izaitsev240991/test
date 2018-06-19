window.addEventListener('DOMContentLoaded', function() {

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
});
//timer
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

//Modal
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

//form
let message = new Object();
message.loading = 'Загрузка...';
message.success = 'Спасибо! Скоро мы с вами свяжемся';
message.failure = 'Что-то пошло не так';

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