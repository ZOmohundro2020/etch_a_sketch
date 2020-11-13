//cache main container div and button

const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

//set initial grid size
let gridSize = 16;


//create 12 divs and attach them to #container

for (let i = 0;i < gridSize**2;i++){
    const div = document.createElement('div');
    div.innerText = i;
    div.className = "gridItem";
    container.appendChild(div);
}

//cache the newly created gridItems

const gridItem_div = document.getElementsByClassName('gridItem');

//add event listener to created div elements applies class divChanged

Array.from(gridItem_div).forEach(function (e){
    e.addEventListener('mouseenter', function (e) {
        //console.log(e.target);
        this.classList.add("divChanged");
    });
});

//add event listener for button to reset the board

// original anon function
// resetButton.addEventListener('click', () => {
//     console.log("button clicked");
// });

//with named function instead

resetButton.addEventListener('click', buttonClicked);

//when resetButton is clicked, remove class divChanged

function buttonClicked() {
    Array.from(gridItem_div).forEach(function (e){
        e.classList.remove("divChanged");
    });

}



//test
// this.gridButtonItems.forEach(function (item, idx) {
//     item.addEventListener('click', function () {
//         self._showContent(idx);
//     });
// });
