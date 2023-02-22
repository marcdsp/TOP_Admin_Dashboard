
const submit = document.getElementById("addBook");

submit.addEventListener('click', function(e) {
    e.preventDefault();
addBookToLibrary()
document.getElementById("myForm").reset();
});

//array where books are stored
let myLibrary = [];

function Book(key, title, author, yearPrinted, readStatus)  {
    this.key = key;
    this.title = title
    this.author = author
    this.yearPrinted = yearPrinted
    this.readStatus = readStatus
}

function addBookToLibrary() {
    let jsKey = Date.now();
    let jsTitle = document.getElementById('title').value;
    let jsAuthor = document.getElementById('author').value;
    let jsYear = document.getElementById('year').value;
    let jsStatus = document.getElementById('status').value;
    myLibrary.push(new Book(jsKey, jsTitle, jsAuthor, jsYear, jsStatus)); 
    const cardList = document.getElementById("projectCards");
    while (cardList.hasChildNodes()) {
      cardList.removeChild(cardList.firstChild);
    }
    buildCards();

    // TODO Add script for updating DOM when a book is added
}

function updateBook () {
    // TODO add script to popup form for editing the book
}

function updateStatus () {
    // TODO script to update a book's status when the user toggles the read button
}

function removeBook () {
    // TODO script to remove a book when user clicks the remove book button. Put in an are you sure message.
}

function elementFromHtml(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

function buildCards() {
    for (let i = 0; i < myLibrary.length; i++) {
        let cardLocation = document.getElementById('projectCards');
        cardLocation.appendChild(document.getElementById('cardTemplate').content.cloneNode(true));
        let updateId = document.getElementById('uidPlaceHolder');
        updateId.id = myLibrary[i].key;
    }
}