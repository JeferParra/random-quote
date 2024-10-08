const author = document.querySelector('.author');
const tag1 = document.querySelector('.tag1');
const tag2 = document.querySelector('.tag2');
const quote = document.querySelector('.quote p');
const refresh = document.querySelector('.refresh');

function getQuote() {
  const results = fetch("https://api.quotable.io/random?minLength=100&maxLength=150");

  results
    .then(response => response.json())
    .then(data => {
      author.innerHTML = data.author;
      tag1.innerHTML = data.tags[0];

      if(data.tags[1]) {
        tag2.innerHTML = data.tags[1];
      } else {
        tag2.style.display = 'none';
      }
      
      quote.innerHTML = data.content;
    });
}

getQuote()

refresh.addEventListener('click', () => {
  getQuote();
})