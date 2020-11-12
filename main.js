//cache main container div

const container = document.getElementById('container');



//create 12 divs and attach them to #container

for (let i = 0;i < 256;i++){
    const div = document.createElement('div');
    div.innerText = i
    div.className = "gridItem"
    container.appendChild(div);
}

//cache the newly created gridItems

const gridItem_div = document.getElementsByClassName('gridItem');
console.log(typeof(gridItem_div));

//add event listener to created div elements applies class divChanged

 gridItem_div.forEach(key => key.addEventListener('mouseenter', (e) => {
     console.log(e.target);
 }));

//test

