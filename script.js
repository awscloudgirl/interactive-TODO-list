function addTask() {
    var input = document.getElementById('newTask');
    var newTask = input.value;
    var list = document.getElementById('taskList');
    var listItem =document.createElement('li');
    listItem.textContent = newTask;
    var deleteBtn =document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() { listItem.remove(); };
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
    input.value = "";
}
