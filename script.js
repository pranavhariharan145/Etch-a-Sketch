let size = 16
let board = document.querySelector(".container-box");
board.style.gridTemplateColumns = `repeat(16, 1fr)`;
board.style.gridTemplateRows = `repeat(16, 1fr)`;
for(let i = 0; i < 256; i++)
{
    let squares = document.createElement('div')
    squares.classList.add('smbox');
    board.insertAdjacentElement("beforeend", squares)
    squares.addEventListener("mouseover", function(){
        squares.style.backgroundColor = `${color}`;
        squares.style.transition = "0.5s"
    }
    )
}

function chwidth()
{
    let remove = document.querySelector(".width")
    remove.addEventListener('click', function()
    {
        let width = prompt("Enter the no of squares(width) max: 100")
        const boxes = document.querySelectorAll('.smbox');
        boxes.forEach(smbox => {
            smbox.remove()})
                let board = document.querySelector(".container-box");
                board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
                board.style.gridTemplateRows = `repeat(${width}, 1fr)`;
                for(let i = 0; i < width*width; i++)
                {
                    let squares = document.createElement('div')
                    squares.classList.add('smbox');
                    board.insertAdjacentElement("beforeend", squares)
                    squares.addEventListener("mouseover", function(){
                    squares.style.backgroundColor = `${color}`;
                    squares.style.transition = "0.5s"
                }
            )
        }
        
    })
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
        document.querySelector(".color-palette").style.backgroundColor = `${color}`;
    }
    );
}
function write()
{
    let write = document.querySelector(".write")
    write.addEventListener("click", function(){
        color = "black"
        document.querySelector(".color-palette").style.backgroundColor = "black";
    })
}
function resetboard()
{
    const clear = document.querySelector('.clear')
    clear.addEventListener('click', function()
    {
        const boxes = document.querySelectorAll('.smbox');
        boxes.forEach(smbox => {
            smbox.style.backgroundColor = "white";
        }
        )
    })
}
function all()
{
    eraser()
    changecol()
    write()
    resetboard()
    chwidth()
}
let color = "black"
all()


