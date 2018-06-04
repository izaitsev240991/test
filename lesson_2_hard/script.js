// var week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

// for (var i = 0; i < 7; i++){
// 	if (i == 3 ){
// 		document.write('<em>' + week[i] + '</em><br>');
// 	} else if (i > 4){
// 		document.write('<b>' + week[i] + '</b><br>');
// 	} else {
// 		document.write(week[i] + '<br>');
// 	};
// }

var arr = ['374845458', '84898358', '483304349', '7348349', '7394834843', '84888458', '3494950'];

for (var i = 0; i < 7; i++){
	if ( arr[i].charAt(0) == 3){
		console.log(arr[i]);
	} 	else if ( arr[i].chatAt(0) == 7){
				console.log(arr[i]);
			}		else {
						continue;

		};
}