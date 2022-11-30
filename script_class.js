// eslint-disable-next-line max-classes-per-file
const buttonAdd = document.getElementById('add');
let index = 0;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor(book, storage, index) {
    this.book = book;
    this.library = storage;
    this.index = index;
  }

  add() {
    if (this.library === null) {
      this.library = [];
    }
    const data = this.library;
    data.push(this.book);
    const allData = JSON.stringify(data);
    localStorage.setItem('books', allData);
  }

  remove() {
    let getData = localStorage.getItem('books');
    getData = JSON.parse(getData);
    getData.splice(this.index, 1);
    getData = JSON.stringify(getData);
    localStorage.setItem('books', getData);
  }
}

function Display() {
  let getBooks = localStorage.getItem('books');
  getBooks = JSON.parse(getBooks);

  if (getBooks != null) {
    const booksSection = document.getElementById('books');
    let book = '';
    for (let i = 0; i < getBooks.length; i += 1) {
      let background;
      if (i % 2 === 0) {
        background = 'gray';
      } else {
        background = 'white';
      }
      book += `<div class="book ${background}"><p>${getBooks[i].title} by ${getBooks[i].author}</p>
      <button class="button" value=${i}>Remove</button>
      </div>`;
    }
    booksSection.innerHTML = `${book}`;
  }
}
Display();

function GetContent() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const titleBook = title.value;
  const authorBook = author.value;
  const message = document.querySelector('#message');
  if (titleBook === '' || authorBook === '') {
    message.classList.remove('show');
    return;
  }
  const book = new Book(titleBook, authorBook);
  let storage = localStorage.getItem('books');
  storage = JSON.parse(storage);

  const library = new Library(book, storage);
  library.add();
  Display();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

buttonAdd.addEventListener('click', GetContent);

const deleteBtn = document.querySelectorAll('.button');

function GetIndex() {
  const library = new Library(null, null, index);
  library.remove();
  Display();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

deleteBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    index = btn.value;
    GetIndex();
  });
});


document.getElementById('date').innerHTML=Date();

const list = document.getElementById('list-books');
const subtitle = document.getElementById('subtitle');
const form = document.getElementById('add-books');
const contact = document.getElementById('contact');

const btn_list = document.getElementById('listLink');
const btn_addNew = document.getElementById('addLink');
const btn_Contact = document.getElementById('contactLink');

function List() {
  list.classList.remove('hide')
  subtitle.classList.add('hide')
  form.classList.add('hide')
  contact.classList.add('hide')
  btn_list.classList.add('blue')
  btn_list.classList.remove('link_nav')
  btn_addNew.classList.add('link_nav')
  btn_Contact.classList.add('link_nav')
}
function AddNew() {
  list.classList.add('hide')
  subtitle.classList.remove('hide')
  form.classList.remove('hide')
  contact.classList.add('hide')
  btn_addNew.classList.add('blue')
  btn_addNew.classList.remove('link_nav')
  btn_list.classList.add('link_nav')
  btn_Contact.classList.add('link_nav')
}
function Contact() {
  list.classList.add('hide')
  subtitle.classList.add('hide')
  form.classList.add('hide')
  contact.classList.remove('hide')
  btn_Contact.classList.add('blue')
  btn_Contact.classList.remove('link_nav')
  btn_list.classList.add('link_nav')
  btn_addNew.classList.add('link_nav')
}

btn_list.addEventListener('click', List);

btn_addNew.addEventListener('click', AddNew);

btn_Contact.addEventListener('click', Contact);