const colArray = ["red", "green","yellow", "blue", "#ac6c6c"];

const ddCol = document.querySelector("#ddColor");
console.log(ddCol);

const pbFillDropdown = document.getElementById("pbFillDropdown");

let bdy = document.querySelector("body");

let addCol = document.querySelector("#addCol");

function addColors (btn) {
    ddCol.innerHTML = ""
    colArray.forEach(fillDropdown);
    console.log(document.querySelectorAll("*"));
}

function fillDropdown(item){
    const el = document.createElement("option"); //what we are doing here is creating the option element
    // which is used to fill the dropdown.
    el.textContent = item;
    ddCol.appendChild(el);

}

function setBackgroundColor(){
    const selindex = ddCol.selectedIndex;
    const selectedOption = ddCol.options[selindex];
    const color = selectedOption.innerText;
    bdy.style.backgroundColor = color;
}

function addColor(){
    const se = addCol.value;
    colArray.push(se);
    addColors();
}

ddCol.addEventListener("change", setBackgroundColor);
pbFillDropdown.addEventListener("click", addColors);
addCol.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        addColor();
    }
});