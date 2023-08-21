
let board = document.querySelector(".container-box");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i < 256; i++)
{
    let squares = document.createElement('div')
    squares.style.backgroundColor = "grey"
    board.insertAdjacentElement("beforeend", squares)
}

