let money,
 		name,  
 		time = 19,
 		price = 100, 
 		items

function start(){
	 money = prompt("Ваш бюджет на месяц?", "");

	 while(isNaN(money) || money == "" || money == null){
	 	money = prompt("Ваш бюджет на месяц?", "");
	 }

	 name = prompt("Название вашего магазина", "").toUpperCase(); 
	 
	 
}
// start();

let mainList = {
	budget : money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods(){
		for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товаров будем продавать?", "");
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ){
				console.log('Всё верно');
				mainList.shopGoods[i] = a;
			} else  {
				alert('введите товары');
				i--;
			};
		}
	},
	workTime: function workTime(time){
		if(time < 0){
			console.log('Такого не может быть');
		} else if(time > 8 && time < 20){
				console.log('Рабочее время');
				mainList.open = true;
				} else if(time < 24) {
					console.log('Уже слишком поздно');
						} else{
							console.log('В сутках 24 часа');
							};
	},
	dayBudget: function dayBudget(){
	alert("Ваш бюджет на 1 день: " + mainList.budget/30);

	},
	getDiscount: function getDiscount(discount){
	
	if (discount == true) {
		 price *= .8;
		 console.log(price);
		} else{
			console.log(price);
			};
  },
  takeEmployers: function takeEmployers(){
	for (let i = 1; i < 5  ; i++) {
		let w = prompt("Введите имя сотрудника", "");
		if ((typeof(w)) === 'string' && (typeof(w)) != null && w != '' && w.length < 50) {
			mainList.employers[i] = w;
		} else{
			alert('корректно введите имя');
				i--;
			};
	}
	},
	chooseShopItems: function chooseShopItems (){
		for (let i = 1; i < 2; i++){
  	let items = prompt("Перечислите через запятую ваши товары", "");

  		if((typeof(items)) === 'string'  && (typeof(items)) != null && items != ''){
  			mainList.shopItems = items.split(",");
  			mainList.shopItems.push(prompt("Подождите ещё", ""));
				mainList.shopItems.sort();
				mainList.shopItems.forEach(function(item, i, shopItems){
					alert( "У нас вы можете купить: " + ++i + ") " + item);
				})
				for(let key in mainList.shopItems){
					console.log("Наш магазин включает в себя: " + key + ") " + mainList.shopItems[key])
				}
  		} else{
  				let items = prompt("Перечислите через запятую ваши товары", "");
  				i--;
  			};
		}

	}
}

mainList.chooseShopItems();
console.log(mainList);
