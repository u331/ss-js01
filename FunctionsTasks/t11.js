// 11. Write a function dec_to_bin() that taces decimal integer and outputs its binary representation.

function dec_to_bin(dec) {
    let binRev = "", bin = "";

    while (dec >=1){
        binRev += String(dec%2);
        dec = parseInt(dec/2);
    }
    // console.log(binRev);
    // for (let i = 0, k = binRev.length - 1; i < k ; i++, k--){
    //     // console.log(binRev[i] + " " + binRev[k]);
    //     let a = binRev[i];
    //     binRev[i] = binRev[k];
    //     binRev[k] = a;
    //     // console.log(binRev[i] + " " + binRev[k]);
    //     // console.log("");
    // }
    // // console.log(binRev);

    for (let i = binRev.length - 1; i >= 0 ; i--){
        bin += binRev[i];
    }
    return bin;
}

console.log(dec_to_bin(156));