document.addEventListener("DOMContentLoaded", () => {
  const tasksList = [];

  const createTaskButton = document.getElementById("createTaskButton");

  createTaskButton.addEventListener("click", createNewTask);
  function createNewTask() {
    const taskList = document.getElementById("taskList");
    const newTaskItem = document.createElement("li");
    newTaskItem.classList.add("task-item");
    newTaskItem.innerHTML = `
      <input class="checkbox" type="checkbox" />
      <input class="task-text" type="text" />
      <button type="button">
          <img class="edit-icon" src="images/edit-icon.png" alt="edit" />
      </button>
      <button type="button">
          <img class="remove-icon" src="images/delete-icon.png" alt="remove" />
      </button>
    `;
    tasksList.push({
      id: crypto.randomUUID,
      name: "",
      isCompleted: false,
      priority: "",
    });

    taskList.appendChild(newTaskItem);
  }

  document
    .getElementById("taskList")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("remove-icon")) {
        const taskItem = event.target.closest("li");
        if (taskItem) {
          taskItem.remove();
        }
      }
    });

  function removeTask(taskItem) {}
});
