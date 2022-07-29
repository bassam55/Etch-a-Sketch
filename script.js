// create a div and append to the grid container
var numOfBoxes = 12;
var boxDimentions = 960 / numOfBoxes;
var div = document.createElement("div");
div.style.border = "1px solid";
div.style.width = `${boxDimentions-4}px`;
div.style.height = `${boxDimentions-4}px`;
div.style.margin = "1px"
div.className = "box"

for (let i = 0; i < numOfBoxes; i++){
    for(let j = 0; j< numOfBoxes; j++){
        divClone = div.cloneNode(true);
        document.querySelector(".grid-container").appendChild(divClone);
    }
}

// on hover, change the color of the current hovered box
document.querySelectorAll(".box").forEach(box=>{
    box.addEventListener('mouseover',(e)=>{
        e.target.classList.add('hovered');
    })
})
