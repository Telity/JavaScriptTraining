let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

pbCol.textContent = "Tryk mig for set color";

let inpColorValue = document.querySelector(".inpColorValue");
console.log(inpColorValue);

const inpColorPicker = document.getElementById("inpColorPicker");
console.log(inpColorPicker);

const pTags = document.getElementsByTagName("p");
console.log(pTags);

let pArray = Array.from(pTags);

pArray.forEach(increaseFont);

const resetP = document.querySelector(".resetP");
console.log(resetP);

const pTag = document.querySelectorAll("p");
console.log(pTag);

const plusP = document.querySelector(".increaseP");
console.log(plusP);

const minusP = document.querySelector(".decreaseP");
console.log(minusP);

let bdy = document.querySelector("body");
console.log(bdy);

function setBackgroundColor(){
    let col = inp.value;
    pbCol.style.color = col;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function useColorPicker(){
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function increaseFont(element){
    let fontSize = element.style.fontSize;
    console.log(fontSize);
    element.style.fontSize = 10 + "px";
    fontSize = element.style.fontSize;
    console.log(fontSize);
}

function increaseP(){
    pTag.forEach(p => {
        let size = p.style.fontSize;
        size = parseInt(size);
        p.style.fontSize = (size + 1) + "px";
    })
}

function descreaseP(){
    pTag.forEach(p => {
        let size = p.style.fontSize;
        size = parseInt(size);
        p.style.fontSize = (size - 1) + "px";
    })
}

pbCol.addEventListener('click', setBackgroundColor);
document.addEventListener("keyup", setBackgroundColor);
inpColorPicker.addEventListener("input", useColorPicker);
plusP.addEventListener("click", increaseP);
minusP.addEventListener("click", descreaseP);