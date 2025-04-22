const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something first!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        let span = document.createElement("span");
        span.textContent = "\u00d7";  // × symbol for delete
        li.appendChild(span);

        listContainer.appendChild(li);
        saveData(); // Save list to localStorage
    }
    inputBox.value = '';
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Save task list to localStorage
function saveData() {
    localStorage.setItem("taskList", listContainer.innerHTML);
}

// Load tasks on page load
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("taskList") || "";
}
showTasks();
