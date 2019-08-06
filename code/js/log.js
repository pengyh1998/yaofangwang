$(function () {
    $(".form-tab").on("click", "div", function () {
        var index = $(this).index();
        console.log(index, "---");

        $(".dldiv").eq(index).addClass("active").siblings(".dldiv").removeClass("active");
        $(".tab-item").eq(index).addClass("bor-btt").siblings(".tab-item").removeClass("bor-btt");
    });
    $("#loginBtn").click(function () {

        var username = $("#usernameID").val();
        var password = $("#password").val();

        $.ajax({
            type: "post",
            url: "../server/login.php",
            dataType: "json",
            data: `username=${username}&password=${password}`,
            success: function (response) {
                if (response.status == "success") {
                    alert(response.msg);
                    /* 跳转到登录页面 */
                    window.location.href = ""
                } else {
                    alert(response.msg);
                }
            }
        });
    })
});