// 3.Define a function reverse() that computes the reversal of a string.
// For example, reverse("I am testing") should return the string "gnitset ma I".

function reverse(val = []) {
    let reversed = "";

    for (let i = val.length - 1; i >= 0; i--){
        reversed += val[i];
    }
    return reversed;
}

console.log( reverse("I am testing") );