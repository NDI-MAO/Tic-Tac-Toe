//Adding DOM element from HTML
const gridFace = document.querySelectorAll(".gameGrid");
const container = document.getElementById("container");

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
      element.style.color = "darkslategray";
      currentPlayer='player1'
    }newGameboard();
  } guessWinner();
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
  console.log('Player 2:',player2Array);
}

let result = [
  ['1','2','3'],
  ['1','4','7'],
  ['1','5','9'],
  ['2','5','8'],
  ['3','6','9'],
  ['3','5','7'],
  ['4','5','6'],
  ['7','8','9']
];

function guessWinner(){
  for(let combination of result){
    if(combination.every( cell=> playerArray.includes(cell))){
      container.innerHTML = `<span class="winner1">○</span><br><span class="winner2">WINS THE GAME</span>`;
      container.style.color = "darkseagreen"
      return;
    }else if (combination.every(cell => player2Array.includes(cell))){
      container.innerHTML = `<span class="winner1">×</span><br><span class="winner2">WINS THE GAME</span>`;
      container.style.color = "darkslategray"
      return;
    }
  }
  if(  gameboard.length === 0){
    container.innerHTML = `<span class="winner1">○×</span><br><span class="winner2">DRAW</span>`;
    container.style.color = "maroon"
}
}
//function to reset game after a win!
function resetGame(){
  gridFace.forEach(item => {
    location.reload();
    item.textContent='';
    item.style.color = '';
    container.innerHTML = '';
  });
  playerArray = [];
  player2Array = [];
  gameboard = Array.from(gridFace).map(item =>item.id);
  currentPlayer ='player1';
}