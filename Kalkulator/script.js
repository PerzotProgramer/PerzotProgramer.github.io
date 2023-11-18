let displayText = "";

let Chars = ['+', '-', '*', '/'];

function GetButton(which) {
    ChangeSize();
    if (!IsThereSpace(displayText)) return;
    if (displayText === "" && which === '0') return;
    if (displayText === "" && Chars.includes(which)) displayText += '0' + which;
    else displayText += which;
    document.getElementById("outputText").innerHTML = displayText;
}

function Calculate() {
    ChangeSize();
    try {
        let output = eval(displayText);
        if (!IsThereSpace(output)) return;
        if (output === Infinity || (isNaN(output) && displayText !== "")) {
            output = "<span class='smallText'>Nie można dzielić przez 0!</span>";
        } else if (output === undefined) {
            throw new Error();
        }
        document.getElementById("outputText").innerHTML = output;
        displayText = "";
    } catch {
        document.getElementById("outputText").innerHTML = "Błąd zapisu!";
    }
}

function ClearInputAndOutput() {
    displayText = "0";
    document.getElementById("outputText").innerHTML = displayText;
    displayText = "";
}

function IsThereSpace(inThisString) {
    if (inThisString.length >= 30) {
        document.getElementById("outputText").innerHTML = "Za dużo znaków!";
        return false;
    }
    return true;
}

function ChangeSize() {
    window.onclick = clickedElement => {
        let element = document.getElementById(clickedElement.target.id);
        if (!element.classList.contains("box")) return;
        element.style.transform = "scale(95%)";
        setTimeout(function () {
            element.style.transform = "scale(100%)";
        }, 100);
    }
}
