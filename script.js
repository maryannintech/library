let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if (read === 'finish') {
            return `The ${title} by ${author}, ${pages} pages, finished reading`
        }
        else {
            return `The ${title} by ${author}, ${pages} pages, done reading`
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
}

const newBook = new Book('good omens', 'neil gaiman', '512', 'finish');
console.log(addBookToLibrary(newBook));


