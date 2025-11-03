// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const addBtn = document.querySelector('.add-btn');
const form = dialog.querySelector('form');
const input = form.querySelector('input');

function renderList() {
  ul.innerHTML = '';

  todoList.forEach(item => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const deleteBtn = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.id = `todo-${item.id}`;
    checkbox.checked = item.completed;

    label.htmlFor = checkbox.id;
    label.textContent = item.task;

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      console.log(todoList);
    });

    deleteBtn.addEventListener('click', () => {
      todoList = todoList.filter(todo => todo.id !== item.id);
      ul.removeChild(li);
      console.log(todoList);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  dialog.showModal();
  input.focus();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const task = input.value.trim();
  if (task === '') return;

  const newItem = {
    id: Date.now(),
    task,
    completed: false,
  };

  todoList.push(newItem);
  console.log(todoList);

  renderList();

  input.value = '';
  dialog.close();
});

renderList();
