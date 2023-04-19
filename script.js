let myLibrary = [];

function Book(title, author, pages) {
  const mainContent = document.querySelector("main");

  this.card = document.createElement("div");
  mainContent.appendChild(this.card).className = "card";
  this.title = title;
  this.author = author;
  this.pages = pages;
  addBookToLibrary(title, author, pages);
}

Book.prototype.printInfo = function() {
  if (read === "finish") {
    console.log(`The ${title} by ${author}, ${pages} pages, finished reading`);
  } else {
    console.log(`The ${title} by ${author}, ${pages} pages, not finished reading`);
  }
};

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(title, author, pages, read);
}

const newBook = new Book("good omens", "neil gaiman", "512", "finish");
console.log(newBook);
console.log(myLibrary);
