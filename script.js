const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetGrid);


function resetGrid() {
    let choice = prompt('pick a number 1-100');
    let newGrid = parseInt(choice);
    if (newGrid > 100 || newGrid < 1) {
        return resetGrid();
    } else {
        clearGrid();
        initalizeGrid(newGrid);
    }

}

function clearGrid() {
    let pixels = container.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.remove())
}

function initalizeGrid(number) {
    let gridArea = (number * number);
    for (let i = 0; i < gridArea; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = `${640 / number}px`;
        pixel.style.height = `${640 / number}px`;
        container.appendChild(pixel);
    }

    let pixels = container.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = "black";
    }))
}

initalizeGrid(16);