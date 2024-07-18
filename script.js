const gridFace = document.querySelectorAll(".gameGrid");

let gameboard = Array.from(gridFace).map(item =>item.id);
let playerArray = [];
let botArray =[];

// Function to handle the player's click event
function handleClick(event) {
  const element = event.target;
  element.textContent= "○";
  newGameboard();
}

// Attach click event handler to each grid item
gridFace.forEach(item => {
  item.addEventListener('click', handleClick);
});

//Function to update gameboard
function newGameboard(){
    playerArray=[];
    gameboard = Array.from(gridFace).reduce((accumulator,currentValue)=>{
        if(currentValue.textContent ==="○"){
            playerArray.push(currentValue.id);
        }else if(currentValue.textContent === "×"){
            botArray.push(currentValue.id);
        }else{
            accumulator.push(currentValue.id)
        }
        return accumulator;
    },[]);
  console.log('Updated gameboard:', gameboard);
  console.log('Player array:', playerArray);
  //console.log('bot array:', botArray);
}


//trying function to pick a random gridface
function botChoice(){
    return gameboard[Math.floor(Math.random()*gameboard.length)];
}



console.log(gameboard);  // Output: [1, 3, 5]
console.log(playerArray);  // Output: [2, 4]