$(document).ready(function() {
    var text_max = 300;
    $('#commInputFeedback').html(text_max + ' tecken kvar');

    $('#commInput').keyup(function() {
        var text_length = $('#commInput').val().length;
        var text_remaining = text_max - text_length;

        $('#commInputFeedback').html(text_remaining + ' tecken kvar');
    });
});