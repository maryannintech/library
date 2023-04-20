let myLibrary = [];

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#status");
const formModal = document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  Book(titleInput, authorInput, pagesInput, statusInput);
});

function Book(title, author, pages, status) {
  const mainContent = document.querySelector("main");

  this.card = document.createElement("div");
  mainContent.appendChild(this.card).className = "card";

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  addBookToLibrary(title, author, pages, status);
}

Book.prototype.printInfo = function () {
  if (this.status) {
    console.log(`The ${title} by ${author}, ${pages} pages, finished reading`);
  } else {
    console.log(
      `The ${title} by ${author}, ${pages} pages, not finished reading`
    );
  }
};

function addBookToLibrary(title, author, pages, status) {
  myLibrary.push(title, author, pages, status);
}

const infoContent = document.querySelector(".info-para");
const infoBtn = document.querySelector(".info");
infoBtn.addEventListener("click", () => {
  infoContent.style.display = "block";
});
infoBtn.addEventListener("mouseleave", () => {
  infoContent.style.display = "none";
});

const addBtn = document.querySelector(".add").addEventListener("click", () => {
  formModal.style.display = "block";
});

