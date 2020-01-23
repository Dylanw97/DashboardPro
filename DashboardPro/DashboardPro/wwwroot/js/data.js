/*
 * ALL FUNCTION FROM HERE **GRAB DATA**
 */
function getData() {
    var pageUrl = '<%= ResolveUrl("~/data.cshtml/datapull") %>'
    //var firstname = ''
    //var lastname = ''
    //var parameter = ''

    $.ajax({
        type: 'POST',
        url: pageUrl,
        //data: JSON.stringify(parameter),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            onSuccess(data)
        },
        error: function (data, success, error) {
            alert("Error: " + error);
        }
    });
    return false;
}

function onSuccess(data) {
    alert(data.d);
}





/*
 * ALL FUNCTION FROM HERE **STORE DATA**
 */