const myLibrary=[];

function Books(title,author,pagecount,status){

        this.title=title;
        this.author=author;
        this.pagecount=pagecount;
        if (status){
            this.status='Read'
        }else{this.status='Not Read'}
        // this.status=status
        this.info=function(){
            console.log(this.title,'by',this.author,this.pagecount,'pages',this.status)
        }
    }

lib=localStorage.getItem('library')

if (!lib){
    var library=[];
}else{library=JSON.parse(lib)}


function addBooktoLibrary(title,author,pages,status){

    var book=new Books(title,author,pages,status);
   
    // console.log('book',book)
    // console.log(Object.getPrototypeOf(book)===Books.prototype)

    library.push(book);
    // alert(library)
    localStorage.setItem('library',JSON.stringify(library))
    updatelibrary(book);


}

//form input 
//form button on click
//button onclick method
    //ADDBooktolibrary
    //  get input attributes by document.getElem
    //pass the data
    //create the object Book
    //append it to the array library [] 





document.getElementById('reset').onclick=function(){
    document.getElementById("add_bookform").reset()
}

document.getElementById('submit').onclick=function(event){
    event.preventDefault()
    
    var title=document.getElementById('title').value
    if (title==''){
        alert('please fill a title ')

        
    }
    // alert(title)
    var author=document.getElementById('author').value
    if (author==''){
        alert('please fill an author name')
        
    }
    var pages=document.getElementById('page_count').value
    if (pages==''){
        alert('please fill a page count  ')
        

        
    }

    var status=document.getElementById('status').checked
   
    if(author && pages && title){

        addBooktoLibrary(title,author,pages,status)
    }

    document.getElementById("add_bookform").reset()

}


library_grid=document.querySelector('.library_grid')
//append it to the library grid



function updatelibrary(book){
    library_books_str=localStorage.getItem('library')
    library_books=JSON.parse(library_books_str);
//    library_books.forEach(function(book){
    
  

    var newDiv=document.createElement("div")
    newDiv.classList.add('card')

    var content=document.createElement("div")
    content.classList.add("content")
    
    let elem1=document.createElement("div");
    let elem2=document.createElement("div");
    let elem3=document.createElement("div");
    let elem4=document.createElement("div")
    let elem5=document.createElement("div")
    elem1.innerHTML='<h4>'+book.title+'</h4>'
    elem2.innerHTML='<h4>'+book.author+'</h4>'
    elem3.innerHTML='<h4>'+book.pagecount+'</h4>'
    elem4.innerHTML='<h3>'+book.status+'</h3>'
    elem5.innerHTML = '<button style="text-align: center;" > <div style="font-size: 1.4rem;">Remove</div></button>';
    elem4.style.backgroundColor="#d9f99d"
    elem4.style.width="80%"
    elem4.style.textAlign="center"
    elem4.style.borderRadius="10px"

    elem5.style.backgroundColor="#0ea5e9"
    elem5.style.width="80%"
    elem5.style.textAlign="center"
    elem5.style.borderRadius="10px"
    content.appendChild(elem1)
    content.appendChild(elem2)
    content.appendChild(elem3)
    content.appendChild(elem4)
    content.appendChild(elem5)
    elem5.addEventListener("click",function(){
        remove_book(book)
    })

    content.style.display="flex";
    content.style.flexDirection="column"
    content.style.justifyContent="center"
    content.style.alignItems="center"
    // content.style.backgroundColor="red"
    content.style.gap="1rem"
    content.style.height="18rem"
   
    newDiv.style.width="20rem";
    newDiv.style.height="19rem";

    



   

    newDiv.appendChild(content)
    
    newDiv.style.boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px";
    library_grid.appendChild(newDiv)}

    

function updatelibrarylocal(){
    library_books_str=localStorage.getItem('library')
    // alert(library_books_str)
    
    library_books=JSON.parse(library_books_str);
   library_books.forEach(function(book){
    
  

    var newDiv=document.createElement("div")
    newDiv.classList.add('card')

    var content=document.createElement("div")
    content.classList.add("content")
    
    let elem1=document.createElement("div");
    let elem2=document.createElement("div");
    let elem3=document.createElement("div");
    let elem4=document.createElement("div")
    let elem5=document.createElement("div")
    elem1.innerHTML='<h4>'+book.title+'</h4>'
    elem2.innerHTML='<h4>'+book.author+'</h4>'
    elem3.innerHTML='<h4>'+book.pagecount+'</h4>'
    elem4.innerHTML='<div style="font-size:1.4rem;font-family:inherit;">'+book.status+'</div>'
    elem5.innerHTML = '<button style="text-align: center;" > <div style="font-size: 1.4rem;">Remove</div></button>';
   
    elem5.addEventListener("click",function(){
        remove_book(book)
    })
    elem4.style.backgroundColor="#d9f99d"
    elem4.style.width="80%"
    elem4.style.textAlign="center"
    elem4.style.borderRadius="10px"

    elem5.style.backgroundColor="#0ea5e9"
    elem5.style.width="80%"
    elem5.style.textAlign="center"
    elem5.style.borderRadius="10px"
    content.appendChild(elem1)
    content.appendChild(elem2)
    content.appendChild(elem3)
    content.appendChild(elem4)
    content.appendChild(elem5)

    content.style.display="flex";
    content.style.flexDirection="column"
    content.style.justifyContent="center"
    content.style.alignItems="center"
    content.style.fontFamily="inherit"
    // content.style.backgroundColor="red"
    content.style.gap="1rem"
    content.style.height="18rem"
   
    newDiv.style.width="20rem";
    newDiv.style.height="19rem";

    



   

    newDiv.appendChild(content)
    
    newDiv.style.boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px";
    library_grid.appendChild(newDiv)})


}


function remove_book(book) {
    // Find the index of the book in the library array
   
    const index = library.findIndex(item => item.title === book.title && item.author === book.author && item.pagecount === book.pagecount && item.status === book.status);
   
    if (index !== -1) {
       
        library.splice(index, 1);

        // Update the localStorage after removing the book
        localStorage.setItem('library', JSON.stringify(library));
        window.location.reload()
    }
    
}



window.onload=function(){
    
updatelibrarylocal();

console.log(localStorage.getItem('library'))
}