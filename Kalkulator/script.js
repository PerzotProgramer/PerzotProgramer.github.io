let displayText = "";

let Chars = ['+', '-', '*', '/'];

function GetButton(which) {
    if (displayText === "" && which === '0') return;
    if (displayText === "" && Chars.includes(which)) displayText += '0' + which;
    else displayText += which;
    document.getElementById("outputText").innerHTML = displayText;
}

function Calculate() {
    try {
        let output = eval(displayText);
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