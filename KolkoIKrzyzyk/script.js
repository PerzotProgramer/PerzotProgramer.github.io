let turn = "O";
let win = false;

function Click()
{
    if (win) return; // nie wiem czemu to nie działa
    console.log(win);
    if (turn === "O")
    {
        window.onclick = e => {
            if (document.getElementById(e.target.id).innerHTML !== "") return;
            document.getElementById(e.target.id).innerHTML = turn;
            document.getElementById(e.target.id).classList.add("O");
            turn = "X";
            document.getElementById("info").innerHTML = "Ruch " + turn;
            WinCheck();
        }
    }
    if (turn === "X")
    {
        window.onclick = e => {
            if (document.getElementById(e.target.id).innerHTML !== "") return;
            document.getElementById(e.target.id).innerHTML = turn;
            document.getElementById(e.target.id).classList.add("X");
            turn = "O";
            document.getElementById("info").innerHTML = "Ruch " + turn;
            WinCheck();
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
