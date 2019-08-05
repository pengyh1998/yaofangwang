$(function () {
    class ceartList {
        constructor(data) {
            this.data = data;
        }
        init() {
            $(".prod").append(this.creatHTMLList());
        }
        creatHTMLList() {
            let res = this.data.map((ele) => {
                let html = `
        <li>
            <img src="${ele.img}" alt="">
            <a href="">${ele.txt}</a>
            <span>${ele.price}</span>
        </li>
        `;
                return html;
            }).join("");
            return res;
        }
    }

    $.getJSON("./src/index.json", function (res) {
        let a = new ceartList(res);
        a.init();
    });

});