const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
let gridSize = 256;

for (let i = 0; i < gridSize; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    squareDiv.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = "black";
    })
    container.appendChild(squareDiv);
}

function resetGrid() {
    let choice = prompt('pick a number 1-100');
    let newGrid = parseInt(choice);
    if (newGrid > 100 || newGrid < 1) {
        return resetGrid();
    } else {
        // run clearGrid()
        gridSize = newGrid;
        //run buildGrid()
    }

}

function clearGrid() {

}

function buildGrid() {

}