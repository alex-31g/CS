// =====================
// Напишите функцию sumTo(n), которая вычисляет сумму чисел от 1 до n. 
// Например, если n=3, то 1 + 2 + 3 = 6.
// =====================
function sumTo(n) {
	if (n === 0) return 0;
	return n + sumTo(n - 1);
}
console.log(sumTo(5));

// =====================
// Возведение в степень
// =====================
function pow(x, n) {
	if (n == 1) return x * n;
	return x * pow(x, n - 1)
}
console.log((pow(5, 3)));

// =====================
// Факториал
// 3! = 3*2*1 = 6
// =====================
function factorial(n) {
	if (n === 1) return 1;
	return n * factorial(n - 1);
}

console.log(factorial(5));

// ===============
// Числа Фибоначчи
// ===============
// 0, 1, 1, 2, 3, 5, 8, 13, 21...  
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2

function fib(n) {
	if (n <= 1) return n;
	return fib(n - 1) + fib(n - 2)
}
console.log(fib(8)); // 21
