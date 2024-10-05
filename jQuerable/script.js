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

function handleInput(input) { // Mambo jumbo
    if (isGameOver) return "";
    input = input.toUpperCase();
    let isInvalid = invalidLetters.includes(input[input.length - 1]);
    let isLetter = input && input[input.length - 1] && input[input.length - 1].match(/[A-Za-z]/); // Kiedy pusty zwraca null
    if (isInvalid || !isLetter) input = input.slice(0, -1);
    // Chyba działa :P
    if ((isLetter || (input === "" && isLetter != null)) && !isInvalid) playAudio('./audio/HardSingleKeyPress.mp3');
    updateCellsWhenTyping(input);
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
        revealElement(cell, wordIndex * 250);
        wordIndex++;
    });
    updateUsedLetters();
    $("#userInput").val("");
    checkGameState(hitLetters)
    lineNumber++;
}

function checkGameState(hitLetters) {
    if (hitLetters === 5) {
        isGameOver = true;
        setTimeout(() => {
            InformationDisplay("YOU WIN!");
            playAudio('./audio/HappyWheelsVictory.mp3');
        }, 1500);
        return;
    }
    if (lineNumber === 4) {
        isGameOver = true;
        setTimeout(() => {
            InformationDisplay("YOU LOST!");
            playAudio('./audio/LosingHornSoundEffect.mp3');
        }, 1500);
    }
}

function updateCellsWhenTyping(input) {
    let wordIndex = 0;
    $(`#rowId${lineNumber}`).children().each(function () {
        const cell = $(this);
        if (input[wordIndex] === undefined) {
            cell.text("");
        } else {
            cell.text(input[wordIndex]);
        }
        wordIndex++;
    });
}

function revealElement(element, delay) {
    $(element).css({
        opacity: 0,
        scale: 3
    });
    setTimeout(() => {

        $(element).animate({
            opacity: 1,
            scale: 1
        }, {
            duration: 300
        });
        playAudio('./audio/Swoosh.mp3');
    }, delay);
}

function playAudio(src) {
    new Audio(src).play().catch(() => {
    });
}

function updateUsedLetters() {
    const sortedLetters = invalidLetters.sort().toString().replaceAll(",", " ");
    $("#usedLetters").text(sortedLetters);
}

function InformationDisplay(info) {
    $("#info").text(info);
}