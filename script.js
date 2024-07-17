const gridFace = document.querySelectorAll(".gameGrid");
//gridFace[2].innerText = "○";
//gridFace[5].innerText="×";

const gameboard = [gridFace[0], gridFace[1], gridFace[2], gridFace[3], gridFace[4], gridFace[5], gridFace[6], gridFace[7], gridFace[8]];


// Function to handle the click event
function handleClick(event) {
  const element = event.target;
  element.textContent="○";
}

// Attach click event handler to each grid item
gridFace.forEach(item => {
  item.addEventListener('click', handleClick);
});