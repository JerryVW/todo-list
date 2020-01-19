let form = document.getElementById("add-form");
let itemList = document.getElementById("items");

// Add the ToDo element
document.getElementById("add-item").addEventListener("click", addItem);
document.querySelector("ul").addEventListener("click", removeOrChecked);


// Add item function
function addItem(e) {
    // In this function we get the user input, create the new element
    // and display the TODO item in the new element
    e.preventDefault();
    let newItem = document.getElementById("item").value;
    let li = document.createElement("li");
    li.innerHTML = `<button class="not-checked"></button><div class="list-item">${newItem}</div><button class="to-delete">X</button>`;
    itemList.appendChild(li);
} 

function removeOrChecked(e) {
    if(e.target.className === "to-delete"){
        removeItem(e);
    } else {
        checkedOff(e);
    }
}

function removeItem(e) {
    // In this function we will remove an item from the list
    if(e.target.classList.contains("to-delete")){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
    
}

function checkedOff(e) {
    // In this function we will change the check box color
    // and add a strikeThrough to the text
    if(e.target.classList.contains("not-checked")) {
        let li = e.target.innerHTML;
        //li.style.textDecoration = "line-through";
        console.log(li);
    }
}
