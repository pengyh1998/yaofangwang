$(function () {
    $(".form-tab").on("click", "div", function () {
        var index = $(this).index();
        console.log(index, "---");

        $(".dldiv").eq(index).addClass("active").siblings(".dldiv").removeClass("active");
        $(".tab-item").eq(index).addClass("bor-btt").siblings(".tab-item").removeClass("bor-btt");
    });
});