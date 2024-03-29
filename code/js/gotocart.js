$(function () {

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
    var targetData;
    /* 获取数据库中所有购物车相关的信息 */
    getCatInfo();

    function getCatInfo() {
        $.ajax({
            type: "get",
            url: "../server/getCatData.php",
            dataType: "json",
            success: function (data) {
                targetData = data;
                /* 根据数据来渲染页面 */
                var res = data.map(function (ele) {
                    //console.log(ele.gid);

                    var html = `
                <tr data-index=${ele.gid}>
                    <td><input type="checkbox" class="gouxuan" ${ele.isActive==1 ? "checked" : "" }></td>
                    <td><img src="${ele.src}" alt=""></td>
                    <td>${ele.name}</td>
                    <td style="text-align: right" class="danjia">￥ ${ele.price}</td>
                    <td><button class="btnA">-</button><input type="text" class="num" value=${ele.num}><button class="btnB">+</button>
                    </td>
                    <td class="xj">￥ ${ele.price*ele.num}</td>
                    <td class="del"><a class="delss">删除</a></td>
                </tr>
                        `;
                    return html;
                }).join("");

                $("tbody").html(res);
                // console.log(res);

                // console.log(targetData);
                computedTotalPrice();

            }
        });
    }

    function computedTotalPrice() {
        var res = 0;
        console.log(targetData);

        targetData.forEach(element => {
            if (element.isActive == 1) {
                res += element.total * 1;
            }
        });
        //console.log(res);
        $(".right .zj").html(res.toFixed(2));

    }

    $("#allSelector").click(function () {
        $(".gouxuan").prop("checked", $(this).is(":checked"));
        console.log("---");

    })

    /* 给删除添加点击事件 */
    $("tbody").on("click", ".delss", function () {
        let ggid = $(".del").parent().attr("data-index");
        $.ajax({
            type: "get",
            url: "../server/removeCart.php",
            data: "goodid=" + ggid,
            success: function (response) {}
        });
        //console.log(ggid);
        $(this).parent().parent().remove();
    })

    $("tbody").on("click", ".btnA", function () {
        let ggid = $(this).parent().parent().attr("data-index");
        let num = $(this).siblings(".num").val();
        num = num - 1;
        if (num <= 0) {
            return;
        }
        //console.log(num, targetData);
        $(this).siblings(".num").val(num);
        let index = $(this).parent().parent().index();
        //console.log(index);
        let total = num * targetData[index].price;
        total = total.toFixed(2);
        $(this).parent().siblings(".xj").html("￥" + total);
        // let res = $(".zj").text();
        // res = res.slice(1);
        // console.log(res);

        // res = res - targetData[index].price;
        // $(".zj").html("￥" + res);
        $.ajax({
            type: "post",
            url: "../server/shuaxin.php",
            data: `goodid=${ggid}&num=${num}&total=${total}`,
            success: function (response) {

            }
        });
        let res = 0;
        for (var i = 1; i <= $("tr").length; i++) {
            // $("tr").eq(i).children(".xj").text();
            let a = ($("tr").eq(i).children(".xj").text()).slice(1);
            res = res + a * 1;
            $(".zj").html("￥" + res.toFixed(2))
        }

    });
    $("tbody").on("click", ".btnB", function () {
        let ggid = $(this).parent().parent().attr("data-index");
        console.log(ggid);

        let num = $(this).siblings(".num").val();
        num = num * 1 + 1;
        $(this).siblings(".num").val(num);
        let index = $(this).parent().parent().index();
        let total = num * targetData[index].price;
        total = total.toFixed(2);
        console.log(total);

        $(this).parent().siblings(".xj").html("￥" + total);
        // let res = $(".zj").text();
        // res = res.slice(1);
        // console.log(res);
        // res = res * 1 + (targetData[index].price) * 1;
        // $(".zj").html("￥" + res);
        $.ajax({
            type: "post",
            url: "../server/shuaxin.php",
            data: `goodid=${ggid}&num=${num}&total=${total}`,
            success: function (response) {

            }
        });
        let res = 0;
        for (var i = 0; i <= $("tr").length; i++) {
            // $("tr").eq(i).children(".xj").text();
            let a = ($("tr").eq(i).children(".xj").text()).slice(1);

            res = res + a * 1;

            $(".zj").html("￥" + res.toFixed(2))
        }


    });
    // $("#allSelector").click(function () {

    //     console.log("---");
    //     if ($(this).is(":checked") == false) {
    //         $(".zj").html(0)
    //     }
    // })


})