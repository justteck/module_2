import {
  form,
  toDoTableBody,
} from './getPageElements.js';

import {getStorage} from './controlStorage.js';

import {createRow} from './createElement.js';

// RENDER MODAL
const renderModalLogin = () => {
  const modal = `
  <div class="overlay active">
  <div class="container">
    <p class="title">Авторизация</p>
    <form name="auth-form" class="auth-form">
      <input type="text" name="username" placeholder="Ваше имя" required >
      <button class="form_auth_button" type="submit"
      name="submit">Войти</button>
    </form>
  </div>
</div>
  `;

  document.body.insertAdjacentHTML('beforeend', modal);
};

// RENDER PRIORITY LIST
const renderPriority = () => {
  const priority = `
    <select id="priority" class="form-select priority" name="priority">
      <option value="table-light" selected>Обычная</option>
      <option value="table-warning">Важная</option>
      <option value="table-danger">Срочная</option>
    </select>
  `;

  form.firstElementChild.insertAdjacentHTML('afterend', priority);
};

// RENDER LIST
const renderToDo = (userName) => {
  const rowsArray = getStorage(userName).map(item => createRow(item));
  toDoTableBody.append(...rowsArray);
};

// RENDER LIST NUMBERS
const renderNumbers = () => toDoTableBody.querySelectorAll('tr').
    forEach((row, index) => row.firstElementChild.textContent = (index + 1));

// RENDER EXIT
const renderExit = () => {
  const container = document.createElement('div');
  const exitBtn = document.createElement('button');
  exitBtn.classList.add('btn', 'btn-secondary', 'exit');
  exitBtn.textContent = 'Выйти из профиля';
  container.append(exitBtn);

  document.querySelector('.table-wrapper').append(container);
};

export {
  renderModalLogin,
  renderPriority,
  renderToDo,
  renderNumbers,
  renderExit,
};

