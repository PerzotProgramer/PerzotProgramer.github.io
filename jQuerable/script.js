const words = "WAGON"
let lineNumber = 0;
let winCondition = false;

function check() {
    if (winCondition) return;
    const userInput = document.getElementById("userInput").value;
    if (userInput.length < 5) return;
    let wordIndex = 0;
    let hitLetters = 0;
    $(`#rowId${lineNumber}`).children().each(function () {
        const cell = $(this);
        if (userInput[wordIndex] === words[wordIndex]) {
            cell.addClass("gridCellCorrectSpot");
            hitLetters++;
        } else if (words.includes(userInput[wordIndex])) {
            cell.addClass("gridCellCorrectLetter");
        } else {
            cell.addClass("gridCellWrong");
        }
        cell.text(userInput[wordIndex]);
        wordIndex++;
    });
    if (hitLetters === 5) winCondition = true;
    lineNumber++;
}