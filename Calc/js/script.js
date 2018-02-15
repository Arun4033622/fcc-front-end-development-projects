var numbers;
var display = $('#display');

$('button').on('click', function() {
    if (display.html() == 0)
        display.html('');
    display.append($(this).val());
    if (display.html().length > 20)
        display.html('Error! Could not be processed.')
});

$('#equal').on('click', function() {
    numbers = eval(display.html());
    if (numbers.toString().length > 20) {
        display.html('');
        display.html(numbers.toFixed(8));
    }
    else {
        display.html('');
        display.html(numbers);
    }
});

$('#clear').on('click', function() {
    numbers = null;
    display.html('0');
});


