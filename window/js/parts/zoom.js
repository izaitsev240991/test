function zoom(){
	//увел при клике:
	let images = document.querySelectorAll('.zoom_img'),
			works = document.querySelector('.works'),
			modal = document.querySelector('.modal'),
			modalImg = document.querySelector('.modal > img'),
	    modalBg = document.createElement('div');

	modalBg.classList.add('zoom_overlay');

	images.forEach(function(item){
		item.addEventListener('click',function(e){
			e.preventDefault();
			let imgSrc = this.getAttribute('href');
			callImageModal(imgSrc);
		})
	})

	function callImageModal(src){
		modalImg.src = src;
		modal.style.display = 'block';
		works.appendChild(modalBg);

	}

	modalBg.addEventListener('click', function(){
	  modal.style.display = 'none';
	  works.removeChild(modalBg);
	});
}

module.exports = zoom;