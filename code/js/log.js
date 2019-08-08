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
            type: "post",
            url: "../server/login.php",
            dataType: "json",
            data: `username=${username}&password=${password}`,
            success: function (response) {
                console.log(response);

                if (response.status == "error") {
                    alert(response.msg);
                } else {
                    if (response.status = "error") {
                        alert(response.msg);

                    } else if (response.status = "success") {
                        alert(response.msg);
                        //location.href = "../index.html";
                    }
                }
            }
        });
    })
});