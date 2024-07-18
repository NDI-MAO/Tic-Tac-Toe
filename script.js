const gridFace = document.querySelectorAll(".gameGrid");
//gridFace[2].innerText = "○";
//gridFace[5].innerText="×";

const gameboard = Array.from(gridFace);

// Function to handle the click event
function handleClick(event) {
  const element = event.target;
  element.textContent= "○";
}

// Attach click event handler to each grid item
gridFace.forEach(item => {
  item.addEventListener('click', handleClick);
});
