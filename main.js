//Create 
const container = document.querySelector('#container');

//Select the button Div
const button = document.querySelector('#button');

function createGrid(lateralSize) {
    for (var i = 0; i < lateralSize**2; i++) {
        let content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    }
    if (lateralSize) {
        container.getElementsByClassName.gridTemplateColumns = "repeat(" + lateralSize + ",1fr)";
    }
    const box = document.querySelectorAll('div.content');
    box.forEach((box) => {
        box.addEventListener('mouseover', changeColor);
    });
    let changeLight = 0;
    let decreasingLight = 0;
    
    function changeColor(e) {
        e.target.style.background = "rgb(" + defaultRandomColor(changeLight, changeLight, changeLight) + ")";
        if ((changeLight < 255 && decreasingLight == 0) || changeLight == 0) {
            changeLight ++;
            decreasingLight = 0;
        } else {
            changeLight --;
            decreasingLight = 1
        }
        console.log(changeLight);
    }
}

createGrid (16);

function clear() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let gridLateralSize = prompt("How many squares do you need, from 1 to 100?");
    while (gridLateralSize < 1 || gridLateralSize > 100) {
        gridLateralSize = prompt("How many squares do you need, from 1 to 100?");
    }
    createGrid(gridLateralSize);
}

function defaultRandomColor(randomR = Math.floor(Math.random() * 255),
                            randomG = Math.floor(Math.random() * 255),
                            randomB = Math.floor(Math.random() * 255)) {
                                return randomR + ", randomG + ", + randomB; 
                            }
