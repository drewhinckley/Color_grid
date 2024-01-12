const redButtonClicked = document.getElementsByClassName('red-button-pressed')
const coloredBoxRed = document.getElementsByClassName("colored-box-red");
const redButton = document.getElementsByClassName("red-button");
const grid = document.getElementById("game-grid");
const resetButton = document.getElementsByClassName("reset-button");
const coloredBox = document.getElementsByClassName("colored-box");
let currentColor = 'red';

const colorButtons = ['red', 'blue', 'green', 'yellow', 'white', 'black', 'brown']


const createBoxes = (boxCount) => {
    for (let i = 0; i < boxCount; i++) {
        const newBox = document.createElement("div");
        newBox.classList.add(`box`);
        newBox.textContent = '';
        newBox.id = `box-${i}`;
        newBox.addEventListener("click", () => {
            newBox.classList.contains(currentColor) ?  newBox.classList.remove(currentColor) :  newBox.classList.add(currentColor)
            
        })
        grid.appendChild(newBox);      
    }
}

const createColorButtons = () => {
    const rectangle = document.getElementById('rectangle');
    console.log(rectangle)
    for (let i = 0; i < colorButtons.length; i++) {
        const newButton = document.createElement("button");
        newButton.classList.add(`${colorButtons[i]}-button`);
        newButton.addEventListener('click', () => {
            currentColor = colorButtons[i]
            console.log('currentColor: ' + currentColor)
        });
        rectangle.appendChild(newButton);
        
    }
}



createBoxes(900);
createColorButtons();

// const redButtonPressed = () => {

//     redButton.addEventListener('click', () => {
//         if (redButton.classList.contains('red-button')) {
//             redButton.classList.contains(redButtonClicked) ? redButton.classList.remove(redButtonClicked) : redButton.classList.add(redButtonClicked);
//         };
//     });
// };
// redButtonPressed();




