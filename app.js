//Select elements
const taskForm = document.getElementById('taskform');
const taskInput = document.getElementById('taskinput');
const taskList = document.getElementById('tasklist');

// Add event listener for the form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the task description
    const taskDescription = taskInput.value.trim();

    if (taskDescription) {
        // Create a new task item
        const newTask = document.createElement('li');
        newTask.textContent = taskDescription;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';

        // Add delete functionality
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        // Append the button to the task item
        newTask.appendChild(deleteButton);

        // Add the task to the list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
});
