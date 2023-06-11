window.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');
  const taskCount = document.getElementById('taskCount');

  let totalTasks = 0;

  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const listItem = createTaskItem(taskText);
      taskList.appendChild(listItem);
      taskInput.value = '';
      updateTaskCount(1);
    }
  });

  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
      const listItem = event.target.closest('li');
      taskList.removeChild(listItem);
      updateTaskCount(-1);
    } else if (event.target.classList.contains('checkbox')) {
      const listItem = event.target.closest('li');
      listItem.classList.toggle('completed');
    }
  });

  function createTaskItem(taskText) {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    listItem.appendChild(checkbox);

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    taskTextElement.classList.add('task-text');
    listItem.appendChild(taskTextElement);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    listItem.appendChild(deleteButton);

    return listItem;
  }

  function updateTaskCount(change) {
    totalTasks += change;
    taskCount.textContent = `Total Tasks: ${totalTasks}`;
  }
});
