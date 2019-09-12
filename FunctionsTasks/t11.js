// 11. Write a function dec_to_bin() that taces decimal integer and outputs its binary representation.

function dec_to_bin(dec) {
    let bin = "";

    while (dec >=1){
        bin += String(dec%2);
        dec = parseInt(dec/2);
    }

    // arr = str.split(""); // alternative to Array.from(str);
    bin = Array.from(bin); // string -> array
    bin.reverse();
    bin = bin.join(""); // array -> string
    return bin;
    // return Array.from(bin).reverse().join(""); // all in 1
}

console.log(dec_to_bin(42));