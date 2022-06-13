function addTaskOnList() {
    const taskList = document.getElementById("tasks");
    const input = document.getElementById("task-input");

    if (input.value != "") {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("name", `task_${taskList.childElementCount}`);
        checkBox.setAttribute("id", `task_${taskList.childElementCount}`);

        const label = document.createElement("label");
        label.setAttribute("for", `task_${taskList.childElementCount}`);
        label.innerHTML = input.value;

        taskItem.appendChild(checkBox);
        taskItem.appendChild(label);
        taskList.appendChild(taskItem);

        input.value = "";
    }
}
