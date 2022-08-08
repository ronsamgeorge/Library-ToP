
function printHello(){
    console.log(this.classList[0]);
}

function removeCardFromLibrary(titleId){

    for(let i = 0; i< library.length; i++){ 
        if (titleId === library[i].title){
            library.splice(i,1);
            break;
        }
    }
    return; 
}

function removeCardFromDom(){
    let card = document.getElementById(this.id).parentNode;
    console.log(card);
    card.remove();
    removeCardFromLibrary(this.classList[0]); // classlist[0] contains the Title of the book as Class.
    
}

function createRemoveButtonEventListener(btnId){
    let removeBtn = document.getElementById(btnId);
    removeBtn.addEventListener('click',removeCardFromDom);
}

function displayBookCard(bookCard){
    displayContainerDom.appendChild(bookCard);
}

function createBookCard(book){

    let mainCardDom = document.createElement("div");
    mainCardDom.classList.add(book.title);
    mainCardDom.classList.add("book-card");

    for (const keys in book){
        let bookInfo = document.createElement("div");
        bookInfo.textContent = keys + " " + book[keys];
        mainCardDom.appendChild(bookInfo);

        if (book[keys] === true){
            console.log("read book " + book.title);
        }
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

//constructor for Books
function book(title, author,pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    addBookToLibrary(this);  
    createBookCard(this); //Book Card displays the Book details on the UI
}


// code to capture the form data and save it locally in the array 

function showForm(){
    modal.showModal();
}

function closeForm(){
    modal.close();
}

let library = []; 
let removeBtnsListener = [];
const displayContainerDom = document.getElementById("main-display-container");

const book1 = new book("HP","JK",455,true);
const book2 = new book("TT","JK",455,false);  
const book3 = new book("GOT","JK",455,true);
const book4 = new book("HABIT","JK",455,false);  

const modal = document.querySelector("#modal");   //targets the pop up dialog form modal 
const addBtn = document.getElementById("add-btn");
const closeBtn = document.querySelector("#close-button");


addBtn.addEventListener('click',showForm);
closeBtn.addEventListener('click', closeForm);


console.log(library[1].title);
console.log(removeBtnsListener);
