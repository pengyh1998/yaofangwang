$(function () {
    $(".form-tab").on("click", "div", function () {
        var index = $(this).index();

        $(".dldiv").eq(index).addClass("active").siblings(".dldiv").removeClass("active");
        $(".tab-item").eq(index).addClass("bor-btt").siblings(".tab-item").removeClass("bor-btt");
    });
    $("#denglu").click(function () {

        var username = $("#usernameID").val();
        var password = $("#password").val();
        console.log(username, password);

        $.ajax({
            type: "get",
            url: "../server/login.php",
            dataType: "json",
            data: `username=${username}&password=${password}`,
            success: function (response) {
                console.log(response);
                alert(response.msg);
                let date = new Date();
                date.setDate(date.getDate() + 7);
                document.cookie = "name" + "=" + username + ";expires=" + date + ";path = /";
                document.cookie = "password" + "=" + password + ";expires=" + date + ";path = /";
                console.log(document.cookie);
                window.location.href = "../index.html";

            }
        });



    })
});