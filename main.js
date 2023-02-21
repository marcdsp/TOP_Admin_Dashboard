
const submit = document.getElementById("addBook");


const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;

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
    let jsKey = dateTime;
    let jsTitle = document.getElementById('title').value;
    let jsAuthor = document.getElementById('author').value;
    let jsYear = document.getElementById('year').value;
    let jsStatus = document.getElementById('status').value;
    myLibrary.push(new Book(jsKey, jsTitle, jsAuthor, jsYear, jsStatus)); 
    console.log(myLibrary);
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