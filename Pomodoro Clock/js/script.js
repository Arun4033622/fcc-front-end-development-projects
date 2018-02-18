$('button').on('click', startTimer);
var timer;

function startTimer() {
    clearInterval(timer);
    window.sessionLength = $('#session-length').val() * 60;
    window.breakLength = $('#break-length').val() * 60;
    timer = setInterval(runTimer, 1000);
}

function runTimer() {
    if (sessionLength > 0) {
        sessionLength--;
        $('#timer').html(changeFormat(sessionLength));
        if (sessionLength === 0) alert('Break Time!');
    } else if (breakLength > 0) {
        breakLength--;
        $('#timer').html(changeFormat(breakLength));
    } else {
        alert('Get back to work!');
        window.sessionLength = $('#session-length').val() * 60;
        window.breakLength = $('#break-length').val() * 60;
    }
}

function changeFormat(length) {
    var mins = Math.floor(length / 60);
    var seconds = length % 60;
    if (seconds < 10) return mins + ':0' + seconds;
    return mins + ':' + seconds;
}
