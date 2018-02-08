$('#search-button').on('click', search);

$('input').keyup(function(event) {
    if (event.keyCode === 13) {
        search();
    }
});

function search() {
    var searchString = $('#search-input').val();
    if (!searchString) return null;
    $('#wikipedia-logo').css('display', 'none');
    $('h1').css('display', 'none');
    $('#results').empty();
    var url  = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchString + '&format=json';
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'jsonp',
        async: false,
        success: function(data) {
            for (let i = 0; i < data[1].length; i++) {
                $('#results').append('<div><a href="' + data[3][i] + '" target="_blank"><h3>' + data[1][i] + '</h3></a><p>' + data[2][i] + '</p></div>')
            }
        }
    });
}

