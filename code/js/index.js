$(function () {
    class YaoFangWang {
        constructor() {}
        sor() {
            $(window).scroll(function () {
                var s = $(window).scrollTop();

                if (s > 860) {
                    $(".elevator").show();
                } else if (s < 700) {
                    $(".elevator").hide();
                }
            });
        }
    }
    (new YaoFangWang).sor();

});