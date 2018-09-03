// `<div id="square-type1"></div>`
// let possibleElements = ['square-type1'];
let blocksContainer = document.getElementById('blocks-container');
// let randValue = Math.floor(Math.random() * 5);
 
let ele = document.createElement("div");
ele.id = 'square-type1';
blocksContainer.appendChild(ele);

let i = 1;
let j = 3;
let imax = 19;
let jmax = imax-2;
let refreshInterval = setInterval(function () {
    // let squareRow = ele.style.gridRow ;
    i++;
    j++;
    ele.style.gridRow = `${i}/${j}`;
    if (i===imax){
        clearInterval(refreshInterval)
    }
    // ele.style.grid-row=; 
}, 300);



