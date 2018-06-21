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