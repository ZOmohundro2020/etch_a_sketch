//cache main items

const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');
const gridItem_div = document.getElementsByClassName('gridItem');



//set initial grid size
var gridSize = 16;


//set the CSS grid based on gridSize

function setGrid(gridSize){
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}




//create ${gridSize} divs and attach them to #container
function makeDivs(){
    
    clearDivs();
    for (let i = 0;i < gridSize**2;i++){
        const div = document.createElement('div');
        //div.innerText = i; //debug to see numbers in divs
        div.className = "gridItem";
        container.appendChild(div);
    }
    addListeners();
}



//add event listener to created div elements that applies class divChanged when mouse enters div
function addListeners(){
    

    Array.from(gridItem_div).forEach(function (e){
        e.addEventListener('mouseenter', function (e) {
            //console.log(e.target);
            this.classList.add("divChanged");
        });
    });
}



//add event listener for button to reset the board

resetButton.addEventListener('click', buttonClicked);

//when resetButton is clicked, remove class divChanged
//then get a new gridSize from the user
//then start the main loop by making divs -- makeDivs()

function buttonClicked() {
    Array.from(gridItem_div).forEach(function (e){
        e.classList.remove("divChanged");
    });
    let getGridSize = prompt("Please enter a new grid size (1-100)");
    gridSize = getGridSize;

    setGrid(gridSize);
    makeDivs();
}

//function that removes all divs to clear thigns out before changing sizes

function clearDivs(){
    container.innerHTML = '';
}

//main initlization
setGrid(gridSize);
makeDivs();
addListeners();