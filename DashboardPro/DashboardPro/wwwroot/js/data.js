function ConnectionTest() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        url: "/index?handler=ConnectionTest",
        success: function (result) {
            $("#result4").text(result);
        },
        error: function () {
        }
    });
}