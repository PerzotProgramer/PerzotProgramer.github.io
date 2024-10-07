const word = setRandomWord();
const invalidLetters = [];
let lineNumber = 0;
let isGameOver = false;
let secondsFromStart = 0;

function setRandomWord() {
    return words[Math.floor(Math.random() * words.length)].toUpperCase();
}

function handleInput(input) { // Mambo jumbo
    if (isGameOver) return "";
    input = input.toUpperCase();
    let isInvalid = invalidLetters.includes(input[input.length - 1]);
    let isLetter = input && input[input.length - 1] && input[input.length - 1].match(/[A-Za-z]/); // Kiedy pusty zwraca null
    if (isInvalid || !isLetter) {
        input = input.slice(0, -1);
    }
    // Chyba działa :P
    if ((isLetter || (input === "" && isLetter != null)) && !isInvalid) {
        playAudio('./audio/HardSingleKeyPress.mp3');
        InformationDisplay("");
    } else {
        playAudio('./audio/NopeSoundEffect.mp3');
        InformationDisplay("<span class='textRed'>Invalid letter!</span>");
    }
    updateCellsWhenTyping(input);
    return input;
}

function checkWord() {
    if (isGameOver) return;
    const usrInpSelector = $("#userInput");
    const userInput = usrInpSelector.val();
    if (userInput.length < 5) {
        InformationDisplay("<span class='textRed'>Write at least 5 letters!</span>");
        playAudio('./audio/NopeSoundEffect.mp3');
        return;
    } else InformationDisplay("");
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
    usrInpSelector.val("");
    checkGameState(hitLetters)
    lineNumber++;
}

function checkGameState(hitLetters) {
    if (hitLetters === 5) {
        isGameOver = true;
        setTimeout(() => {
            InformationDisplay("YOU WIN!");
            playAudio('./audio/HappyWheelsVictory.mp3');
            setTimeout(() => {
                $("#word").text(`It took you 
                ${secondsFromStart} seconds, 
                ${lineNumber} tries and 
                ${invalidLetters.length} invalid letters to guess the word!`);
            }, 1500);
        }, 1500);
        return;
    }
    if (lineNumber === 4) {
        isGameOver = true;
        setTimeout(() => {
            InformationDisplay("YOU LOST!");
            playAudio('./audio/LosingHornSoundEffect.mp3');
            setTimeout(() => {
                $("#word").text(`The word was: ${word}`);
            }, 2000);
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
    $("#info").html(info);
}

function startTimeCounter() {
    secondsFromStart++;
    if (isGameOver) return;
    setTimeout(startTimeCounter, 1000);
}