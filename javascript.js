
const inputbox = document.getElementById("search-box");
const lists = document.getElementById("list-container");


function myfun() {
    if (inputbox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        lists.appendChild(li);

        let span = document.createElement("span");
        li.appendChild(span);
    }
    inputbox.value = "";

    saveData()
}


lists.addEventListener("click", function (element) {
    if (element.target.tagName === "LI") {
        element.target.classList.toggle("checked");
        saveData();
    }
    else if (element.target.tagName === "SPAN") {
        element.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", lists.innerHTML);
}
function showtask() {
    lists.innerHTML = localStorage.getItem("data");
}
showtask();