$(function () {
    class YaoFangWang {
        constructor() {

        }
        sor() {
            $(window).scroll(function () {
                var s = $(window).scrollTop();
                if (s > 860) {
                    $(".elevator").show();
                    $(".li1 a").addClass("active");
                }
                if (s < 700) {
                    $(".elevator").hide();
                }
                if (s > 1500) {
                    $(".li1 a").removeClass("active");
                    $(".li2 a").addClass("active");
                } else if (s < 1500) {
                    $(".li2 a").removeClass("active");
                }
                if (s > 2000) {
                    $(".li2 a").removeClass("active");
                    $(".li3 a").addClass("active");
                }
                if (s < 2000) {
                    $(".li3 a").removeClass("active");
                }
                if (s > 2600) {
                    $(".li3 a").removeClass("active");
                    $(".li4 a").addClass("active");
                }
                if (s < 2600) {
                    $(".li4 a").removeClass("active");
                }
                if (s > 3200) {
                    $(".li4 a").removeClass("active");
                }

                if (s > 3200) {
                    $(".li5 a").addClass("active");
                }
                if (s < 3200) {
                    $(".li5 a").removeClass("active");
                }
                if (s > 3700) {
                    $(".li5 a").removeClass("active");
                    $(".li6 a").addClass("active");
                }
                if (s < 3700) {
                    $(".li6 a").removeClass("active");
                }
                if (s > 4300) {
                    $(".li6 a").removeClass("active");
                }
            });

            this.loucengTab();

        }
        loucengTab() {
            $("#zxyp .snavs a").each((index, ele) => {
                ele.onmouseenter = function () {
                    $(ele).css({
                        "background-color": "#0CB95F",
                        "color": "#fff",
                    }).parent().siblings().children("a").css({
                        "background-color": "#fff",
                        "color": "#000",
                    });
                    $("#zxyp .con-right ul").eq(index).css({
                        "display": "block",
                    }).siblings().css("display", "none");
                }
            });


            $("#ylqx .snavs a").each((index, ele) => {
                ele.onmouseenter = function () {
                    $(ele).css({
                        "background-color": "#0CB95F",
                        "color": "#fff",
                    }).parent().siblings().children("a").css({
                        "background-color": "#fff",
                        "color": "#000",
                    });
                    $("#ylqx .con-right ul").eq(index).css({
                        "display": "block",
                    }).siblings().css("display", "none");
                }
            });


            $("#jsyp .snavs a").each((index, ele) => {
                ele.onmouseenter = function () {
                    $(ele).css({
                        "background-color": "#0CB95F",
                        "color": "#fff",
                    }).parent().siblings().children("a").css({
                        "background-color": "#fff",
                        "color": "#000",
                    });
                    $("#jsyp .con-right ul").eq(index).css({
                        "display": "block",
                    }).siblings().css("display", "none");
                }
            });


            $("#zyyp .snavs a").each((index, ele) => {
                ele.onmouseenter = function () {
                    $(ele).css({
                        "background-color": "#0CB95F",
                        "color": "#fff",
                    }).parent().siblings().children("a").css({
                        "background-color": "#fff",
                        "color": "#000",
                    });
                    $("#zyyp .con-right ul").eq(index).css({
                        "display": "block",
                    }).siblings().css("display", "none");
                }
            });

            $("#mrhf .snavs a").each((index, ele) => {
                ele.onmouseenter = function () {
                    $(ele).css({
                        "background-color": "#0CB95F",
                        "color": "#fff",
                    }).parent().siblings().children("a").css({
                        "background-color": "#fff",
                        "color": "#000",
                    });
                    $("#mrhf .con-right ul").eq(index).css({
                        "display": "block",
                    }).siblings().css("display", "none");
                }
            });
        }

    }
    (new YaoFangWang).sor();

});