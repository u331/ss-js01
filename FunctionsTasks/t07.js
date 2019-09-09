// 7.define a function diaginal_reverse() that takes matrix and returns diagonal-reversed one:
// 1 2 3         1 4 7
// 4 5 6 returns 2 5 8
// 7 8 9         3 6 9

function diaginal_reverse(matrix/* = [][]*/) {
    let reversed = [];

    for (let i = 0; i < matrix.length; i++){
        reversed[i] = [];
        for (let k = 0;k < matrix.length; k++){
            reversed[i][k] = matrix[k][i];
        }
    }
    return reversed;
}

function matrixPrint(matrix) {
    let line = "";

    for (let i = 0; i < matrix.length; i++){
        line = "";
        for (let k = 0; k < matrix.length; k++){
            line += matrix[i][k] + " ";
        }
        console.log(line);
    }
}

var myMatrix = [[1,2,3],[4,5,6],[7,8,9]];
matrixPrint(myMatrix);

console.log("");

var myReversed = diaginal_reverse(myMatrix);
matrixPrint(myReversed);
