let money = prompt("Ваш бюджет на месяц?", "");
let name = prompt("Название вашего магазина", ""); 
let time = 19;
let mainList = {
	budget : money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

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

// let i = 0;
// while (i < 5){
// 	let a = prompt("Какой тип товаров будем продавать?");
// 		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ){
// 			console.log('Всё верно');
// 			mainList.shopGoods[i] = a;
// 		} else  {
// 			alert('введите товары');
// 			i--;
// 		};
// 	i++;
// }

// let i = 0;
// do {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ){
// 		console.log('Всё верно');
// 		mainList.shopGoods[i] = a;
// 		} else  {
// 			alert('введите товары');
// 			i--;
// 			};
// 			i++;		
// } while (i < 5);

if(time < 0){
	console.log('Такого не может быть');
} else if(time > 8 && time < 20){
		console.log('Рабочее время');
		} else if(time < 24) {
			console.log('Уже слишком поздно');
} else{
	console.log('В сутках 24 часа');
};

alert("Ваш бюджет на 1 день: " + mainList.budget/30);

console.log(mainList);



