var num = [3, 3, 7, 2, 1];
var multip = num[0] * num[1] * num[2] * num[3] * num[4];
var rate = Math.pow(multip, 3);

console.log(multip);
alert( Math.round(rate * .00001) );
