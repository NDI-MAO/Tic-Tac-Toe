const gridFace = document.querySelectorAll(".gameGrid");

let gameboard = Array.from(gridFace).map(item =>item.id);
let playerArray = [];
let player2Array =[];
let currentPlayer ='player1';

//Function to handle player choice
function handleChoice(event){
  const element = event.target;
  if(element.textContent=== ''){
    if(currentPlayer ==='player1'){
     element.textContent ="○";
    currentPlayer = 'player2';
    }else if(currentPlayer==='player2'){
      element.textContent= "×";
      currentPlayer='player1'
    }newGameboard();
  }
}

// Attach click event handler to each grid item
gridFace.forEach(item => {
  item.addEventListener('click',handleChoice);
});

//Function to update gameboard
function newGameboard(){
    playerArray=[];
    player2Array=[];
    gameboard = Array.from(gridFace).reduce((accumulator,element)=>{
        if(element.textContent ==="○"){
            playerArray.push(element.id);
        }else if(element.textContent ==="×"){
            player2Array.push(element.id);
        }else{
            accumulator.push(element.id)
        }
        return accumulator;
    },[]);
  console.log('Gameboard:',gameboard);
  console.log('Player 1:',playerArray);
  console.log('Player 2:',player2Array)
}
