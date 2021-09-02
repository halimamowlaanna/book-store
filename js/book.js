const searchBooks = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value ;
    //clear data
    searchField.value = '';
    //load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));
}
const displaySearchResult = books => {
    // console.log(books);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
          <div class="card h-100 card-bg-color text-white ">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top book-cover mx-auto" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text"><span class="text-common fw-bold">Author:</span> ${book.author_name}</p>
            </div>
            <div class="card-footer text-center">
              <small>First Publish Date:${book.first_publish_year}</small>
            </div>
          </div>
        
        `
        searchResult.appendChild(div)
    });

}