// 2.Define a function sum() and a function multiply() that sums
// and multiplies (respectively) all the numbers in a list of numbers.
// For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4]) should return 24.

function sum(values = []) {
    let res = 0;

    for(let i = 0; i < values.length; i++){
        console.log(i + " " + values[i]);
        // res += Number(values[i]);
        res += values[i];
    }

    return res;
}

function multiply(values = []) {
    let res = 1;
    for(let i = 0; i < values.length; i++){
        console.log(i + " " + values[i]);
        // res *= Number(values[i]);
        res *= values[i];
    }
    return res;
}


console.log( sum([1, 2, 3, 4]) );
console.log( multiply([1, 2, 3, 4]) );
