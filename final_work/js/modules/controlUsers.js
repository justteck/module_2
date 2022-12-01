import {
  renderToDo,
  renderNumbers,
  renderPriority,
  renderModalLogin,
  renderExit,
} from './renderElements.js';

import {
  configFormOnLoad,
  inputControl,
  formAddControl,
  formDelControl,
} from './controlForm.js';

import {changeStatus, editToDo} from './controlToDo.js';

// CHANGE USER
const changeUser = () => {
  document.querySelector('.exit').addEventListener('click', () =>
    window.location.reload());
};

// LOGIN
const start = () => {
  renderModalLogin();

  const authForm = document.querySelector('.auth-form');
  const overlay = document.querySelector('.overlay');

  authForm.addEventListener('submit', e => {
    e.preventDefault();

    const userName = authForm.username.value;
    overlay.classList.remove('active');

    configFormOnLoad();
    inputControl();
    renderToDo(userName);
    renderNumbers();
    formAddControl(userName);
    formDelControl(userName);
    changeStatus(userName);
    editToDo(userName);

    // Priority
    renderPriority();

    // Quit
    renderExit();
    changeUser();
  });
};

export {
  start,
};
