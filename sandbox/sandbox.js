const console = require('./_console.log');

// Метод performance.now() возвращает временную метку, измеряемую в миллисекундах, с точностью до одной тысячной миллисекунды.
const { performance } = require('perf_hooks');

// TIME COMPLEXITY

// linear time
function foo(n) {
	let res = 0;
	for (let i = 1; i <= n; i++) {
		res += i;
	}
	console.log('res = ' + res);
	return res;
}
let start = performance.now();
foo(5000);
let end = performance.now();
console.log(end - start);

// constant time
function foo2(n) {
	let res = (n / 2) * (1 + n);
	console.log('res = ' + res);
	return res;
}
let start2 = performance.now();
foo(5000);
let end2 = performance.now();
console.log(end2 - start2);
