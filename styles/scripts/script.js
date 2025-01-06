// Get references to DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create task item
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    // Add task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => taskItem.remove());
    taskItem.appendChild(deleteButton);

    // Add click-to-complete functionality
    taskSpan.addEventListener('click', () => {
        taskSpan.parentElement.classList.toggle('completed');
    });

    // Add task to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}

// Attach event listener to "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Add support for "Enter" key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
