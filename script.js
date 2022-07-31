const container = document.querySelector('.grid-container');
// create a div and append to the grid container
var numOfBoxes = 64;
var boxDimentions = 384 / numOfBoxes;
var div = document.createElement("div");
// div.style.border = "1px solid";
div.style.width = `${boxDimentions}px`;
div.style.height = `${boxDimentions}px`;
// div.style.margin = "1px"
div.className = "box"

for (let i = 0; i < numOfBoxes; i++){
    for(let j = 0; j< numOfBoxes; j++){
        divClone = div.cloneNode(true);
        document.querySelector(".grid-container").appendChild(divClone);
    }
}

// on hover, change the color of the current hovered box
// var gridpixel = document.querySelectorAll(".box");
// gridpixel.forEach(gridpixel=>gridpixel.addEventListener('mouseover',colorGrid()))

var gridPixels = container.querySelectorAll('div');
gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));

function colorGrid(){
    let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
    if(currentOpacity == 0)
        this.style.backgroundColor = `rgba(0, 0, 0, .1)`
    else if (currentOpacity <= 0.9) {
            this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
    }
}