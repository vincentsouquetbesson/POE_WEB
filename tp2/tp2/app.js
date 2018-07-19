function displayContenu() {
    $.ajax({
        url: 'content.html',
        dataType: 'html',
        success: function (result, status) {
            $('#content').html(result);
        }
    })
}

$('a').on('click', function () {
    displayContenu();
    return false;
})