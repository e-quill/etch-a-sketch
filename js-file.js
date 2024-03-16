function createGrid(squares = 16){
  for (i = 0; i < squares; i++){
    for (j = 0; j < squares; j++){
      const container = document.querySelector(".container");
      const div = document.createElement("div");
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
      });
      div.classList.add("box");
      container.appendChild(div);
    }
  }
}

function promptDimensions() {
  let input = prompt("Number of Square Per Side (Maximum: 100)")
  createGrid(input)
}

function resetGrid() {
  const elements = document.querySelectorAll('.box');

  elements.forEach(element => {
  element.style.backgroundColor = 'white';
  });
}

createGrid()
