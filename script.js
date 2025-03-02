document.addEventListener("DOMContentLoaded", () => {
  const tasksList = [];

  //create task button
  const createTaskButton = document.getElementById("createTaskButton");

  createTaskButton.addEventListener("click", createNewTask);
  function createNewTask() {
    const taskList = document.getElementById("taskList");
    const newTaskItem = document.createElement("li");
    newTaskItem.classList.add("task-item");
    newTaskItem.innerHTML = `
      <input class="checkbox" type="checkbox" />
      <span class="span-task__text" type="text"></span>
      <input class="task-text" type="text" />
      <button type="button" onclick="">
        <img
          type="button"
          class="save-icon"
          src="images/save-icon.png"
          alt="save"
        />
      </button>
      <button type="button">
          <img class="edit-icon" src="images/edit-icon.png" alt="edit" />
      </button>
      <div class="priority">
        <button type="button">
          <img
            class="priority-icon"
            type="button"
            src="images/priority-icon.png"
            alt="priority"
          />
        </button>
        <div class="priority-content" id="priorityID">
          <button>Hight</button>
          <button>Medium</button>
          <button>Low</button>
        </div>
      </div>
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
});

//save task button
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("save-icon")) {
    saveTask(event.target.closest("li"));
  }
});

function saveTask(taskItem) {
  const inputSave = taskItem.querySelector(".task-text");
  const spanSave = taskItem.querySelector(".span-task__text");
  const editButton = taskItem.querySelector(".edit-icon");
  const saveButton = taskItem.querySelector(".save-icon");

  if (inputSave.style.display !== "none") {
    spanSave.textContent = inputSave.value;
    inputSave.style.display = "none";
    spanSave.style.display = "inline";
    editButton.style.display = "inline";
    saveButton.style.display = "none";
    editButton.src = "images/edit-icon.png";
  }
}

//edit task button
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit-icon")) {
    editTask(event.target.closest("li"));
  }
});
function editTask(taskItem) {
  const inputSave = taskItem.querySelector(".task-text");
  const spanSave = taskItem.querySelector(".span-task__text");
  const editButton = taskItem.querySelector(".edit-icon");
  const saveButton = taskItem.querySelector(".save-icon");

  if (inputSave.style.display == "none") {
    inputSave.style.display = "inline";
    spanSave.style.display = "none";
    editButton.style.display = "none";
    saveButton.style.display = "inline";
    saveButton.src = "images/save-icon.png";
  }
}

//remove task button
document.getElementById("taskList").addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-icon")) {
    const taskItem = event.target.closest("li");
    if (taskItem) {
      taskItem.remove();
    }
  }
});

//priority button
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("priority-icon")) {
    priority(event.target.closest("li"));
  }
});

function priority(taskItem) {
  const priorityContent = taskItem.querySelector(".priority-content");
  const hightPriority = taskItem.querySelector(".hight-content");
  const mediumPriority = taskItem.querySelector(".medium-content");
  const lowPriority = taskItem.querySelector(".low-content");
}
