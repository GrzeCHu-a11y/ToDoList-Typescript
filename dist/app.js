const input = document.querySelector("#name");
const button = document.querySelector("#add-task-button");
const ul = document.querySelector(".tasks-ul");
const tasks = [{ name: "ccc", completed: false }, { name: "cabv", completed: true }];
function render() {
    ul.innerText = "";
    tasks.forEach((task, id) => {
        const li = document.createElement("li");
        li.innerText = task.name;
        li.setAttribute("index", `${id}`);
        ul.appendChild(li);
        const taskButton = document.createElement("button");
        taskButton.classList.add("task-button");
        li.appendChild(taskButton);
        taskButton.innerText = task.completed ? "complete" : "uncomplete";
        const deleteTaskButton = document.createElement("button");
        deleteTaskButton.classList.add("delete-button");
        deleteTaskButton.setAttribute("index", `${id}`);
        deleteTaskButton.innerText = "delete";
        li.appendChild(deleteTaskButton);
        deleteTaskButton.addEventListener("click", (e) => {
            e.preventDefault();
            tasks.splice(id, 1);
            render();
        });
        taskButton.addEventListener("click", (e) => {
            e.preventDefault();
            if (task.completed === true) {
                taskButton.innerText = "uncomplete";
                task.completed = false;
            }
            else {
                taskButton.innerText = "complete";
                task.completed = true;
            }
        });
    });
}
function addTask(e) {
    e.preventDefault();
    if (input.value != "") {
        tasks.push({ name: input.value, completed: false });
    }
    else
        alert("input is empty");
    render();
}
button.addEventListener("click", addTask);
render();
