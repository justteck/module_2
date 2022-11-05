'use strict';

const booksLists = document.querySelectorAll('.item');

const listItemsFour = document.querySelectorAll('.props__item_four');

const listThree = document.querySelector('.item_five .props__list');
const listFive = document.querySelector('.item_three .props__list');

// Выставляем правильный порядок книг
const firstBook = booksLists[1];
const secondBook = booksLists[2];
const thirdBook = booksLists[3];
const fourthBook = booksLists[0];
const fifthBook = booksLists[4];
const sixthBook = booksLists[5];

firstBook.after(secondBook);
secondBook.after(thirdBook);
thirdBook.after(fourthBook);
fourthBook.after(fifthBook);
fifthBook.after(sixthBook);

// Исправляем ошибки в списках
listItemsFour[2].after(document.querySelector('.item_two .props__item_four'));

booksLists[2].querySelector('.props__list').
    append(document.querySelector('.item_six .props__item_two'));

booksLists[2].querySelector('.props__list').
    append(document.querySelector('.item_six .props__item_two'));

document.querySelector('.item_three .content').append(listThree);
document.querySelector('.item_five .content').append(listFive);

// Убираем рекламу
document.querySelector('.ads').remove();
