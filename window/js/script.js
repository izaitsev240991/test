let headerBtn = document.querySelectorAll('.header_btn')[0],
    phoneBtn = document.querySelectorAll('.phone_link'),
    modalEngineer = document.querySelectorAll('.popup')[0],
    modalHeader = document.querySelectorAll('.popup_engineer')[0],
    closeModalEng = document.querySelectorAll('.popup_close')[0],
    closeModalHeader = document.querySelectorAll('.popup_close')[1],
 
   
    modalCalcProf = document.getElementsByClassName('popup_calc_profile')[0],
    closeBackground = document.getElementsByClassName('popup_dialog');


// модальное окно через 60с:
function timerModal() {
	modalEngineer.style.display = 'block';
}
setTimeout(timerModal, 60000);

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
// модальные окна:
headerBtn.addEventListener('click', function() {
    modalHeader.style.display = 'block';
});

closeModalHeader.addEventListener('click', function() {
    modalHeader.style.display = 'none';
});
// вызвать замерщика
for (let i = 0; i < closeBackground.length; i++) {
    closeBackground[i].addEventListener('click', function(e) {
        if (e.target != this) { return true; }
        modalHeader.style.display = 'none';
        modalEngineer.style.display = 'none';
    });
}
// закрытие при клике на подложку
for (let i = 0; i < phoneBtn.length; i++) {
    phoneBtn[i].addEventListener('click', function(e) {
        modalEngineer.style.display = 'block';
    });
}

closeModalEng.addEventListener('click', function() {
    modalEngineer.style.display = 'none';
});
// обратный звонок



// слайдер окон:
let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		bigSlide = document.getElementsByClassName('current-slide'),
		slideWrap = document.querySelector('.balcon_icons'),
		calcBtn = document.getElementsByClassName('popup_calc_btn'),
    modalCalc = document.getElementsByClassName('popup_calc')[0],
    closeModalCalc = document.getElementsByClassName('popup_calc_close'),
    forthBtn = document.getElementsByClassName('forth_button')[0],
		width = document.getElementById('width'),
		height = document.getElementById('height'),
		viewType = document.getElementById('view_type'),
		cold = document.getElementById('cold'),
		warm = document.getElementById('warm'),
		dannie = {
      width: width,
      height: height,
			type: viewType,
			
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


forthBtn.addEventListener('click',function(){
  modalCalc.style.display = 'none';
  modalCalcProf.style.display = 'block';
  dannie.width = width.value;
  dannie.height = height.value;
        console.log(dannie);
});

// рассчитать стоимость

//таймер:
StartCountDown("timer1", "07/05/2018 21:00");

function StartCountDown(myDiv, myTargetDate) {
    var dthen = new Date(myTargetDate);
    var dnow = new Date();
    ddiff = new Date(dthen - dnow);
    gsecs = Math.floor(ddiff.valueOf() / 1000);
    CountBack(myDiv, gsecs);
}

function Calcage(secs, num1, num2) {
    s = ((Math.floor(secs / num1)) % num2).toString();
    if (s.length < 2) {
        s = "0" + s;
    }
    return (s);
}

function CountBack(myDiv, secs) {
    var timeArr = [],
        holder;
    if (secs > 0) {
        timeArr.days = Calcage(secs, 86400, 100000).split('');
        timeArr.hours = Calcage(secs, 3600, 24).split('');
        timeArr.minutes = Calcage(secs, 60, 60).split('');
        timeArr.seconds = Calcage(secs, 1, 60).split('');

        Object.keys(timeArr).map(function (key) {
            holder = document.getElementById(key);
            for (var i = 0; i < holder.childNodes.length; ++i) {
                switch (holder.childNodes[i].className) {
                    case "left":
                        holder.childNodes[i].innerHTML = timeArr[key][0];
                        break;
                    case "right":
                        holder.childNodes[i].innerHTML = timeArr[key][1];
                        break;
                    default:
                        break;
                }
            }
        });
        setTimeout(function () {
            CountBack(myDiv, secs - 1);
        }, 990);
    } 
}

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

