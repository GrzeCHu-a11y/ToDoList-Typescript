const input: HTMLInputElement = document.querySelector("#name");
const button: HTMLButtonElement = document.querySelector("#add-task-button")
const ul: HTMLElement = document.querySelector(".tasks-ul")

interface Task {
    name: string;
    completed: boolean;
}

const tasks: Task[] = [{name: "ccc", completed: false}, {name: "cabv", completed: true}]

function render() {
    ul.innerText = ""
    tasks.forEach((task, id: number) => {
        const li = document.createElement("li");
        li.innerText = task.name
        li.setAttribute("index", `${id}`)
        ul.appendChild(li)

        const taskButton: HTMLButtonElement = document.createElement("button");
        taskButton.classList.add("task-button")
        taskButton.setAttribute("index", `${id}`)
        li.appendChild(taskButton);

        taskButton.innerText = task.completed ? "complete" : "uncomplete";
        taskButton.addEventListener("click", (e) => {
            e.preventDefault()
            if(task.completed === true) {
                taskButton.innerText = "uncomplete"
                task.completed = false
            } else {
                taskButton.innerText = "complete"
                task.completed = true
            }
        })

    });
}

function addTask(e: any) {
    e.preventDefault();
    tasks.push({name: input.value, completed: false})
    render()
}







button.addEventListener("click", addTask) 
   




render()