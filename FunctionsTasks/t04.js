// 4. Define a function is_palindrome() that recognizes palindromes
// (i.e. words that look the same written backwards).
// For example, is_palindrome("radar") should return True.

function is_palindrome(str) {
    for (let i = 0, k = (str.length-1); i < k ; i++, k--){
        if(String(str[i]).toLowerCase() !== String(str[k]).toLowerCase()){
            return false;
        }
    }
    return true;
}

console.log( is_palindrome("radar") );
console.log( is_palindrome("Radar") );