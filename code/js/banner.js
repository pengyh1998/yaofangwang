$(function () {
    class BannerManager {
        constructor(data) {
            this.data = data;
            this.sliderBox = null;
            this.sliderNav = null;
            this.slider = null;
        }
        init() {
            /* 初始化数据 */
            this.index = 0;
            this.sliderBoxStyleLeft = 0;
            this.sliderBoxItemWidth = 780;
            this.createHTML();
            $(".banner .container").append($(this.slider));
            this.randomColor();
            this.sliderBoxItemCount = this.data.length;
            this.addEventHandle();
            this.switchSlider(0);
            this.autoPlayer();
            this.addMouseHandle();
            this.addMouseHandleWithItem();
        }
        createHTML() {
            let sliderBox = document.createElement("ul");
            sliderBox.className = "slider-box";
            let html = this.data.map((ele) => {
                return `<li class="slider-box-item"><img src=${ele}></li>`
            }).join("");
            sliderBox.innerHTML = html;
            let sliderControl = document.createElement("div");
            sliderControl.className = "slider-control";
            sliderControl.innerHTML = `
             <span class="prev"></span>
             <span class="next"></span>
        `
            let sliderNav = document.createElement("ol");
            sliderNav.className = "slider-nav";
            let html2 = this.data.map((ele, index) => {
                return `<li class="slider-nav-item">${index + 1}</li>`
            }).join("");
            sliderNav.innerHTML = html2;


            let slider = document.createElement("div");
            slider.className = "slider"
            slider.appendChild(sliderBox)
            slider.appendChild(sliderControl)
            slider.appendChild(sliderNav)

            this.slider = slider;
            this.sliderBox = sliderBox;
            this.sliderNav = sliderNav;
            this.sliderControl = sliderControl;
        }
        randomColor() {

            function getColor() {
                let r = Math.random() * 256;
                let g = Math.random() * 256;
                let b = Math.random() * 256;
                let a = Math.random();
                let color = `rgba(${r},${g},${b},${a})`;
                return color;
            }
            Array.from(this.sliderBox.children).forEach((ele) => {
                ele.style.background = getColor();
            })
        }
        autoPlayer() {
            this.timer = setInterval(() => {
                this.next();
            }, 3000)
        }
        next() {
            this.index++;
            /*临界值检查*/
            if (this.index > (this.sliderBoxItemCount - 1)) {
                this.index = 0;
            }
            this.sliderBox.style.left = -this.index * this.sliderBoxItemWidth + "px";
            this.switchSlider(this.index);
        }
        prev() {
            this.index--;
            /*临界值检查*/
            if (this.index < 0) {
                this.index = this.sliderBoxItemCount - 1;
            }
            this.sliderBox.style.left = -this.index * this.sliderBoxItemWidth + "px";
            this.switchSlider(this.index);
        }
        addEventHandle() {
            /* 获取标签 */
            this.sliderControl.onclick = (e) => {
                if (e.target.className == "prev") {
                    this.prev();
                } else if (e.target.className == "next") {
                    this.next();
                }
            }
        }
        switchSlider(index) {
            Array.from(this.sliderNav.children).forEach((ele) => {
                ele.className = "slider-nav-item"
            })
            this.sliderNav.children[index].className = "slider-nav-item active";
            if (index == 0) {
                $(".banner").css("background-color", "#F53445");
            } else if (index == 1) {
                $(".banner").css("background-color", "#83DAB7");
            } else if (index == 2) {
                $(".banner").css("background-color", "#C5DFF6");
            } else if (index == 3) {
                $(".banner").css("background-color", "#5C8FE1");
            } else if (index == 4) {
                $(".banner").css("background-color", "#FE4377");
            } else if (index == 5) {
                $(".banner").css("background-color", "#FBFBFB");
            }
        }
        addMouseHandle() {
            /* 鼠标移入的时候 */
            this.slider.onmouseenter = () => {
                clearInterval(this.timer)
            }

            /* 鼠标移出的时候 */
            this.slider.onmouseleave = () => {
                this.autoPlayer();
            }
        }
        addMouseHandleWithItem() {
            Array.from(this.sliderNav.children).forEach((ele, index) => {
                ele.onclick = () => {
                    /* 切换标签 */
                    this.index = index;
                    this.sliderBox.style.left = -this.index * this.sliderBoxItemWidth + "px";
                    this.switchSlider(this.index);
                }
            })
        }
    }

    var arr = [
        "images/banner-xinren.png",
        "images/banner-baoyou.jpg",
        "images/banner-zhuanxiang.jpg",
        "images/banner-app.png",
        "images/banner-quan.png",
        "images/banner-gg.jpg",
    ]
    var banner = new BannerManager(arr);
    banner.init();
});