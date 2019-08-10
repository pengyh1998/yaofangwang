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


    let orderType = 0;
    let getList = (page) => {
        $.ajax({
            type: "post",
            url: "../server/getDataList.php",
            data: `page=${page}&orderType=${orderType}`,
            dataType: "json",
            success: function (response) {
                console.log(response);
                // [2] 根据数据渲染页面
                var res = response.data.map(ele => {
                    return `
                    <li id=${ele.gid}><a href="http://127.0.0.1/yaofangwang/code/html/details.html?id=${ele.gid}">
                <img src="${ele.src}" alt=""></a>
                <p class="price">￥${ele.money}</p>
                 <a href="" class="name">${ele.name}</a>
                 <p class="guig">${ele.guige}</p>
                 <p class="jix">${ele.jixing}</p>
                 <p class="pz">批准文号：</p>
                 <p class="acount">共<span>${ele.num}</span>个商家有售<a href="" class="sq">查看详情</a></p>
                 <div class="sc">${ele.shengchan}</div>
                 </li>
                    `
                }).join("");
                $(".goods").html(res);
            }
        });

    }
    getList(0);


    //[1] 获取服务器存储商品数据
    //[2] 获取总页码
    $.ajax({
        type: "post",
        url: "../server/getPageCount.php",
        dataType: "json",
        success: function (response) {
            let pageSize = response.data.count;
            var res = '';
            for (let i = 0; i < pageSize; i++) {
                $("#page").append(`<a href="javascript:;">${i + 1}</a>`)
            }
            $("#page").children("a").eq(0).addClass("active");
        }
    });

    $("#page").on("click", "a", function () {
        var index = $(this).index();
        /* (1) 设置当前标签的选中状态 */
        $(this).addClass("active").siblings().removeClass("active");
        /* (2) 发送网络更新页面 */
        getList(index);
    })

    $("#nav li").click(function () {
        orderType = $(this).index();
        getList(0);
    })

})