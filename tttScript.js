let playerSymbol = 'X'
let gameEnded = false
let prevMove = null
let moveCount = 0

for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", 
    function(){
      if (this.innerHTML === "" && !gameEnded) {

        moveCount += 1

        this.innerHTML = playerSymbol;
        this.classList.add(playerSymbol.toLowerCase());

        prevMove = i

        checkWin();
        checkTie();
       
        if (playerSymbol === "X")
          playerSymbol = "O"
        else
          playerSymbol = "X"

      }

    }
  );
}

function checkTie(){
  if (moveCount == 9){
    alert("It's a Draw !")
  }
}

function checkWin(){
  for (let i = 0; i < winPos.length; i++) {
    if (document.getElementById(winPos[i][0]).innerHTML === playerSymbol && document.getElementById(winPos[i][1]).innerHTML === playerSymbol && document.getElementById(winPos[i][2]).innerHTML === playerSymbol) {
      document.getElementById(winPos[i][0]).classList.add("win");
      document.getElementById(winPos[i][1]).classList.add("win");
      document.getElementById(winPos[i][2]).classList.add("win"); 
      gameEnded = true;
      moveCount += 1

      alert(playerSymbol + " wins!");      
    }
  }
}

document.getElementById("reset").addEventListener("click", 
function() {
  for (let i = 1; i <= 9; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).classList.remove("x");
      document.getElementById(i.toString()).classList.remove("o");
      document.getElementById(i.toString()).classList.remove("win");
      
      gameEnded = false;
      playerSymbol = 'X';
      prevMove = null
      moveCount = 0
    }
  }
);

document.getElementById("undo").addEventListener("click", 
function() {
    document.getElementById(prevMove.toString()).innerHTML = "";

    if (playerSymbol === "X")
      playerSymbol = "O"
    else
      playerSymbol = "X"

    moveCount -= 1
    
  }
);

let winPos = [
    [1, 2, 3], [4, 5, 6], 
    [7, 8, 9], [1, 4, 7], 
    [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]
  ];
