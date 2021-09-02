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
    
    //count
    const count = document.getElementById("count");
    
    count.textContent = '';
    const h6 = document.createElement('h6');
    if(books.length === 0 ){
        h6.innerHTML = `<span class="text-danger fw-bold">no result found</span>`;
    }
    else{
        h6.innerHTML = `Total item: ${books.length}`;
    }
    // h6.innerHTML = `Total item: ${books.length}`;
    count.appendChild(h6);
    //search result
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    books.forEach(book => {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
          <div class="card h-100 card-property text-white ">
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