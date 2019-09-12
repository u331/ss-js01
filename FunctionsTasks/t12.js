// 12. Write a ship battle game, which is similar to ex.8,
// except it takes 1 integer as an order of matrix,
//  randomly generates index (x, y) and checks user input (2 integers).
// (tip: use var1, var2 = raw_input("Enter two numbers here: ").split())
// *Visualize the game.

function game(battleFieldSize = 10) {
    let len = String(battleFieldSize).length;
    let top = "";
    const readline = require('readline');
    let battleField = [];
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    for (let i = 0; i < battleFieldSize; i++){
        battleField[i] = [];
        for (let j = 0; j < battleFieldSize; j++){
            battleField[i][j] = "░"; //alt 176
        }
    }

    // for (let i = 0; i < len; i++){
    //     top += " ";
    // }
    // for (let i = "a".charCodeAt(0); i < ("a".charCodeAt(0) + battleFieldSize); i++){
    //     top += String.fromCharCode(i);
    // }
    // console.log(top);
    // for (let i = 1; i <= battleFieldSize; i++){
    //     let line = "";
    //     for (let k = 1; k <= (len - String(i).length); k++){ //console.log(k + " " + String(k).length);
    //         line += " ";
    //     }
    //     line += String(i);
    //     for (let i = "a".charCodeAt(0); i < ("a".charCodeAt(0) + battleFieldSize); i++){
    //         line += "░"; //alt 176
    //     }
    //     console.log(line);
    // }

    draw(battleField);
    let ship1 = [1 + Math.round(Math.random()*(battleFieldSize - 1)), 1 + Math.round(Math.random()*(battleFieldSize - 1))];
    console.log("(cheat: " + ship1 + ")\n");

    console.log("Guess the ship position (e.g. 'd3'), or enter 'q' for exit.");
    rl.on('line', (input) => {
        if(input === "q"){
            console.log("Finish the game.");
            rl.close();
            process.exit();
        } else {
             console.log(  String(input[0]).charCodeAt(0) - "a".charCodeAt(0) + 1 );
             console.log( Number(input.slice(1))  );
            let guessedX = String(input[0]).charCodeAt(0) - "a".charCodeAt(0) + 1;
            let guessedY = Number(input.slice(1));
            guessed = [guessedX, guessedY];

            if(guessedX === ship1[0] && guessedY === ship1[1]){
                battleField[guessedX - 1][guessedY - 1] = "X";
                draw(battleField);
                console.log("Congratulations! You are winner!");
                rl.close();
                process.exit();
            } else {
                battleField[guessedX - 1][guessedY - 1] = "·";
                draw(battleField);
                console.log("Try again!");
            }
        }
    });

}

function draw(battleField) { //console.log(battleField);
    let top = "";
    let battleFieldSize = battleField.length;
    let len = String(battleFieldSize).length;

    for (let i = 0; i < len; i++) {
        top += " ";
    }
    for (let i = "a".charCodeAt(0); i < ("a".charCodeAt(0) + battleFieldSize); i++) {
        top += String.fromCharCode(i);
    }
    console.log(top);
    for (let i = 1; i <= battleFieldSize; i++) {
        let line = "";
        for (let k = 1; k <= (len - String(i).length); k++) { //console.log(k + " " + String(k).length);
            line += " ";
        }
        line += String(i);
        for (let j = 1; j <= battleFieldSize; j++) {
            line += battleField[j-1][i-1];
        }
        console.log(line);
    }
}

//Max battleFieldSize is 26
game(12);