describe("Сумма", function(){
	it('Возврат true', function(){
		assert.isTrue(sum(6,6));
		assert.isFalse(sum(3,6));
		assert.isTrue(sum(7,6));
		assert.isTrue(sum(9,6));
	});
});

// describe("Проверка num", function(){
// 	it('num равен 5', function(){
// 		assert.equal(num, 5);
// 	});
// });

describe("длина массива и квадратные корни из чисел в нем", function(){
  it('each', function(){
  	assert.isFunction(each, 'это функция');
  	assert.equal(each(arr, myFunc)[0], 8);
  	assert.equal(each(arr, myFunc)[1], 7);
  	assert.equal(each(arr, myFunc)[2], 6);
  	assert.equal(each(arr, myFunc)[3], 5);
  	assert.equal(each(arr, myFunc)[4], 4);
  	assert.equal(each(arr, myFunc).length, 5);
  });
});

