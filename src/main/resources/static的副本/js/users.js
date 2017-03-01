$(function () {
    var TOKEN_KEY = "jwtToken"
    function getJwtToken() {
        return localStorage.getItem(TOKEN_KEY);
    }
    function createAuthorizationTokenHeader() {
        var token = getJwtToken();
        if (token) {
            return {"Authorization": token};
        } else {
            return {};
        }
    }
    $.ajax({
        url: "http://"+window.location.host+"/users",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: createAuthorizationTokenHeader(),
        success: function (data, textStatus, jqXHR) {
            $.each(data._embedded.users,function(index,item){
                //alert(item._links.self.href);
                $("#tbrow").append(
                              "<tr>"+
                              "<td>"+item.username+"</td>"+
                              "<td>"+item.firstname+"</td>"+
                              "<td>"+item.lastname+"</td>"+
                              "<td>"+item.email+"</td>"+
                              "</tr>"
                );
            });
            $("#userInfo").append(data.username);
        }
    });
});