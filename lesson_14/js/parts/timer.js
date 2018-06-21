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