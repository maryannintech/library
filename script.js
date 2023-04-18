let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (read === "finish") {
      return `The ${title} by ${author}, ${pages} pages, finished reading`;
    } else {
      return `The ${title} by ${author}, ${pages} pages, not done reading`;
    }
  };
  addBookToLibrary(title, author, pages, read, this.info);
}

function addBookToLibrary(title, author, pages, read, info) {
  myLibrary.push(title, author, pages, read, info);
}

const newBook = new Book("good omens", "neil gaiman", "512", "finish");
console.log(newBook);
console.log(myLibrary);
