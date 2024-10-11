// koodit.js
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-todo');
    const newTodoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');
    const errorMessage = document.getElementById('error-message');

    // Lisää tehtävä listalle
    addButton.addEventListener('click', function () {
        const newTodoText = newTodoInput.value.trim();

        if (newTodoText === '') {
            showErrorMessage('Tehtävä ei voi olla tyhjä');
            newTodoInput.classList.add('error');
        } else if (newTodoText.length < 3) {
            showErrorMessage('Tehtävän tulee olla vähintään 3 merkkiä pitkä');
            newTodoInput.classList.add('error');
        } else {
            addTodoItem(newTodoText);
            newTodoInput.value = '';
            errorMessage.textContent = '';
            newTodoInput.classList.remove('error');
        }
    });

    // Näytä virheviesti
    function showErrorMessage(message) {
        errorMessage.textContent = message;
    }

    // Lisää uusi tehtävä listaan
    function addTodoItem(todoText) {
        const li = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Valmis';
        completeButton.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Poista';
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(li);
        });

        li.appendChild(textSpan);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
