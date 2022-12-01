import {
  toDoTableBody,
  form,
  inputField,
  saveBtn,
  clearBtn,
} from './getPageElements.js';

import {generateId} from './createElement.js';

import {
  setStorage,
  removeFromStorage,
} from './controlStorage.js';

import {
  addToDoPage,
  removeFromPage,
} from './controlToDo.js';

import {renderNumbers} from './renderElements.js';

// CONFIG FORM
const configFormOnLoad = () => {
  form.querySelector('input').name = 'task';
  saveBtn.disabled = true;
};

// BTN SUBMIT CONTROLs
const btnSubmitControl = () => {
  if (inputField.value.trim().length === 0) {
    saveBtn.disabled = true;
  } else {
    saveBtn.disabled = false;
  }
};

// FORM
const inputControl = () => {
  inputField.addEventListener('input', btnSubmitControl);
  clearBtn.addEventListener('click', () => saveBtn.disabled = true);
};

const formAddControl = (userName) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const toDoItem = Object.fromEntries(formData);
    const toDoItemId = generateId();

    toDoItem.id = toDoItemId;
    toDoItem.done = false;

    setStorage(userName, toDoItem);
    form.reset();
    btnSubmitControl();

    addToDoPage(toDoItem);
    renderNumbers();
  });
};

const formDelControl = (userName) => {
  toDoTableBody.addEventListener('click', e => {
    const target = e.target;

    if (target.matches('.btn-danger')) {
      const toDoForDel = target.closest('tr');
      const toDoId = toDoForDel.dataset.id;

      if (confirm('Точно хотите удалить?')) {
        removeFromStorage(userName, toDoId);
        removeFromPage(toDoForDel);
        renderNumbers();
      }
    }
  });
};

export {
  configFormOnLoad,
  inputControl,
  formAddControl,
  formDelControl,
};
