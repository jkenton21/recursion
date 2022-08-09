//Fibonacci.js
// Normal and recursive alogithms for the fibonacci sequence to the nth number.

function fibs(n) {
    const array = [0, 1];
    if (n===1) return [0];
    if (n===2) return array;
    for (let i=2; i < n; i++) {
        array.push(array[i - 1] + array[i - 2])
    }
    return array;
}

console.log(fibs(5));
console.log(fibs(12));

function  fibsRec(n) {
    const recArray = fibsRec(n - 1);
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    return [...recArray, recArray[n - 1] + recArray[n - 2]];
}

console.log(fibsRec(5));
console.log(fibsRec(12));

