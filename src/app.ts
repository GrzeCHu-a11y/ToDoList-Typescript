const input: HTMLInputElement = document.querySelector("#name");
const button: HTMLButtonElement = document.querySelector("#add-task-button")
const ul: HTMLElement = document.querySelector(".tasks-ul")

interface Task {
    name: string;
    completed: boolean;
}

const tasks: Task[] = [{name: "ccc", completed: false}]

function render() {
    ul.innerText = ""
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.innerText = task.name
        ul.appendChild(li)
    });
}

button.addEventListener("click", function addTask(e) {
    e.preventDefault();
    tasks.push({name: input.value, completed: false})
    render()
})


render()