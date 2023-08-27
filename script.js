let size = 16
let board = document.querySelector(".container-box");

board.style.gridTemplateColumns = `repeat(16, 1fr)`;
board.style.gridTemplateRows = `repeat(16, 1fr)`;
for(let i = 0; i < 256; i++)
{
    let squares = document.createElement('div')
    board.insertAdjacentElement("beforeend", squares)
    squares.addEventListener("mouseover", function(){
        squares.style.backgroundColor = `${color}`;
        squares.style.transition = "1s"
    }
    )
}
function eraser()
{
    let erase = document.querySelector(".erase")
    erase.addEventListener("click", function()
    {
        color = "white"
    })
}
function changecol(){
    let col = document.querySelector(".color");
    col.addEventListener("input" ,function(c){
        color = c.target.value;
    }
    );
}
function all()
{
    eraser()
    changecol()

}
let color = "black"
all()

