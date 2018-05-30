var budget = prompt("Ваш бюджет на месяц?", "");
var shopName = prompt("Название вашего магазина", ""); 
var product1 = prompt("Какой тип товаров будем продавать?", "");
var product2 = prompt("Какой тип товаров будем продавать?", "");
var product3 = prompt("Какой тип товаров будем продавать?", "");
var open = window.open("about:blank");

var shopGoods = [product1, product2, product3]

employers = {
	name: "Вася",
	age: "22",
	position: "кладовщик"
}

mainList = {
	budget,
	shopName,
	shopGoods,
	employers,
	open
}
alert("Ваш бюджет на 1 день: " + budget/30);
