// 6.Define a function caesar_cipher that takes string and key(number),
// whuch returns encrypted string

function caesar_cipher(str = "", key = 0) {
    let encrypted = "";
    let cardo = "z".charCodeAt(0) - "a".charCodeAt(0)  + 1;
    let cardoDigital = "9".charCodeAt(0) - "0".charCodeAt(0)  + 1;
    let first = 0;
    let firstDigital = "0".charCodeAt(0);

    for (let i = 0; i < str.length; i++){
        if (str[i] >= "a" && str[i] <= "z"){
            first = "a".charCodeAt(0);
        } else if(str[i] >= "A" && str[i] <= "Z"){
            first = "A".charCodeAt(0);
        } else if (str[i] >= "0" && str[i] <= "9"){
            encrypted +=  String.fromCharCode( (str.charCodeAt(i) - firstDigital + key) % cardoDigital + firstDigital );
            continue;
        } else {
            encrypted += str[i];
            continue;
        }
        encrypted +=  String.fromCharCode( (str.charCodeAt(i) - first + key) % cardo + first );
    }
    return encrypted;
}

console.log( caesar_cipher("ab-2#Yyza", 2) );