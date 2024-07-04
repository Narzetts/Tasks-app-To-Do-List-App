let taskList = [];

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();
    if (task !== '') {
        taskList.push({ taskName: task, checked: false });
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

function toggleCheck(index) {
    taskList[index].checked = !taskList[index].checked;
    renderTasks();
}

function renderTasks() {
    let taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';
    taskList.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span style="text-decoration: ${task.checked ? 'line-through' : 'none'};" onclick="toggleCheck(${index})">${task.taskName}</span>
            <button class="checklist-btn" onclick="toggleCheck(${index})">${task.checked ? 'Uncheck' : 'Check'}</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        li.style.opacity = '0';
        li.style.transform = 'translateY(-10px)';
        taskListElement.appendChild(li);
        setTimeout(() => {
            li.style.opacity = '1';
            li.style.transform = 'translateY(0)';
        }, 10);
    });
}


document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
