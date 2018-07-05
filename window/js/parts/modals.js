function modals(){
	
let headerBtn = document.querySelectorAll('.header_btn')[0],
    phoneBtn = document.querySelectorAll('.phone_link'),
    modalEngineer = document.querySelectorAll('.popup')[0],
    modalHeader = document.querySelectorAll('.popup_engineer')[0],
    closeModalEng = document.querySelectorAll('.popup_close')[0],
    closeModalHeader = document.querySelectorAll('.popup_close')[1],
    closeBackground = document.getElementsByClassName('popup_dialog');


// модальное окно через 60с:
function timerModal() {
	modalEngineer.style.display = 'block';
}
setTimeout(timerModal, 60000);


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
	
}
module.exports = modals;