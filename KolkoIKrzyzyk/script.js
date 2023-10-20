let turn = "O";
let win = false;
let draw = false;
let moves = 0;

function Click()
{
    if (turn === "O")
    {
        window.onclick = e => {
            if (win || draw) return;
            if (document.getElementById(e.target.id).innerHTML !== "") return;
            document.getElementById(e.target.id).innerHTML = turn;
            document.getElementById(e.target.id).classList.add("O");
            turn = "X";
            document.getElementById("info").innerHTML = "Ruch " + turn;
            WinCheck();
            DrawCheck();
        }
    }
    if (turn === "X")
    {
        window.onclick = e => {
            if (win || draw) return;
            if (document.getElementById(e.target.id).innerHTML !== "") return;
            document.getElementById(e.target.id).innerHTML = turn;
            document.getElementById(e.target.id).classList.add("X");
            turn = "O";
            document.getElementById("info").innerHTML = "Ruch " + turn;
            WinCheck();
            DrawCheck();
        }
    }
}

function WinCheck()
{
    const tiles = document.getElementsByClassName("tile");
    const WinCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    console.log(tiles)
    WinCombos.forEach(arr => {
        const circleWins = arr.every(
            tile => tiles[tile].classList.contains("O"))
        if (circleWins) 
        {
            document.getElementById("info").innerHTML = "O Wygrało!";
            win = true;
        }
    })
    WinCombos.forEach(arr => {
            const crossWins = arr.every(
                tile => tiles[tile].classList.contains("X"))
            if (crossWins) 
            {
                document.getElementById("info").innerHTML = "X Wygrał!";
                win = true;
            }
    })
}

function DrawCheck()
{
    moves ++;
    if (moves === 9)
    {
        document.getElementById("info").innerHTML = "REMIS!";
        draw = true;
    }
}