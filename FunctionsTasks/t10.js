// 10. Write a function char_freq() that takes a string and builds a frequency listing of the characters contained in it.
// Represent the frequency listing as a Python dictionary.
// Try it with something like char_freq("abbabcbdbabdbdbabababcbcbab").

function char_freq(str) {
    let dictionary = [];

    for (let i = 0; i < str.length; i++){
        if(dictionary[str[i]] == undefined){
            dictionary[str[i]] = 1;
        } else {
            dictionary[str[i]]++;
        }
    }
    return dictionary;
}

console.log(char_freq("abbabcbdbabdbdbabababcbcbab"));