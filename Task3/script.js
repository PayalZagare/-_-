// JavaScript code for the To-Do App

// Get DOM elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const pendingList = document.getElementById('pending-list');
const completedList = document.getElementById('completed-list');

// Add event listener to the add button
addButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', completeTask);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    pendingList.appendChild(taskItem);

    taskInput.value = '';
  }
}

// Function to mark a task as completed
function completeTask(event) {
  const taskItem = event.target.parentNode;
  taskItem.classList.add('completed');
  completedList.appendChild(taskItem);
}

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.parentNode;
  taskItem.remove();
}
