const API_KEY = 'AIzaSyDhb6__L4fpD5lkYLHIJ3kT2ZCwzKCNx_A';
const searchInput = document.querySelector('.search-inpu');
const searchBtn = document.querySelector('button');
const resultsDiv = document.getElementById('results');
const bookDetailsDiv = document.getElementById('book-details');

async function getbookdata(search) {
  const res = await fetch (
    `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`
  );
  const data = await res.json();
  console.log(data);
}


function searchBooks() {
  const searchbtn= document.getElementById('search-btn');
  searchBtn.addEventListener('click', searchBooks);
}


  