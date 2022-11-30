const buttonAdd = document.getElementById('add');
let index=0;
Display();

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
    this.index = index
  }
  add() {
    if (this.library === null) {
      this.library = [];
    }
    let data = this.library
    data.push(this.book);
    const allData = JSON.stringify(data);
    localStorage.setItem('books', allData);
    message.classList.add('show');
  }
  remove() {
    const index = this.index;
    let getData = localStorage.getItem('books');
    getData = JSON.parse(getData);
    getData.splice(index, 1);
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
      if(i%2 === 0){
        background = 'gray';
      }else {
        background = 'white';
      }
      book += `<div class="book ${background}"><p>${getBooks[i].title} by ${getBooks[i].author}</p>
      <button class="button" value=${i}>Remove</button>
      </div>`;
    }
    booksSection.innerHTML = `${book}`;
  } else {
    return;
  }
}

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
  const book = new Book(titleBook, authorBook)
  let storage = localStorage.getItem('books');
  storage = JSON.parse(storage);

  const library = new Library(book, storage)
  library.add();
  Display();
    // eslint-disable-next-line no-restricted-globals
  location.reload();
}

buttonAdd.addEventListener('click', GetContent);

const deleteBtn = document.querySelectorAll('.button');

function GetIndex() {
  const library = new Library(null, null, index)
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

