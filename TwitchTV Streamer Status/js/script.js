var streamers = ['freecodecamp', 'OgamingSC2', 'cretetion', 'ESL_SC2', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'twitch'];

for (let i = 0; i < streamers.length; i++) {     
    var url = 'https://wind-bow.glitch.me/twitch-api/channels/' + streamers[i];
    $.getJSON(url, function(data) {
        $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + streamers[i], function(data2) {
            if (!data2.stream) {
                $('tbody').append('<tr class="offline"> <th scope="row"><img src="' + data.logo + '" alt=""></th> <td><a href="' + data.url + '" target="_blank"><h3>' + data.name +  '</h3></a></td> <td><h2 class="text-danger">Offline</h2></td> </tr>');
            } else {
                $('tbody').append('<tr class="online"> <th scope="row"><img src="' + data.logo + '" alt=""></th> <td><a href="' + data.url + '" target="_blank"><h3>' + data.name +  '</h3></a><p>' + data2.stream.channel.status + '</p></td> <td><h2 class="text-success">Online</h2></td> </tr>');
            }
        });
    });
}

$('#online').on('click', function() {
    $('.online').css('display', 'table-row');
    $('.offline').css('display', 'none');
});

$('#offline').on('click', function() {
    $('.offline').css('display', 'table-row');
    $('.online').css('display', 'none');
});

$('#all').on('click', function() {
    $('.online').css('display', 'table-row');
    $('.offline').css('display', 'table-row');
});