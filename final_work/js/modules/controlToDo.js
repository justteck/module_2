import {toDoTableBody} from './getPageElements.js';

import {createRow} from './createElement.js';

import {
  changeStatusStorage,
  findInStorage,
  editTaskStorage,
} from './controlStorage.js';

import {renderNumbers} from './renderElements.js';

// ADD TODO
const addToDoPage = (toDoItem) => {
  toDoTableBody.append(createRow(toDoItem));
};

// REMOVE TODO
const removeFromPage = (toDoItem) => {
  toDoItem.remove();
};

// CHANGE TODO STATUS
const changeStatus = (userName) => {
  toDoTableBody.addEventListener('click', e => {
    const target = e.target;

    if (target.matches('.btn-success')) {
      const toDoForChange = target.closest('tr');
      const toDoId = toDoForChange.dataset.id;

      changeStatusStorage(userName, toDoId);
      toDoForChange.replaceWith(createRow(findInStorage(userName, toDoId)));
      renderNumbers();
    }
  });
};

// EDIT TODO
const editToDo = (userName) => {
  toDoTableBody.addEventListener('click', e => {
    const target = e.target;

    if (target.matches('.btn-light')) {
      const toDoForChange = target.closest('tr');
      const toDoId = toDoForChange.dataset.id;
      const taskTd = toDoForChange.querySelector('.task');

      taskTd.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
      taskTd.contentEditable = 'true';

      taskTd.addEventListener('blur', () => {
        const editedTask = taskTd.textContent;
        editTaskStorage(userName, toDoId, editedTask);

        taskTd.contentEditable = 'false';
        taskTd.style.boxShadow = '';
      });
    }
  });
};

export {
  addToDoPage,
  removeFromPage,
  changeStatus,
  editToDo,
};
