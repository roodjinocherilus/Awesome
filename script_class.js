const buttonAdd = document.getElementById('add');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor(book, storage) {
    this.book = book;
    this.library = storage;
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
}

function Display () {
  let getBooks = localStorage.getItem('books');
  getBooks = JSON.parse(getBooks);

  if (getBooks != null) {
    const booksSection = document.getElementById('books');
    let book = '';
    for (let i = 0; i < getBooks.length; i += 1) {
      book += `<div id="book${i}"><p>${getBooks[i].title}</p>
      <p>${getBooks[i].author}</p>
      <button class="button" value=${i}>Remove</button><br>
      <hr>
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
}
Display()
buttonAdd.addEventListener('click', GetContent);
