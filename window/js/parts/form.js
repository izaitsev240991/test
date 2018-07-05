function form(){
	//форма:
	let message = new Object();
	message.loading = 'загрузка...';
	message.success = 'Спасибо,мы свяжимся с вами в ближайшее время';
	message.failure = 'Что-то пошло не так';

	let form = document.getElementsByClassName('main_form'),
	    input = document.getElementsByClassName('form_input'),
	    statusMessage = document.createElement('div'),
	    phoneInput = document.getElementsByName('user_phone');


	for (let i = 0; i < phoneInput.length; i++) {
	    phoneInput[i].addEventListener('keyup', function() {
	        phoneInput[i].value = phoneInput[i].value.replace(/[^\d]/g, '');
	    });
	}

	for (let i = 0; i < form.length; i++) {
	    form[i].addEventListener('submit', function(event) {
	        event.preventDefault();
	        form[i].appendChild(statusMessage);

	        //ajax:

	        let request =  new XMLHttpRequest();
	        request.open("POST",'../server.php')

	        request.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");

	        let formData = new FormData(form[i]);

	        request.send(formData);

	        request.onreadystatechange = function(){
	        	if(request.readyState < 4){
	        			statusMessage.innerHTML = message.loading;
	        	} else if(request.readyState===4){
	        		if(request.status == 200 && request.status <300){
	        			statusMessage.innerHTML = message.success;
	        		}
	        		else{
	        			statusMessage.innerHTML = message.failure;
	        		}
	        	}
	        };
	        for(let i=0; i<input.length;i++){
	        	input[i].value='';
	        }
	    });
	}
}

module.exports = form;