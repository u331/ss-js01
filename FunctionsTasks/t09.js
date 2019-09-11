// 9.Define a function, which takes a string with N opening brackets ("[")
//  and N closing brackets ("]"), in some arbitrary order.
//Determine whether the generated string is balanced; that is, whether it consists entirely
//  of pairs of opening/closing brackets (in that order), none of which mis-nest.
//     Examples:
//[]        OK   ][        NOT OK
//[][]      OK   ][][      NOT OK
//[[][]]    OK   []][[]    NOT OK

function isBalanced(str) {
    let level = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "["){
            level++;
        }
        if(str[i] === "]"){
            level--;
        }
        if (level < 0){
            return false;
        }
    }
    if (level == 0){
        return true;
    } else {
        return false;
    }
 }

 console.log(isBalanced("]]]"));
 console.log(isBalanced("[[][][][]["));
 console.log(isBalanced("[][][]"));
 console.log(isBalanced("[[[[][[]]]]]"));
