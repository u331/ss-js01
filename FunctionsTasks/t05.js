//5. Define a procedure histogram() that takes a list of integers and prints a histogram to the screen.
// For example, histogram([4, 9, 7]) should print the following:
// ****
// *********
// ******
// (usage time.sleep(s) possible for better visualization)

function histogram(values = []) {
    for (let i = 0; i < values.length; i++){
        let line = "";
        for (let k = 0; k < values[i]; k++) {
            line += "*";
        }
        console.log(line);
    }
}

histogram([4, 9, 7]);