async function getBooks() {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/books");
        const books = await response.json();
        return books
    } catch (error) {
        console.log(error);
    }
}

const bookContainer = document.getElementById("bookContainer")

function createBookCard(book){
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "col-12 col-md-4 col-lg-3");
    cardContainer.innerHTML = `<div class="card" style"width: 18rem;">
    <img src="${book.img}" class="card-img-top" alt="book card">
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.price} $</p>
      <p class="card-text">${book.asin}</p>
      <a href="#" class="btn btn-primary"> Add to cart</a>
      </div>
      </div>`
      bookContainer.append(cardContainer);
}

getBooks().then(books => {
    books.map((book)=> createBookCard(book))
});