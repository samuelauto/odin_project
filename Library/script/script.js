function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read.value;

    this.info = function() {
        if (this.read === "true"){
           return this.title + " by " + this.author + ", " + this.pages + ", is already read"
        }
        else{
            return this.title + " by " + this.author + ", " + this.pages + ", not read yet"
        }
    };
}

const myLibrary = [];

function addBookToLibrary(event){
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read");
    if(read.checked === true){
        read.value = true;
    }
    else{
        read.value = false;
    }
    const warning = document.querySelector("#dialog");
    if(title===""||author===""||pages===""){
        displayWarning("Por favor rellene todos los campos",warning);
    }
    else{
        const book = new Book(title,author,pages,read);
        myLibrary.push(book);
        const container = document.querySelector("#books-section");
        document.getElementById('dialog').close();
        //Elemento almacenador de la info y los botones
        const containerBook = document.createElement("div");
        containerBook.classList.add("Book");
        //Almacenador de la informacion del texto
        const containerInfo = document.createElement('p');
        containerInfo.classList.add("info");
        //Boton de borrar
        const deleteBookButton = document.createElement("button");
        deleteBookButton.classList.add("deleteBookButton");
        deleteBookButton.setAttribute('id',myLibrary.length.toString());
        deleteBookButton.textContent = "Delete Book";
        //Boton de estado de lectura
        const readBookButton = document.createElement("button");
        readBookButton.textContent = "Read?";
        containerBook.appendChild(readBookButton);
        //Implementacion de los botones y la info de cada libro
        containerInfo.textContent = book.info();
        containerBook.appendChild(containerInfo);
        containerBook.appendChild(deleteBookButton);
        containerBook.appendChild(readBookButton);
        container.appendChild(containerBook);
        //evento borrado de libro
        deleteBookButton.addEventListener('click',function(){
            deleteBook(deleteBookButton.id);
        });
        readBookButton.addEventListener('click',function(){
            readStatus(deleteBookButton.id);
        });
    }
}

//Logica de mostrar y ocultar el formulario de un nuevo libro
document.getElementById("New-Book").addEventListener('click',function(){
    document.getElementById('dialog').show();
});

document.getElementById('exit').addEventListener('click',function(){
    document.getElementById('dialog').close();
});

const save = document.querySelector('.save');
save.addEventListener('click', addBookToLibrary,'false');


//Borrado de libros de la libreria
function deleteBook(id){
    myLibrary.splice(parseInt(id),1);
    const clean = document.getElementById(id).parentNode;
    clean.parentNode.removeChild(clean);
}

//Cambio del estado de lectura del libro
function readStatus(id){
    myLibrary[parseInt(id)-1].changeReadStatus(id)
    const change = document.getElementById(id).previousSibling;
    change.textContent = myLibrary[parseInt(id)-1].info();
}
Book.prototype.changeReadStatus = function(id){
    const lectura = myLibrary[parseInt(id)-1].read;
        if(lectura === "true"){
            console.log("entro al if");
            myLibrary[parseInt(id)-1].read = "false";
            console.log(myLibrary[parseInt(id)-1].read);
        }
        else{
            console.log("entro al else");
            myLibrary[parseInt(id)-1].read = "true";
        }
}

//Logica de Tiempo de Muestra del mensaje de error de que todos los campos no estan llenos
let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg,warning) {
  warningBox.textContent = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    warning.appendChild(warningBox);
  }

  warningTimeout = setTimeout(() => {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}
