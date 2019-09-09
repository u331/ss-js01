// 8. Write a function game() number-guessing game, that takes 2 int parameters defining the range.
// Using Math.random() generate random int from the range. While user input isn't equal that number,
// print "Try again!". If user guess the number, congratulate him and exit.


function game(begin = 0, end = 0) {
    let randNumber =Math.round( Math.random()*(end - begin) + begin);
    let guessed;
    const readline = require('readline');

    console.log("(cheat: " + randNumber + ")");

    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Guess the number from " + begin + " to "+ end + ", or enter 'q' for exit.");
    rl.on('line', (input) => {
        if(input === "q"){
            console.log("Finish the game.");
            rl.close();
            return -1;
        } else {
            guessed = Number(input);
            if(guessed === randNumber){
                console.log("Congratulations! You are win!");
                rl.close();
                return 0;
            } else {
                console.log("Try again!");
            }
        }
    });
}

game(3,5);