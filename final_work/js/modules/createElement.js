// GENERATE ID
const generateId = () => +Math.random().toString().substring(2, 10);

// CREATE ROW
const createRow = ({task, done, id, priority}) => {
  task = done ? `<del>${task}</del>` : task;
  done = done ? 'Выполнена' : 'В процессе';

  const tr = document.createElement('tr');
  tr.classList.add(`${priority}`);
  const trHTML = `
    <td></td>
    <td class="task">
      ${task}
    </td>
    <td>${done}</td>
    <td>
      <button class="btn btn-danger">
        Удалить
      </button>
      <button class="btn btn-success">
        Завершить
      </button>
      <button class="btn btn-light">
        Редактировать
      </button>
    </td>
  `;

  tr.innerHTML = trHTML;
  tr.dataset.id = id;
  return tr;
};

export {
  generateId,
  createRow,
};
