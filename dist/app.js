const input = document.querySelector("#name");
const button = document.querySelector("#add-task-button");
const ul = document.querySelector(".tasks-ul");
const tasks = [{ name: "ccc", completed: false }];
function render() {
    ul.innerText = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.innerText = task.name;
        ul.appendChild(li);
    });
}
button.addEventListener("click", function addTask(e) {
    e.preventDefault();
    tasks.push({ name: input.value, completed: false });
    render();
});
render();
