let menu = document.querySelector('.menu '),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.querySelectorAll('.title'),
    prompt = document.querySelectorAll('.prompt'),
    column = document.querySelectorAll('.column'),
    blurb = document.querySelectorAll('.adv ')

menu.insertBefore(menuItem[1], menuItem[3]);
let li = document.createElement('li');
li.classList.add('menu-item');
menu.appendChild(li);
li.innerHTML = 'Пятый пункт';
//порядок и пункт меню 

document.body.style.backgroundImage = 'url(../archive/img/apple_true.jpg)';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';
//замена фона

let newTitle = document.createElement('div');
column[1].removeChild(title[0]);
column[1].appendChild(newTitle);
newTitle.classList.add('title');
newTitle.innerHTML = 'Мы продаем только подлинную технику Apple';
column[1].insertBefore(newTitle, prompt[0]);
//замена текста

column[1].removeChild(blurb[0]);
//убрать рекламу




