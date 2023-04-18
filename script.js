let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if (read === 'finish') {
            console.log(`The ${title} by ${author}, ${pages} pages, finished reading`);
        }
        else {
            console.log(`The ${title} by ${author}, ${pages} pages, not done reading`);
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
}

const newBook = new Book('good omens', 'neil gaiman', '512', 'finish');


