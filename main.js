
const submit = document.getElementById("addBook");
const remove = document.getElementById("deleteBook");


//trigger to add book
submit.addEventListener('click', function(e) {
    e.preventDefault();
addBookToLibrary()
document.getElementById("myForm").reset();
});

//trigger to remove book
//remove.addEventListener('click', function(e) {
// addBookToLibrary() // TODO find out how to grab the id from the dom
// document.getElementById("myForm").reset();
// });

//check if the array is already in localStorage, if not create empty array in localStorage
if (JSON.parse(localStorage.getItem("myLibrary") === null)) {
    let myLibrary = [];
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
 }
let myLibrary = JSON.parse(localStorage.getItem("myLibrary"));

//call buildCards in the event there is something in localStorage
buildCards();


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
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
    clearCards();
    buildCards();
}
// this clears the cards from the dom before rebuilding
function clearCards() {
    const cardList = document.getElementById("projectCards");    
    while (cardList.hasChildNodes()) {
      cardList.removeChild(cardList.firstChild);
    }}

function findCardId() {
    const cardId = document.getElementById("deleteBook");
    console.log(cardId.closest(".card"));
}

function updateBook () {
    // TODO add script to popup form for editing the book
}

function updateStatus () {
    // TODO script to update a book's status when the user toggles the read button
}

// this is used to get the index number of the book from the array
function getIndex (identifier) {
let bookIndex = myLibrary.findIndex(k => k.key == identifier);
return bookIndex
}

function removeBook (identifier) { 
    let bookIndex = getIndex(identifier);
    myLibrary.splice(bookIndex,1);
    clearCards();
    buildCards();
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
        let updateTitle = document.getElementById('bookTitle');
        updateTitle.innerHTML = myLibrary[i].title;
        updateTitle.id = 'title' + myLibrary[i].key;
        let updateAuthor = document.getElementById('bookAuthor');
        updateAuthor.innerHTML = myLibrary[i].author;
        updateAuthor.id = 'author' + myLibrary[i].key;
        let updateYear = document.getElementById('bookYear');
        updateYear.innerHTML = myLibrary[i].yearPrinted;
        updateYear.id = 'year' + myLibrary[i].key;
        let updateDelete = document.getElementById('deleteBook');
        updateDelete.id = 'delete' + myLibrary[i].key;
        let updateEdit = document.getElementById('editBook');
        updateEdit.id = 'edit' + myLibrary[i].key;
        let updateStatus = document.getElementById('bookStatus');
        updateStatus.innerHTML = 'Auto_stories';
        if (myLibrary[i].readStatus === 'read') {
            updateStatus.innerHTML = 'Import_Contacts';}
        updateStatus.id = 'status' + myLibrary[i].key;
        document.querySelector('#delete' + myLibrary[i].key)
        .addEventListener('click',function(){
            removeBook(this.closest(".card").id);
        })
    }
}