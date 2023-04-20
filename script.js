let myLibrary = [];

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#status");
const formModal = document.querySelector("form");
formModal.addEventListener("submit", function (event) {
  event.preventDefault();
  formModal.style.display = "none";
  Book();
});

function Book() {
  // Make card
  const mainContent = document.querySelector("main");
  const newCard = document.createElement("div");
  newCard.className = "card";

  // Add content to the card
  const cardDetails = document.createElement("div");
  cardDetails.className = "details";
  const cardTitle = document.createElement("p");
  cardTitle.className = "book-title";
  cardTitle.textContent = titleInput.value;
  const deleteBtn = document.createElement("i");
  deleteBtn.className = "bx bx-trash";
  deleteBtn.addEventListener("click", removeCard);
  cardDetails.appendChild(cardTitle);
  newCard.appendChild(cardDetails);
  cardDetails.appendChild(deleteBtn);

  const cardInfo = document.createElement("div");
  cardInfo.className = "book";
  const cardInfoTitle = document.createElement("p");
  cardInfoTitle.textContent = `Title: ${titleInput.value}`;
  cardInfo.appendChild(cardInfoTitle);
  const cardInfoAuthor = document.createElement("p");
  cardInfoAuthor.textContent = `Author: ${authorInput.value}`;
  cardInfo.appendChild(cardInfoAuthor);
  const cardInfoPages = document.createElement("p");
  cardInfoPages.textContent = `Pages: ${pagesInput.value}`;
  cardInfo.appendChild(cardInfoPages);
  const cardInfoStatus = document.createElement("p");
  cardInfoStatus.textContent = `Status: ${statusInput.value}`;
  cardInfo.appendChild(cardInfoStatus);
  newCard.appendChild(cardInfo);

  // Append the new card to the main element
  mainContent.appendChild(newCard);

  this.title = titleInput.value;
  this.author = authorInput.value;
  this.pages = pagesInput.value;
  this.status = statusInput.value;
  addBookToLibrary(this.title, this.author, this.pages, this.status);
}

function addBookToLibrary(title, author, pages, status) {
  myLibrary.push(title, author, pages, status);
}

function removeCard(event) {
  const button = event.target;
  const btnParent = button.parentNode;
  const btnGrandParent = btnParent.parentNode;

  btnGrandParent.remove();
}

const infoContent = document.querySelector(".info-para");
const infoBtn = document.querySelector(".info");
infoBtn.addEventListener("click", () => {
  infoContent.style.display = "block";
});
infoBtn.addEventListener("mouseleave", () => {
  infoContent.style.display = "none";
});

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
  formModal.style.display = "block";
  formModal.reset();
});

const cancelBtn = document.querySelector(".cancel");
cancelBtn.addEventListener("click", () => {
  formModal.style.display = "none";
});
