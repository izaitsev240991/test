var budget = prompt("Ваш бюджет на месяц?", "");
var shopName = prompt("Название вашего магазина", ""); 
var product1 = prompt("Какой тип товаров будем продавать?", "");
var product2 = prompt("Какой тип товаров будем продавать?", "");
var product3 = prompt("Какой тип товаров будем продавать?", "");
var shopGoods = [product1, product2, product3]
var employers = {
	name: "Вася",
	age: "22",
	position: "кладовщик"
}
var mainList = {
	'budget' : budget,
	'shopName': shopName,
	'shopGoods': shopGoods,
	'employers': employers,
	'open': true
}

alert("Ваш бюджет на 1 день: " + budget/30);

console.log(mainList.shopGoods);



