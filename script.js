const gridFace = document.querySelectorAll(".gameGrid");
//gridFace[2].innerText = "○";
//gridFace[5].innerText="×";

const gameboard = Array.from(gridFace).map(item =>item.id);
const playerArray = [];

// Function to handle the click event
function handleClick(event) {
  const element = event.target;
  element.textContent= "○";
}

// Attach click event handler to each grid item
gridFace.forEach(item => {
  item.addEventListener('click', handleClick);
});

//trying function to pick a random gridface
function botChoice(){
    return gameboard[Math.floor(Math.random()*gameboard.length)];
}

//reducing array from gameboard
gameboard = gameboard.reduce((accumulator,currentValue)=>{

    if(currentValue !==""){
        playerArray.push(currentValue);
    }else{
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(gameboard);  // Output: [1, 3, 5]
console.log(playerArray);  // Output: [2, 4]