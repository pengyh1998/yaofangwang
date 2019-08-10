// 当页面加载完后再执行Javascript代码
window.onload = function () {
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
    let oBox = $("#box");
    let margin = 10;
    let gid = decodeURI(location.search).slice(1);
    let gidd = gid.slice(gid.indexOf("=") + 1);
    //console.log(gid);
    $.ajax({
        type: "post",
        url: "../server/details.php",
        data: gid,
        success: function (str) {
            //console.log(str);
            let data = JSON.parse(str);
            let html = data.map(ele => {
                return `
                <div class="box-left">
                    <div id="middle-box">
                        <img src="${ele.middImg1}" id="middle-img">
                        <div id="shadow"></div>
                        <span class="imgTip">温馨提醒：商品包装因厂家更换频繁，如有不符请以实物为准。</span>
                    </div>
                    <div id="small-box">
                        <div><img src="${ele.smallImg1}" class="current"></div>
                        <div><img src="${ele.smallImg2}" class="current""></div>
                        <div><img src="${ele.smallImg3}" class="current""></div>
                        <div><img src="${ele.smallImg4}" class="current""></div>
                        <div><img src="${ele.smallImg5}" class="current""></div>
                    </div>
                    <div class="share">
                        <div class="ids">商品编号：521976</div>
                        <a class="item" href="">
                            <i></i>
                        收藏该商品</a>
                    </div>
                </div>
                <div class="box-center">
                    <div id="large-box">
                        <img src="${ele.bigImg1}" id="large-img">
                     </div>
                    <h1>
                        <span>${ele.name}</span>
                        <i></i>
                    </h1>
                    <div class="appad">
                        <p class="AppDown">新客APP下单领20元券</p>
                        <p class="AppDownTwo"><a href="">立即去领</a></p>
                        <a href="https://www.yaofangwang.com/zt/yjby.html" class="right-entry">
                        <img src="https://c1.yaofangwang.net/4/2366/306cdcb42072dd1993b24f55d040e151.jpg">
                        </a>
                    </div>
                    <div class="info">
                        <dl class="name">
                            <dt>通 用 名</dt>
                            <dd class="dd1">${ele.tyname}</dd>
                            <dt>商品名/商标</dt>
                            <dd class="dd2">${ele.spsb}</dd>
                            <span>[注]</span>
                        </dl>
                        <dl class="guige">
                            <dt>包装规格</dt>
                            <dd class="dd1">${ele.guige}</dd>
                            <dt>剂型/型号</dt>
                            <dd class="dd2">${ele.jixing}</dd>
                        </dl>
                        <dl class="shengchan">
                            <dt>生产企业</dt>
                            <dd class="dd1">${ele.shengchan}</dd>
                            <dt>批准文号</dt>
                            <dd class="dd2">
                            <img style="height:14px;"
                            src="${ele.pzwh}">
                            </dd>
                        </dl>
                    <div class="price">
                        <dl>
                            <dt>优惠券</dt>
                            <dd>
                                <div>
                                    <span class="sp1">券</span>
                                    <span class="sp2">满150减3</span>
                                </div>
                                <div>
                                    <span class="sp1">券</span>
                                    <span class="sp2">满250减5</span>
                                </div>
                                <div>
                                    <span class="sp1">券</span>
                                    <span class="sp2">满500减10</span>
                                </div>
                            </dd>
                            <div class="qrcode">
                                <i></i>手机扫一扫
                                <div class="code"><img src="https://www.yaofangwang.com/common/QRCode?type=2&id=20646608"
                                    alt="">
                                <span class="txt">查药比价更方便</span>
                                </div>
                            </div>
                        </dl>
                        <dl>
                            <dt>零售价格</dt>
                            <dd class="mon">￥<span>${ele.money}</span></dd>
                        </dl>
                    </div>
                    <dl class="yunfei">
                        <dt>运&nbsp;&nbsp;&nbsp;&nbsp;费</dt>
                        <dd>
                            至广州市 &nbsp;&nbsp;&nbsp;&nbsp;快递：8.00
                        </dd>
                    </dl>
                <dl class="shu">
                    <dt>需求数量</dt>
                    <dd class="w1">
                        <div class="quantity">
                            <a class="sub dis" href="#" id="buyminus">-</a>
                            <input type="text" class="num" value="1" id="quantity">
                            <a class="add" href="#" id="buyplus">+</a>
                        </div>
                        <div class="par">
                            库存： <label id="reserve">68</label>盒 ,限购10盒
                        </div>
                    </dd>
                </dl>
                <div class="mainop">
                    <a href="" class="ibtn2" id="buy">提交需求</a>
                    <a href="###" class="ibtn1" id="addcart">加入需求单</a>
                </div>
                <div class="cer-bot"></div>
            </div> 
        </div>
        <div class="box-right">
        </div>
                `;

            })

            $("#box").html(html);

            var oSmallBox = document.getElementById("small-box"),
                oSmallImg = oSmallBox.getElementsByClassName("current"),
                oMiddleImg = document.getElementById("middle-img"),
                oLargeImg = document.getElementById("large-img"),
                oMiddleBox = document.getElementById("middle-box"),
                oShadow = document.getElementById("shadow"),
                oLargeBox = document.getElementById("large-box"),
                oBody = document.getElementsByTagName("body")[0],
                oBox = document.getElementById("box");

            for (var i = 0; i < oSmallImg.length; i++) {

                //绑定onmouseenter事件，当鼠标移入到图像上时触发
                oSmallImg[i].onmouseenter = function () {

                    //修改中型图片和大型图片的src地址
                    oMiddleImg.src = "../images/details/midd" + this.src.slice(this.src.indexOf("-"));
                    //console.log(oMiddleImg.src);
                    oLargeImg.src = "../images/details/big" + this.src.slice(this.src.indexOf("-"));
                }
            }

            //鼠标进入middle-box，显示遮罩层和右侧大图区域
            oMiddleBox.onmouseenter = function () {
                oLargeBox.style.display = "block";
                oShadow.style.display = "block";
            }

            //鼠标离开middle-box，隐藏遮罩层和右侧大图区域
            oMiddleBox.onmouseleave = function () {
                oLargeBox.style.display = "none";
                oShadow.style.display = "none";
            }
            var srcoll = 0;
            $(window).scroll(function () {
                srcoll = $(window).scrollTop();
            })
            //给middle-box添加鼠标移动事件
            oMiddleBox.onmousemove = function (e) {
                //事件对象兼容
                //console.log(srcoll);

                var ev = e || window.event;
                var iL = ev.clientX - (oBody.clientWidth - 1190) / 2 - oShadow.offsetWidth / 2;
                var iT = ev.clientY - oBox.offsetTop + srcoll - oShadow.offsetHeight / 2;
                //console.log(iL, iT,);

                //限制左侧方向
                if (iL < 0) {
                    iL = 0;
                }

                //限制上侧方向
                if (iT < 0) {
                    iT = 0;
                }

                //遮罩层的left移动的最大值
                var iMaxL = oMiddleBox.offsetWidth - oShadow.offsetWidth;

                if (iL > iMaxL) {
                    iL = iMaxL;
                }

                //遮罩层的top移动的最大值
                var iMaxT = oMiddleBox.offsetHeight - oShadow.offsetHeight;

                if (iT > iMaxT) {
                    iT = iMaxT;
                }

                oShadow.style.left = iL + "px";
                oShadow.style.top = iT + "px";

                //比例：iShadow / iShadowMaxL = iLargeImgL / iLargeImgMaxL 
                //计算大图片所移动的left值

                var iLargeImgL = iL * (oLargeImg.offsetWidth - oLargeBox.offsetWidth) / iMaxL;
                var iLargeImgT = iT * (oLargeImg.offsetHeight - oLargeBox.offsetHeight) / iMaxT;

                oLargeImg.style.left = -iLargeImgL + "px";
                oLargeImg.style.top = -iLargeImgT + "px";

            }

            /* 加入购物车的功能 */
            $("#box").on("click", ".ibtn1", function () {
                // console.log(itemData);
                console.log(data);
                var goodid = data.map((ele) => {
                    return ele.gid;

                }).join("")
                var price = data.map((ele) => {
                    return ele.money;

                }).join("")

                console.log(goodid, price);

                $.ajax({
                    type: "get",
                    url: "../server/addCart.php",
                    data: `goodid=${goodid}&price=${price}`,
                    dataType: "json",
                    success: function (response) {
                        // console.log(response);
                        var text = response["totalRow"];
                        $("#catShow").html(text);
                        //window.open("../html/shopingCart.html");

                    }
                });

            })

            /* 给购物车按钮添加点击事件 */
            $("body").on("click", ".cart-list", function () {
                window.open("../html/shopingCart.html")
            })
        }

    });
}