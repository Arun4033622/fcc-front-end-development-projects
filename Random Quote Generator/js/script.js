var generateQuote = $('#generatequote');
var tweetQuote = $('#tweetquote');
var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

getQuote();

generateQuote.on('click', getQuote);

tweetQuote.on('click', generateUrl);

function getQuote() {
    $.getJSON(url, function(data) {
        $('#quote').text(data.quoteText);
        $('#by').text(data.quoteAuthor);
    });
}

function generateUrl() {
    tweetQuote.attr('href', 'https://twitter.com/intent/tweet?text=' + $('#quote').text() + '- ' + $('#by').text());
}