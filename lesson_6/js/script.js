let open = document.getElementById('open-btn'),
    main = document.querySelectorAll('.main')[0],
    mainInfo = document.getElementsByClassName('main-info')[0],
    mainFunctions = document.getElementsByClassName('main-functions')[0],
    name = mainInfo.getElementsByClassName('name')[0],
    nameValue = mainInfo.getElementsByClassName('name-value')[0],
    budget = mainInfo.getElementsByClassName('budget')[0],
    budgetValue = mainInfo.getElementsByClassName('budget-value')[0],
    goods = mainInfo.getElementsByClassName('goods')[0],
    goodsValue = mainInfo.getElementsByClassName('goods-value')[0],
    items = mainInfo.getElementsByClassName('items')[0],
    itemsValue = mainInfo.getElementsByClassName('items-value')[0],
    employers = mainInfo.getElementsByClassName('employers')[0],
    employersValue = mainInfo.getElementsByClassName('employers-value')[0],
    discount = mainInfo.getElementsByClassName('discount')[0],
    discountValue = mainInfo.getElementsByClassName('discount-value')[0],
    discountBtn = mainInfo.getElementsByTagName('button')[0],
    isOpen = mainInfo.getElementsByClassName('isopen')[0],
    isOpenValue = mainInfo.getElementsByClassName('isopen-value')[0],
    goodItem = mainFunctions.getElementsByClassName('goods-item'),
    goodItemBtn = mainFunctions.getElementsByTagName('button')[0],
    countBudgetBtn = mainFunctions.getElementsByTagName('button')[1],
    hireEmployersBtn = mainFunctions.getElementsByTagName('button')[2],
    chooseItem = mainFunctions.querySelector('.choose-item'),
    timeValue = mainFunctions.querySelector('.time-value'),
    countBudgetValue = mainFunctions.querySelector('.count-budget-value'),
    hireEmployersItem = mainFunctions.querySelectorAll('.hire-employers-item')
    
let money,
    price;

open.addEventListener('click', () => {
    do {
        money = prompt("Ваш бюджет на месяц?", "");
    }
    while (isNaN(money) || money == "" || money == null);
    budgetValue.value = money;
    nameValue.textContent = prompt("Название вашего магазина", "").toUpperCase();
    mainList.open = true;
    btnBlock();
});

goodItemBtn.addEventListener('click', () => {
    for (let i = 0; i < goodItem.length; i++) {
        let a = goodItem[i].value;
        if ((typeof(a)) === 'string' && (typeof(a)) != null  && a.length < 50 ) {
            console.log('Всё верно');
            mainList.shopGoods[i] = a;
            goodsValue.textContent = mainList.shopGoods;

        } else {  
            i = i - 1;
        };
    }
    btnBlock();
});



chooseItem.addEventListener('change', () => {
    let items = chooseItem.value;
    if (isNaN(items) && items != '' );{   
        mainList.shopItems = items.split(",");
        mainList.shopItems.sort();
        itemsValue.textContent = mainList.shopItems;
    }
});

timeValue.addEventListener('change', () =>{
    let time = timeValue.value;

    if (time < 0) {
        console.log('Такого не может быть');
         mainList.open = false;
         btnBlock();
    } else if (time > 8 && time < 20) {
        console.log('Рабочее время');
        mainList.open = true;
        btnBlock();
        
    } else if (time < 24) {
        console.log('Уже слишком поздно');
        mainList.open = false;
        btnBlock();
    } else {
        console.log('В сутках 24 часа');
        mainList.open = false;
        btnBlock();
    };

    if( mainList.open == true){
        isOpenValue.style.backgroundColor = 'green'
    } else{
        isOpenValue.style.backgroundColor = 'red'
    };

});

countBudgetBtn.addEventListener('click', () =>{
    countBudgetValue.value = money / 30;

});

countBudgetValue.setAttribute('disabled', '');

hireEmployersBtn.addEventListener('click', () =>{
    for (let i = 0; i < hireEmployersItem.length; i++) {
        let name = hireEmployersItem[i].value;
        mainList.employers[i] = name;

        employersValue.textContent += mainList.employers[i] + ', ';
    }
});
 discountBtn.addEventListener('click', () =>{
   price = budgetValue.value;
   if (mainList.discount) {
    mainList.discount = false;
    discountBtn.textContent = "Вкл скидку";
    discount.style.backgroundColor = 'red';
    discountValue.textContent = price;
   
   } else{
    mainList.discount = true;
    discountBtn.textContent = "Выкл скидку";
    discount.style.backgroundColor = 'green';
    discountValue.textContent = price *= .8;
   }
  
 });




let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    
}
function btnBlock(){
    if (mainList.open === false ){
        goodItemBtn.setAttribute('disabled', '');
        countBudgetBtn.setAttribute('disabled', '');
        hireEmployersBtn.setAttribute('disabled', '');
    }else{
        goodItemBtn.removeAttribute('disabled', '');
        countBudgetBtn.removeAttribute('disabled', '');
        hireEmployersBtn.removeAttribute('disabled', '');
    }
   
}
btnBlock();
console.log(mainList);



