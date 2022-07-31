/**
 * This program contains the source code for a sketch project
 * You can move your cursor on the sketch to create awesome drawings
 */

/**
 * Costants
 */
const container = document.querySelector('.grid-container');
const slider = document.querySelector("#myRange");

renderpixels(slider.value);

/**
 * render pixels of the grid based on the slider size
 *
 * @param {pixelSize} how large the pixel is based on the slider value 
 */
function renderpixels(pixelSize){
    // create a div and append to the grid container
    var numOfBoxes = pixelSize;
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
    //adds event listener to each pixel in the grid
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

// event that triggers pixelSize function when the slider value changes
slider.addEventListener('click', pixelSizeChange);

/**
 * Function that changes the size of the pixels when the slider moves
 */
function pixelSizeChange(){
    let gridPixelsDelete = container.querySelectorAll('div');
    gridPixelsDelete.forEach(gridPixel => gridPixel.remove());
    renderpixels(slider.value);
}



/**
 * Function that colors each pixel in the grid when the mouse passes over it
 */
function colorGrid(){
    console.log("color the grid")
    let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
    if(currentOpacity == 0)
        this.style.backgroundColor = `rgba(0, 0, 0, .2)`
    else if (currentOpacity <= 1) {
            this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.2})`;
    }
}
