'use strict';

const books = document.querySelectorAll('.book');

books[0].before(books[1]);
books[2].before(books[4]);
books[5].after(books[2]);

document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

const names = document.querySelectorAll('h2');
const rename = names[2].querySelector('a');
rename.textContent = 'Книга 3. this и Прототипы Объектов';

const adv = document.querySelector('.adv');
adv.remove();

const replaceChapterOfBook2 = books[0].querySelectorAll('li');
replaceChapterOfBook2[1].after(replaceChapterOfBook2[3]);
replaceChapterOfBook2[3].after(replaceChapterOfBook2[6]);
replaceChapterOfBook2[6].after(replaceChapterOfBook2[8]);
replaceChapterOfBook2[9].after(replaceChapterOfBook2[2]);

const replaceChapterOfBook5 = books[5].querySelectorAll('li');
replaceChapterOfBook5[1].after(replaceChapterOfBook5[9]);
replaceChapterOfBook5[9].after(replaceChapterOfBook5[3]);
replaceChapterOfBook5[3].after(replaceChapterOfBook5[4]);
replaceChapterOfBook5[7].after(replaceChapterOfBook5[5]);

const chapterEight = document.createElement('li');
chapterEight.textContent = 'Глава 8: За пределами ES6';
const addChapter = books[2].querySelectorAll('ul');
addChapter[0].append(chapterEight);
const replaceChapter = books[2].querySelectorAll('li');
replaceChapter[8].after(replaceChapter[10]);

// console.log(replaceChapter);
// console.log(addChapter);
// console.log(replaceChapterOfBook5);
// console.log(replaceChapterOfBook2);
// console.log(rename);
// console.log(adv);
// console.log(books);
// console.log(names);