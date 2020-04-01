var todoList = document.querySelector('#todoList');
var button = document.querySelector('#addTodoButton');
var textInput = document.querySelector('#addTodoText');

var todos = JSON.parse(localStorage.getItem('todosList')) || [];

function renderTodos() {
  todoList.innerHTML = '';

  for (const todo of todos) {
    var li = document.createElement('li');
    var textElement = document.createTextNode(todo);


    var deleteTodoText = document.createTextNode('Excluir')
    var deleteTodoLink = document.createElement('a')

    deleteTodoLink.setAttribute('href', '#');

    deleteTodoLink.appendChild(deleteTodoText);

    var pos = todos.indexOf(todo);

    deleteTodoLink.setAttribute('onClick', 'deleteTodo(' + pos + ')')

    li.appendChild(textElement);
    li.appendChild(deleteTodoLink);
    todoList.appendChild(li);
  }
  saveToStorage();
}

function addTodo(){
  todos.push(textInput.value);

  textInput.value = '';
  renderTodos();
}

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
}

function saveToStorage() {
  localStorage.setItem('todosList', JSON.stringify(todos));
}

button.onclick = addTodo;

renderTodos();