const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]];

const colorObjects = [{"name": "red", "id": "#bd6066"}, {"name": "blue", "id": "#5b7ad2"}];

const ddCol2 = document.querySelector("#ddColor2");
console.log(ddCol2);

const pbFillDropdown2 = document.getElementById("pbFillDropdown2");

function addColo (btn) {
    ddCol2.innerHTML = ""
    colorObjects.forEach(fillObj);
    console.log(document.querySelectorAll("*"));
}

function fill(item){
    const el = document.createElement("option"); //what we are doing here is creating the option element
    // which is used to fill the dropdown.
    el.textContent = item[0];
    el.value = item[1];
    ddCol2.appendChild(el);

}

function fillObj(item){
    const el = document.createElement("option");
    el.textContent = item.name;
    el.value = item.id;
    ddCol2.appendChild(el);
}

function setBackgroundColor2(){
    let x = ddCol2.selectedIndex;
    const xo = ddCol2.options[x];
    const color = xo.value;
    bdy.style.backgroundColor = color;

}

ddCol2.addEventListener("change", setBackgroundColor2);
pbFillDropdown2.addEventListener("click", addColo);