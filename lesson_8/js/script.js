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
let deadline = '2018-06-14';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date())-10800000,
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
        hours.innerHTML = t.hours;
        if (hours.innerHTML < 10) {
            hours.innerHTML = '0' + hours.innerHTML;
        }
        minutes.innerHTML = t.minutes;
         if (minutes.innerHTML < 10) {
            minutes.innerHTML = '0' + minutes.innerHTML;
        }
        seconds.innerHTML = t.seconds;
        if (seconds.innerHTML < 10) {
            seconds.innerHTML = '0' + seconds.innerHTML;
        }
       
        let timeInterval = setInterval(updateClock, 1000);
        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
        }
    };

    updateClock();
    
};

    setClock('timer', deadline)
