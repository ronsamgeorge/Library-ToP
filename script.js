function displayBookCard(bookCard){
    displayContainerDom.appendChild(bookCard);
}

function printHello(){
    console.log(this.classList[0]);
}

function removeCardFromDom(){
    let card = document.getElementById(this.id).parentNode;
    console.log(card);
    card.remove();
}

function createRemoveButtonEventListener(btnId){
    let removeBtn = document.getElementById(btnId);
    removeBtn.addEventListener('click',removeCardFromDom);
}

function createBookCard(book){
    //right logic to append things to the Card 

    /* So there will be four parts 
        the parent div should have an id which we can refer to 
    */

    let mainCardDom = document.createElement("div");
    mainCardDom.classList.add(book.title);

    for (const keys in book){
        let bookInfo = document.createElement("div");
        bookInfo.textContent = keys + " " + book[keys];
        mainCardDom.appendChild(bookInfo);
    }

    let removeButton = document.createElement("button")
    removeButton.textContent = "Delete";
    removeButton.id = book.title + "-rmv-btn"
    removeButton.classList.add(book.title);
    removeButton.classList.add("rmv-btn");
    


    mainCardDom.appendChild(removeButton);
    displayBookCard(mainCardDom);  
    createRemoveButtonEventListener(book.title + "-rmv-btn");   
}


function addBookToLibrary(book){
    library.push(book);
}

function book(title, author,pages, read){

    // console.log(this);  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    addBookToLibrary(this)   
    createBookCard(this);
}

let library = [];
let removeBtnsListener = [];
const displayContainerDom = document.getElementById("main-display-container");

const book1 = new book("HP","JK",455,true);
const book2 = new book("TT","JK",455,false);  

const addBtn = document.getElementById("add-btn");

console.log(library[1].title);
console.log(removeBtnsListener);
