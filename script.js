window.onload = doItNow;

let form = document.getElementById("add-form");
let itemList = document.getElementById("items");

function doItNow() {
    document.getElementById("add-item").addEventListener("click", addItem);
    document.querySelector("ul").addEventListener("click", removeOrChecked);
}

// Add item function
function addItem(e) {
    // In this function we get the user input, create the new element
    // and display the TODO item in the list.
    e.preventDefault();
    let newItem = document.getElementById("item").value;
    let li = document.createElement("li");
    li.innerHTML = `<button class="not-checked"></button><div class="list-item">${newItem}</div><button class="to-delete">X</button>`;
    itemList.appendChild(li);
    newItem = document.getElementById("item").value = "";
} 

function removeOrChecked(e) {
    if(e.target.className === "to-delete"){
        removeItem(e);
    } else {
        checkedOff(e);
    }
}

function removeItem(e) {
    // In this function we will remove an item from the list.
    if(e.target.classList.contains("to-delete")){
        const li = e.target.parentElement;
        itemList.removeChild(li);
    }
    
}

function checkedOff(e) {
    // In this function we will change the check box color
    // and add a strikeThrough to the text.
    if(e.target.classList.contains("not-checked")) {
        const li = e.target.nextSibling.style.textDecoration = "line-through";
        li = e.target.style.backgroundColor = "rgb(0, 255, 13)";
    }
}
