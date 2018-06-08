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
    discountYes = mainInfo.querySelectorAll('.discount-value_yes')[0],
    discountNo = mainInfo.querySelectorAll('.discount-value_no')[0],
    isOpen = mainInfo.getElementsByClassName('isopen')[0],
    isOpenValue = mainInfo.getElementsByClassName('isopen-value')[0],
    goodItem = mainFunctions.getElementsByClassName('goods-item'),
    btn = mainFunctions.getElementsByTagName('button'),
    chooseItem = mainFunctions.querySelector('.choose-item'),
    timeValue = mainFunctions.querySelector('.time-value'),
    countBudgetValue = mainFunctions.querySelector('.count-budget-value'),
    hireEmployersItem = mainFunctions.querySelectorAll('.hire-employers-item')
    
let money;

open.addEventListener('click', () => {
    do {
        money = prompt("Ваш бюджет на месяц?", "");
    }
    while (isNaN(money) || money == "" || money == null);
    budgetValue.textContent = money;
    nameValue.textContent = prompt("Название вашего магазина", "").toUpperCase();
});

btn[0].addEventListener('click', () => {
    for (let i = 0; i < goodItem.length; i++) {
        let a = goodItem[i].value;
        if ((typeof(a)) === 'string' && (typeof(a)) != null  && a.length < 50) {
            console.log('Всё верно');
            mainList.shopGoods[i] = a;
            goodsValue.textContent = mainList.shopGoods;
        } else {
            i = i - 1;
        };
    }
});

discountYes.addEventListener('click', () =>{

    discountYes.style.display = 'none';
    discountNo.style.display = 'none';
    discountValue.style.display = 'block';
    discountValue.style.padding = '10px';
    discountValue.style.textAlign = 'left';
    discountValue.style.backgroundColor = 'green';
    discountValue.textContent = 'ваш бюджет по скидке : ' + (money *= .8);
});
discountNo.addEventListener('click', () =>{
    discountYes.style.display = 'none';
    discountNo.style.display = 'none';
    discountValue.style.backgroundColor = 'red';
    discountValue.style.padding = '10px';
    discountValue.style.textAlign = 'left'
    discountValue.textContent = 'Дисконтная система отключена';
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
    } else if (time > 8 && time < 20) {
        console.log('Рабочее время');
        mainList.open = true;
    } else if (time < 24) {
        console.log('Уже слишком поздно');
        mainList.open = false;
    } else {
        console.log('В сутках 24 часа');
        mainList.open = false;
    };

    if( mainList.open == true){
        isOpenValue.style.backgroundColor = 'green'
    } else{
        isOpenValue.style.backgroundColor = 'red'
    };

});

btn[1].addEventListener('click', () =>{
    countBudgetValue.value = money / 30;

});

btn[2].addEventListener('click', () =>{
    for (let i = 0; i < hireEmployersItem.length; i++) {
        let name = hireEmployersItem[i].value;
        mainList.employers[i] = name;

        employersValue.textContent += mainList.employers[i] + ', ';
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
    
    getDiscount: function getDiscount(discount) {

        if (discount == true) {
            price *= .8;
            console.log(price);
        } else {
            console.log(price);
        };
    },
   
   
}


console.log(mainList);



