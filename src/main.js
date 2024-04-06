/**
 * Map Polyfill
 * @param {*} fn
 * @returns updated list after passing each element via the callback
 * Does not mutate the original array. Return new array
 */

Array.prototype.myMap = function (fn) {
	if (!this) {
		throw Error('${this} is not defined');
	}
	const array = Object(this);
	const result = [];

	for (let i = 0; i < this.length; i++) {
		result.push(fn(this[i]));
	}

	return result;
};

// const res = [1, 2, 3].myMap((i) => i * 2);
// console.log(res);

/**
 * Filter Polyfill
 * @param {*} fn
 * @returns filtered list that passes the callback
 * Does not mutate the original array. Return new array
 */

Array.prototype.myFilter = function (fn) {
	if (!this) {
		throw Error('${this} is not defined');
	}

	const result = [];
	const arr = this;
	const length = this.length;

	for (let i = 0; i < length; i++) {
		if (fn(arr[i])) {
			result.push(arr[i]);
		}
	}

	return result;
};

// const res = [1, 2, 3].myFilter((i) => i % 2 === 0);
// console.log(res);

/**
 * Reduce Polyfill
 * @param {*} fn callback
 * @param {*} arg value of accumulator
 * @returns the value of accumulator after performing the callback on each element of list and assigning up to accumulator
 * Does not mutate the original array.
 */

Array.prototype.myReduce = function (fn, arg) {
	if (!this) {
		throw Error('${this} is not defined');
	}
	let result = arg;
	const arr = this;
	const length = this.length;

	for (let i = 0; i < length; i++) {
		result = fn(result, arr[i]);
	}

	return result;
};

// const res = [1, 2, 3].myReduce((acc, crr) => {
// 	return (acc = acc + crr);
// }, 0);
// console.log(res);

/**
 *
 * @param {*} compFn
 * Mutates the original array, returns reference to the same array but in sorted way
 * default order is ascending
 * it converts the items to string and compares the UTF-16 code of each.
 *
 * To sort the elements in an array without mutating the original array, use toSorted().
 *
 * the output is either positive(1) , negative (-1) or zero(0)
 * negative = first [a]... then [b]
 * zero/NaN = both are equal
 * positive = first [b]... then [a]
 */

Array.prototype.mySort = function (compFn) {
	if (!this) {
		throw Error('${this} is not defined');
	}

	const arr = this;
	const length = this.length;

	if (compFn !== 'function') {
		compFn = function (a, b) {
			if (a > b) {
				return -1;
			}
			if (a < b) {
				return 1;
			}
			return 0;
		};
	}

	for (let i = 0; i < length - 1; i++) {
		for (let j = 0; j < length - i - 1; j++) {
			if (compFn(arr[j], arr[j + 1]) < 0) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;
};

// const list = [
// 	{
// 		name: 'Sunabha',
// 		age: 27,
// 	},
// 	{
// 		name: 'Sinha',
// 		age: 18,
// 	},
// ];
// console.log(list.mySort((a, b) => a.age > b.age));
// console.log(list.sort((a, b) => a.age - b.age));
