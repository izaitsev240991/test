window.addEventListener('DOMContentLoaded', function() {

    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0];

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {

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

function getTimeRemaining(endtime) {
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

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');
    if (hours < 1) {
        hours = '0' + hours;
    }

    function updateClock() {
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


close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});