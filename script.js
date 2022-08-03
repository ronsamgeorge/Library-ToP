function displayBookDetails (bookCard){
    
    // let testParent = document.createElement("Div");
    // let til
    // displayContainerDom.appendChild(testParent);

    // testParent.textContent = book.pages;
    // displayContainerDom.appendChild(testParent);
    displayContainerDom.appendChild(bookCard);
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
    removeButton.classList.add("rmv-btn");
    removeButton.classList.add(book.title);
    mainCardDom.appendChild(removeButton);


    console.log(typeof mainCardDom)
    displayBookDetails(mainCardDom);    
}


function addBookToLibrary(book){
    library.push(book);
}

function book(title, author,pages, read){

    console.log(this);  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    addBookToLibrary(this)   
}

let library = [];

const book1 = new book("HP","JK",455,true);
const book2 = new book("TT","JK",455,false);  

const addBtn = document.getElementById("add-btn");
//addBtn.addEventListener('click',displayBookDetails);



const deleteBtn = document.getElementsByClassName("rmv-btn");


const displayContainerDom = document.getElementById("main-display-container");


library.forEach(book => {
    createBookCard(book);
});

