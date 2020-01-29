window.onload = doItNow;

const listArray = JSON.parse(localStorage.getItem("list-item")) || [];

function doItNow() {
    document.getElementById("add-item").addEventListener("click", addItem);
    document.querySelector("ul").addEventListener("click", removeOrChecked);
    listArray.forEach(function(item) {
        createListItem(item);
    });
}

function createListItem(newItem) {
    let itemList = document.getElementById("items");
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "not-checked";
    li.appendChild(input);
    const div = document.createElement("div");
    div.className = "list-item";
    div.textContent = newItem;
    li.appendChild(div);
    const button = document.createElement("button");
    button.className = "to-delete";
    button.textContent = "X";
    li.appendChild(button);
    itemList.appendChild(li);
} 

function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById("item").value;
    createListItem(newItem); 
    listArray.push(newItem);
    localStorage.setItem("list-item", JSON.stringify(listArray));
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
    if(e.target.classList.contains("to-delete")){
        let itemList = document.getElementById("items");
        const li = e.target.parentElement;
        itemList.removeChild(li);
        let arrayList = listArray.indexOf(e.target.previousSibling.textContent);
        listArray.splice(arrayList, 1);
        localStorage.setItem("list-item", JSON.stringify(listArray));
    };
}

function checkedOff(e) {
    if(e.target.classList.contains("not-checked")) {
        let li = e.target.nextSibling.style.textDecoration = "line-through";
    }
}
