let apiQuotes = [];
let quoteContainer = document.getElementById('quote-container');
let quoteText = document.getElementById('quote');
let quoteAuthor = document.getElementById('author');
let newQuoteBtn = document.getElementById('new-quote');
let twitterTweetBtn = document.getElementById('twitter');
let loaderContainer = document.getElementById('loader')

function newQuote(){
    loading();
let newquote= apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
console.log(newquote);
if (quoteText.length > 100) {
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}
quoteText.textContent = newquote.text;
quoteAuthor.textContent = newquote.author;
complete();
}
async function getQuotes(){
    loading();
    const url = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        let response = await fetch(url);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        
    }
}

//loading
function loading(){
    loaderContainer.hidden = false;
    quoteContainer.hidden = true;
}

//complete
function complete(){
    loaderContainer.hidden = true;
    quoteContainer.hidden = false;
}

function tweetQuote(){
let twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}` 
window.open(twitterUrl,'_blank')
}

newQuoteBtn.addEventListener('click',newQuote);
twitterTweetBtn.addEventListener('click',tweetQuote);

getQuotes();