let money,
 		name,  
 		time = 19,
 		price = 100

function start(){
	 money = prompt("Ваш бюджет на месяц?");

	 while(isNaN(money) || money == "" || money == null){
	 	money = prompt("Ваш бюджет на месяц?");
	 }

	 name = prompt("Название вашего магазина").toUpperCase(); 
	 
	 
}
start();

let mainList = {
	budget : money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
}

function chooseGoods(){
		for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товаров будем продавать?");
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ){
				console.log('Всё верно');
				mainList.shopGoods[i] = a;
			} else  {
				alert('введите товары');
				i--;
			};
		}
}
chooseGoods();

function workTime(time){
		if(time < 0){
			console.log('Такого не может быть');
		} else if(time > 8 && time < 20){
				console.log('Рабочее время');
				} else if(time < 24) {
					console.log('Уже слишком поздно');
						} else{
							console.log('В сутках 24 часа');
							};
}
workTime(25);

function dayBudget(){
	alert("Ваш бюджет на 1 день: " + mainList.budget/30);

}
dayBudget();

function getDiscount(discount){
	
	if (discount == true) {
		 price *= .8;
		 console.log(price);
		} else{
			console.log(price);
			};
}
getDiscount(true);


function takeEmployers(){
	for (let i = 1; i < 5  ; i++) {
		let w = prompt("Введите имя сотрудника");
		if ((typeof(w)) === 'string' && (typeof(w)) != null && w != '' && w.length < 50) {
			mainList.employers[i] = w;
		} else{
			alert('корректно введите имя');
				i--;
			};
	}
}
takeEmployers();
console.log(mainList);



