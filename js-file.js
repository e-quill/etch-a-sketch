function createGrid(){
  for (i = 0; i < 16; i++){
    for (j = 0; j < 16; j++){
      const container = document.querySelector(".container");
      const div = document.createElement("div");
      div.classList.add("box");
      container.appendChild(div);
    }
  }
}

createGrid()
