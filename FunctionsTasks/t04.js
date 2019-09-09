// 4. Define a function is_palindrome() that recognizes palindromes
// (i.e. words that look the same written backwards).
// For example, is_palindrome("radar") should return True.

function is_palindrome(val = []) {
    for (let i = 0, k = (val.length -1); i < k ; i++, k--){
        if(String(val[i]).toLowerCase() !== String(val[k]).toLowerCase()){
            return false;
        }
    }
    return true;
}

console.log( is_palindrome("radar") );
console.log( is_palindrome("Radar") );