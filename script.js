const title = document.getElementById('title');
const author = document.getElementById('author');
const buttonAdd = document.getElementById('add');
let booksData = [];
check = localStorage.getItem('books');
if(check != null){
booksData = JSON.parse(check);
}

buttonAdd.addEventListener('click', () => {
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const bookData = [bookTitle, bookAuthor];
  booksData.push(bookData);
  const allData = JSON.stringify(booksData);
  localStorage.setItem('books', allData);
  location.reload()
})

let getBooks = localStorage.getItem('books');
getBooks = JSON.parse(getBooks);
console.log(getBooks);


if (getBooks.length > 0) {
  const booksSection = document.getElementById('books');
  let book=''
  for (let i = 0; i < getBooks.length; i++) {
    book += `<div id="book${i}"><p>${getBooks[i][0]}</p>
    <p>${getBooks[i][1]}</p>
    <button id="button${i}" value=${i}>Remove</button><br>
  <hr>
  </div>`
  }
  console.log(book);
  booksSection.innerHTML = `${book}`
}

