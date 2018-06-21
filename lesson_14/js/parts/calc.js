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