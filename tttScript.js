let playerSymbol = 'X'
let gameEnded = false
let gameStarted = false
let prevMove = null
let aiPrevMove = null
let moveCount = 0
let mode = 2

document.getElementById("p1").addEventListener("click", 
function() {
    if(!gameStarted){
      mode = 1
      document.getElementById("p1").style.backgroundColor="greenyellow";
      document.getElementById("p2").style.backgroundColor="grey"; 
    }   
  }
);

document.getElementById("p2").addEventListener("click", 
function() {

  if(!gameStarted){
      mode = 2
      document.getElementById("p2").style.backgroundColor="greenyellow";
      document.getElementById("p1").style.backgroundColor="grey";    
    }
  }
);

function aiMove(){

  moveCount += 1

  for (let j = 1; j <= 9; j++){

    let x = Math.random() * 8;
    x += 1
    x = Math.floor(x)

    if (document.getElementById(x.toString()).innerHTML === "" && !gameEnded) {

      aiPrevMove = x

      document.getElementById(x.toString()).innerHTML = playerSymbol;
      document.getElementById(x.toString()).classList.add(playerSymbol.toLowerCase());

      checkWin();
      checkTie();
      
      return
    }
  }  
}

for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", 
    function(){
      if (this.innerHTML === "" && !gameEnded) {

        moveCount += 1

        this.innerHTML = playerSymbol;
        this.classList.add(playerSymbol.toLowerCase());

        prevMove = i
        gameStarted = true

        checkWin();
        checkTie();
       
        if (playerSymbol === "X")
          playerSymbol = "O"
        else
          playerSymbol = "X"

        if (mode === 1){
          aiMove();
          if (playerSymbol === "X")
            playerSymbol = "O"
          else
            playerSymbol = "X"
        }

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
      
      gameStarted = false
      gameEnded = false;
      playerSymbol = 'X';
      aiPrevMove = null
      prevMove = null
      moveCount = 0
    }
  }
);

document.getElementById("undo").addEventListener("click", 
function() {
    document.getElementById(prevMove.toString()).innerHTML = "";

    if (gameEnded){
      gameEnded = true
      
    }

    if (playerSymbol === "X")
      playerSymbol = "O"
    else
      playerSymbol = "X"

    if (mode === 1){
      document.getElementById(aiPrevMove.toString()).innerHTML = "";
      if (playerSymbol === "X")
        playerSymbol = "O"
      else
        playerSymbol = "X"

      moveCount -= 1
    }

    moveCount -= 1

  }
);

let winPos = [
    [1, 2, 3], [4, 5, 6], 
    [7, 8, 9], [1, 4, 7], 
    [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]
  ];
