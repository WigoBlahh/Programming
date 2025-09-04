const btnNewQuote = document.getElementById("new");
const quoteText = document.getElementById("quote");
let quotes = [];

fetch('./quotes.json')
    .then(response => response.json())
    .then(data => {
        quotes = data;
        let index = Math.floor(Math.random() * quotes.length);
        quoteText.innerHTML = quotes[index].quote;
    });

btnNewQuote.onclick = function(){
        let index = Math.floor(Math.random() * quotes.length);
        quoteText.innerHTML = quotes[index].quote;
}
