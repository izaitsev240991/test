function tabs(){
	//табы:
	let tab = document.getElementsByClassName('tab_link'),
	    tabContent = document.getElementsByClassName('tab_content'),
	    decorTab = document.getElementsByClassName('decor_tab'),
	    decorTabContent = document.getElementsByClassName('decor_tab_content');
	    

	function hideTabContent(a) {
	    for (let i = a; i < tabContent.length; i++) {
	        tabContent[i].classList.remove('tab_show');
	        tabContent[i].classList.add('tab_hide');
	    }
	}
	hideTabContent(1);


	function showTabContent(b) {
	    if (tabContent[b].classList.contains('tab_hide')) {
	        hideTabContent(0);
	        tabContent[b].classList.remove('tab_hide');
	        tabContent[b].classList.add('tab_show');
	    }
	}

	function removeActive() {
	    for (let i = 0; i < tab.length; i++) {
	        tab[i].classList.remove('active');
	    }
	}

	function addActive(e) {
	    e.classList.add('active');
	}

	for (let i = 0; i < tab.length; i++) {
	    tab[i].addEventListener("click", function() {
	        showTabContent(i);
	        removeActive();
	        addActive(this);
	    });
	}


	function hideDecContent(a) {
	    for (let i = a; i < decorTabContent.length; i++) {
	        decorTabContent[i].classList.remove('tab_show');
	        decorTabContent[i].classList.add('tab_hide');
	    }
	}
	hideDecContent(1);

	function showDecContent(b) {
	    if (decorTabContent[b].classList.contains('tab_hide')) {
	        hideDecContent(0);
	        decorTabContent[b].classList.remove('tab_hide');
	        decorTabContent[b].classList.add('tab_show');
	    }
	}

	function removeDecActive() {
	    for (let i = 0; i < decorTab.length; i++) {
	        decorTab[i].classList.remove('after_click');
	    }
	}

	function addDecActive(e) {
	    e.classList.add('after_click');
	}

	for (let i = 0; i < decorTab.length; i++) {
	    decorTab[i].addEventListener("click", function() {
	        showDecContent(i);
	        removeDecActive();
	        addDecActive(this);
	    });
	}

}
module.exports = tabs;