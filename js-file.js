function createGrid(squares = 2){
  for (i = 0; i < squares; i++){
    for (j = 0; j < squares; j++){
      const container = document.querySelector(".container");
      const div = document.createElement("div");
      const CON_HEIGHT = 850;
      const CON_WIDTH = 900;
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
      });
      div.classList.add("box");
      div.style.height = `${CON_HEIGHT/ squares}px`
      div.style.width = `${CON_WIDTH/squares}px`
      container.appendChild(div)
    }
  }
}

function promptDimensions() {
  let input = prompt("Number of Square Per Side (Maximum: 100)");
  if (input > 100) {
    alert("Input greater than 100, please enter a smaller number.")
  } else{
    removeGrid()
    createGrid(parseInt(input))
  }
  
}

function removeGrid(){
  const elements = document.querySelectorAll('.box');
  const container = document.querySelector(".container");
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

function resetGrid() {
  const elements = document.querySelectorAll('.box');

  elements.forEach(element => {
  element.style.backgroundColor = 'white';
  });
}

createGrid()
