window.onload = function(e) {
    document.getElementById("add-item").addEventListener("click", addItem);
    const listArray = JSON.parse(localStorage.getItem("list-item")) || [];
    listArray.forEach(function(item) {
        createListItem(item);
    });
};

function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById("item").value;
    createListItem(newItem); 
    const listArray = JSON.parse(localStorage.getItem("list-item")) || [];
    listArray.push(newItem);
    localStorage.setItem("list-item", JSON.stringify(listArray));
    newItem = document.getElementById("item").value = "";
}

function createListItem(newItem) {
    let itemList = document.getElementById("items");
    const li = document.createElement("li");

    li.appendChild(createCheckBox());
    li.appendChild(createTextDiv(newItem));
    li.appendChild(createDeleteButton());
    itemList.appendChild(li);
} 

function createCheckBox() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "not-checked";
    checkbox.addEventListener("click", function(e) {
        if(e.target.classList.contains("not-checked")) {
            if(e.target.nextSibling.style.textDecoration !== "line-through") {
                e.target.nextSibling.style.textDecoration = "line-through";
            } else {
                e.target.nextSibling.style.textDecoration = "none";
            }
        }
    })

    return checkbox;
}

function createTextDiv(newItem) {
    const div = document.createElement("div");
    div.className = "list-item";
    div.textContent = newItem;

    return div;
}

function createDeleteButton() {
    const button = document.createElement("button");
    button.className = "to-delete";
    button.textContent = "X";
    button.addEventListener("click", function(e) {
        if(e.target.classList.contains("to-delete")){
            let itemList = document.getElementById("items");
            const li = e.target.parentElement;
            itemList.removeChild(li);
            const listArray = JSON.parse(localStorage.getItem("list-item")) || [];
            let arrayList = listArray.indexOf(e.target.previousSibling.textContent);
            listArray.splice(arrayList, 1);
            localStorage.setItem("list-item", JSON.stringify(listArray));
        }
    });

    return button;
}