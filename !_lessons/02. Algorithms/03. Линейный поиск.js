/*
Линейный поиск - алгоритм поиска элемента внутри массива, путём его последовательного обхода с начала и сравнения искомого элемента с каждым элементом массива. Если искомый элемент присутствует в массиве, то поиск возвращает его позицию, в противном случае - null.

Временная сложность - O(N).
*/

const arr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linearSearch(arr, item) {
	for (let i = 0; i < arr.length; i++) {
		count++;
		if (arr[i] === item) return i;
	}
	return null;
}

console.log(`index = ${linearSearch(arr, 11)}`);
console.log(`count = ${count}`);
