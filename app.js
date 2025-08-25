//simple todo app

const form = document.querySelector('form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
  input.value = '';
});
