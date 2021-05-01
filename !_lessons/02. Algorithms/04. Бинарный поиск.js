/*
Бинарный поиск - алгоритм поиска элемента внутри ОТСОРТИРОВАННОГО массива, путем дробления массива на половины. Если искомый элемент присутствует в массиве, то поиск возвращает его позицию, в противном случае - null.

Алгоритм:
- Определение значения элемента в середине массива. 
- Полученное значение сравнивается с искомым ключом.
- Если ключ меньше значения середины, то поиск осуществляется в первой половине элементов, иначе — во второй.
- Поиск сводится к тому, что вновь определяется значение серединного элемента в выбранной половине и сравнивается с ключом.
- Процесс продолжается до тех пор, пока не будет найден элемент со значением ключа или не станет пустым интервал для поиска.

Временная сложность - O(log N).
*/

// ====================
// С помощью цикла for
// ====================

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function binarySearch(arr, item) {
	let start = 0;
	let end = arr.length - 1;
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		count++;
		let middle = Math.floor((start + end) / 2);
		let guess = arr[middle];
		if (item === guess) return `index = ${middle} | count = ${count}`;
		else if (item > guess) start = middle + 1;
		else if (item < guess) end = middle - 1;
	}
	return `index = null | count = ${count}`;
}

console.log(binarySearch(arr, 10));

// ======================
// С помощью цикла while
// ======================

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function binarySearch(arr, item) {
	let start = 0;
	let end = arr.length - 1;
	let count = 0;

	while(start <= end) {
		count++;
		let middle = Math.floor((start + end) / 2);
		let guess = arr[middle];
		if (item === guess) return `index = ${middle} | count = ${count}`;
		else if (item > guess) start = middle + 1;
		else if (item < guess) end = middle - 1;
	}
	return `index = null | count = ${count}`;
}

console.log(binarySearch(arr, 90));

// ====================
// С помощью рекурсии - дополнительно передаем start, end
// ====================

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function recursiveBinarySearch(arr, item, start, end) {
	let middle = Math.floor((start + end) / 2);
	let guess = arr[middle];
	if (item === guess) { 
		return middle;
	}
	else if (item < guess) { 
		return recursiveBinarySearch(arr, item, start, (middle - 1));
	}
	else if (item > guess) { 
		return recursiveBinarySearch(arr, item, (middle + 1), end);
	}
}

console.log(recursiveBinarySearch(arr, 100, 0, arr.length - 1));