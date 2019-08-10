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
            this.Tab();
            this.goTop();
            this.login();
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
        Tab() {
            $(".maincat").on("mouseenter", "li", function () {
                var index = $(this).index();
                /* (1) 设置当前标签的选中状态 */
                $(".subcat").eq(index).addClass("active").siblings().removeClass("active");
                /* (2) 发送网络更新页面 */
            })
            $(".nav .container").mouseleave(function () {

                // var index = $(this).index();
                /* (1) 设置当前标签的选中状态 */
                $(".subcat").removeClass("active");
            })

        }
        goTop() {
            window.onscroll = () => {
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                if (scrollTop >= 300) {
                    //当滚动到300px的时候，盒子显示，否则隐藏
                    $("#totop").css("display", "block")
                } else {
                    $("#totop").css("display", "none")
                }
                $("#totop").click(function () {
                    var scrollTop = window.setInterval(function () {
                        console.log(window.pageYOffset + ':' + scrollTop);
                        var pop = window.pageYOffset;
                        if (pop > 0) {
                            window.scrollTo(0, pop - 20);
                        } else {
                            window.clearInterval(scrollTop);
                        }
                    }, 20);

                })
            }
            $(".contact").slideDown().fadeOut().fadeIn().delay(3000).slideUp();
            $(".i1").mouseover(function () {
                $(".contact").css("display", "block");
            })
            $(".i1").mouseout(function () {
                $(".contact").css("display", "none");
            })
        }
        login() {
            function getItem(key) {
                var arr = document.cookie.split("; ");
                for (let i = 0; i < arr.length; i++) {
                    let arrTemp = arr[i].split("=");
                    if (arrTemp[0] == key) {
                        return arrTemp[1];
                    }
                }
            }

            function setItem(key, value, day) {
                if (day) {
                    let date = new Date();
                    date.setDate(date.getDate() + day);
                    document.cookie = key + "=" + value + ";expires=" + date + ";path=/";
                    console.log(key + "=" + value + ";expires=" + date);

                } else {
                    document.cookie = key + "=" + value;
                }
            }

            function getKeys() {

                var arr = document.cookie.split("; ");
                var keys = [];
                for (let i = 0; i < arr.length; i++) {
                    let arrTemp = arr[i].split("=");
                    keys.push(arrTemp[0]);
                }
                return keys;
            }

            function clear() {
                var keys = getKeys();
                keys.forEach(element => {
                    setItem(element, "", -1);
                });
            }
            let name = getItem("name");
            let c = "<a href='#'>欢迎您" + name + "</a> / <a href='#'>退出</a>";
            $(".ul-right>li").eq(0).html(c);

            //$(".ul-right>li>a").eq(1).attr("href").text("");
            $(".ul-right>li>a").eq(1).click(() => {
                clear();
                console.log($(".ul-right>li>a").eq(1));

                $(".ul-right>li").eq(0).html(`<a href = "./html/log.html">登录 </a>/ <a href = "html/register.html" > 免费注册 </a>`);

            })
        }
    }
    (new YaoFangWang).sor();

});