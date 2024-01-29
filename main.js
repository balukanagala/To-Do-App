const taskInput = document.querySelector("#task");
const toDoList = document.querySelector("#to-do");

// Load tasks from local storage when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("You must write something!");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${taskValue}
      <i class="fa-solid fa-xmark"></i>
    `;
    toDoList.appendChild(listItem);

    // Save tasks to local storage
    saveTasksToLocalStorage();

    taskInput.value = "";
    listItem.addEventListener("click", function () {
      this.classList.toggle("done");
      // Save tasks to local storage after marking as done
      saveTasksToLocalStorage();
    });

    listItem.querySelector("i").addEventListener("click", function () {
      listItem.remove();
      // Save tasks to local storage after removing a task
      saveTasksToLocalStorage();
    });
  }
}

function clearTasks() {
  toDoList.innerHTML = "";
  // Clear tasks from local storage
  localStorage.removeItem("tasks");
}

function saveTasksToLocalStorage() {
  const tasks = document.querySelectorAll("#to-do li");
  const tasksArray = Array.from(tasks).map((task) => task.innerText);
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${task} <i class="fa-solid fa-xmark"></i>`;
    toDoList.appendChild(listItem);

    listItem.addEventListener("click", function () {
      this.classList.toggle("done");
      saveTasksToLocalStorage();
    });

    listItem.querySelector("i").addEventListener("click", function () {
      listItem.remove();
      saveTasksToLocalStorage();
    });
  });
}
