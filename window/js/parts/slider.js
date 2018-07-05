function slider(){
	// слайдер окон:
	let slideIndex = 1,
			slides = document.getElementsByClassName('slider-item'),
			bigSlide = document.getElementsByClassName('current-slide'),
			slideWrap = document.querySelector('.balcon_icons'),
			calcBtn = document.getElementsByClassName('popup_calc_btn'),
	    modalCalc = document.getElementsByClassName('popup_calc')[0],
	    closeModalCalc = document.getElementsByClassName('popup_calc_close'),
	    closeCalcEnd = document.getElementsByClassName('popup_calc_end_close')[0],
	    forthBtn = document.getElementsByClassName('forth_button')[0],
	    forthSecBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
	    forthEndBtn = document.getElementsByClassName('popup_calc_profile_button')[1],
			width = document.getElementById('width'),
			height = document.getElementById('height'),
			viewType = document.getElementById('view_type'),
			cold = document.getElementsByClassName('checkbox')[0],
			warm = document.getElementsByClassName('checkbox')[1],
			modalCalcProf = document.getElementsByClassName('popup_calc_profile')[0],
			modalCalcLast = document.getElementsByClassName('popup_calc_end')[0],
			dataObj = {
	      width: width,
	      height: height,
				type: viewType,
				warm: false,
				cold: false,
			}

	width.addEventListener('keyup', function() {
	        width.value =width.value.replace(/[^\d]/g, '');
	    });

	height.addEventListener('keyup', function() {
	        height.value = height.value.replace(/[^\d]/g, '');
	    });

	showSlides(slideIndex);

	function showSlides(n) {
	    for (let i = 0; i < bigSlide.length; i++) {
	        bigSlide[i].style.display = 'none';
	    }
	    for (let i = 0; i < slides.length; i++) {
	        slides[i].classList.remove('slide-active');
	    }
	    slides[slideIndex - 1].classList.add('slide-active');
	    bigSlide[slideIndex - 1].style.display = 'inline-block';
	}

	function currentSlide(n) {
	    showSlides(slideIndex = n);
	}

	slideWrap.addEventListener('click', function(event) {
	    event.preventDefault();
	    for (let i = 0; i < slides.length + 1; i++) {
	        if (event.target.classList.contains('slider-item') && event.target == slides[i - 1]) {
	            currentSlide(i);
	        }
	    }
	});



	for (let i = 0; i < calcBtn.length; i++) {
	    calcBtn[i].addEventListener('click', function() {
	        modalCalc.style.display = 'block';
	    });
	}

	for (let i=0; i < closeModalCalc.length; i++){
		closeModalCalc[i].addEventListener('click', function() {
	    modalCalc.style.display = 'none';
	    modalCalcProf.style.display = 'none';
		});
	}

	closeCalcEnd.addEventListener('click',function(){
	  modalCalcLast.style.display = 'none';
	});

	forthBtn.addEventListener('click',function(){
	  modalCalc.style.display = 'none';
	  modalCalcProf.style.display = 'block';
	  dataObj.width = width.value;
	  dataObj.height = height.value;
	});

	forthSecBtn.addEventListener('click', function(){
	 modalCalcProf.style.display = 'none';
	 modalCalcLast.style.display = 'block';
	 dataObj.type = viewType.value;
	 if(warm.checked){
	 	dataObj.warm = true;
	 }else if (cold.checked){
	 	dataObj.cold = true;
	 }
	});
}

module.exports = slider;