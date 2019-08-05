// $(function () {
//     class ceartGoodsList {
//         constructor(data) {
//             this.data = data;
//         }
//         init() {
//             $(".goods").append(this.creatHTMLList());
//         }
//         creatHTMLList() {
//             let res = this.data.map((ele) => {
//                 let html = `
//                 <li>
//                 <img src="${ele.src}" alt="">
//                 <p class="price">￥${ele.money}</p>
//                 <a href="" class="name">${ele.name}</a>
//                 <p class="guig">${ele.guige}</p>
//                 <p class="jix">${ele.jixing}</p>
//                 <p class="pz">批准文号：</p>
//                 <p class="acount">共<span>${ele.num}</span>个商家有售<a href="" class="sq">查看详情</a></p>
//                 <div class="sc">${ele.shengchan}</div>
//             </li>
//         `; //<img src="${ele.pzwh}" alt=""></img>
//                 return html;
//             }).join("");
//             return res;
//         }
//     }

//     $.getJSON("../server/list.json", function (res) {
//         let a = new ceartGoodsList(res);
//         a.init();
//     });

// });


$(function () {
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
                    <li>
                <img src="${ele.src}" alt="">
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