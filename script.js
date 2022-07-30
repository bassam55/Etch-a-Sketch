// create a div and append to the grid container
var numOfBoxes = 12;
var boxDimentions = 256 / numOfBoxes;
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
document.querySelectorAll(".box").forEach(box=>{
    box.addEventListener('mouseover',(e)=>{
        if(e.target.style.backgroundColor.slice(-4, -1) < .1)
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        else{
            let currentOpacity = Number(e.target.style.backgroundColor.slice(-4, -1));
                console.log(currentOpacity);
                if (currentOpacity <= 0.9) {
                    e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    console.log(e.target.style.backgroundColor);
                }
        }
    })
})
