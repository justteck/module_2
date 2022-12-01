// LOCAL STORAGE
const getStorage = (key) => {
  const item = JSON.parse(localStorage.getItem(key)) || [];

  return Array.isArray(item) ? item : [item];
};

const setStorage = (key, item) => {
  const items = getStorage(key);

  items.push(item);
  localStorage.setItem(key, JSON.stringify(items));
};

const removeFromStorage = (key, id) => {
  const itemsStorage = getStorage(key);

  const resultItems = itemsStorage.filter(item => item.id !== +id);
  localStorage.setItem(key, JSON.stringify(resultItems));
};

const changeStatusStorage = (key, id) => {
  const itemsStorage = getStorage(key);

  const editedItems = itemsStorage.map(item => {
    if (item.id === +id) {
      item.done = true;
    }
    return item;
  });

  localStorage.setItem(key, JSON.stringify(editedItems));
};

const editTaskStorage = (key, id, taskEdited) => {
  const itemsStorage = getStorage(key);

  const editedItems = itemsStorage.map(item => {
    if (item.id === +id) {
      item.task = taskEdited.trim();
    }
    return item;
  });

  localStorage.setItem(key, JSON.stringify(editedItems));
};

const findInStorage = (key, id) => {
  const itemsStorage = getStorage(key);

  return itemsStorage.find(item => item.id === +id);
};

export {
  getStorage,
  setStorage,
  removeFromStorage,
  changeStatusStorage,
  editTaskStorage,
  findInStorage,
};
