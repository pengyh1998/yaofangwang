$(function () {
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
                    <td class="xj">￥ ${ele.total}</td>
                    <td class="del"><a class="delss">删除</a></td>
                </tr>
                        `;
                    return html;
                }).join("");

                $("tbody").html(res);

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
        $("body").prop("checked", $(this).is(":checked"))
    })

    /* 给删除添加点击事件 */
    $("tbody").on("click", ".delss", function () {
        let ggid = $(".del").parent().attr("data-index");
        //.attr("href")


        //console.log(ggid);

        $.ajax({
            type: "get",
            url: "../server/removeCart.php",
            data: "goodid=" + ggid,
            success: function (response) {}
        });
        console.log(ggid);
        $(this).parent().parent().remove();
    })



})