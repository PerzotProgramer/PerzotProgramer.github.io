const words = [
    "WAGON",
    "PTAKI",
    "ALBUM",
    "ATUTY",
    "WAWER",
    "KOLOR",
    "ROWER",
    "BANAN",
    "FILMY",
    "FANTA",
    "PEPSI",
]; // Będzie ich więcej
const word = setRandomWord();
let invalidLetters = [];
let lineNumber = 0;
let isGameOver = false;

function setRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function handleInput(input) {
    if (isGameOver) return "";
    input = input.toUpperCase();
    if (invalidLetters.includes(input[input.length - 1]) || !input[input.length - 1].match(/[A-Za-z]/)) {
        input = input.slice(0, -1);
        return input;
    }
    return input;
}

function check() {
    if (isGameOver) return;
    const info = $("#info");
    const userInput = $("#userInput").val();
    if (userInput.length < 5) {
        info.text("Write at least 5 letters!");
        return;
    } else info.text("");
    let wordIndex = 0;
    let hitLetters = 0;
    $(`#rowId${lineNumber}`).children().each(function () {
        const cell = $(this);
        if (userInput[wordIndex] === word[wordIndex]) {
            cell.addClass("gridCellCorrectSpot");
            hitLetters++;
        } else if (word.includes(userInput[wordIndex])) {
            cell.addClass("gridCellCorrectLetter");
        } else {
            cell.addClass("gridCellWrong");
            if (!invalidLetters.includes(userInput[wordIndex])) {
                invalidLetters.push(userInput[wordIndex]);
            }
        }
        cell.text(userInput[wordIndex]);
        wordIndex++;
    });
    updateUsedLetters();
    $("#userInput").val("");
    if (hitLetters === 5) {
        isGameOver = true;
        InformationDisplay("YOU WIN!");
        return;
    }
    if (lineNumber === 4) {
        isGameOver = true;
        InformationDisplay("YOU LOST!")
        return;
    }
    lineNumber++;
}

function updateUsedLetters() {
    const sortedLetters = invalidLetters.sort().toString().replaceAll(",", " ");
    $("#usedLetters").text(sortedLetters);
}

function InformationDisplay(info) {
    $("#info").text(info);
}