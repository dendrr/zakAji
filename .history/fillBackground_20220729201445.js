var clientHeight = document.getElementsByClassName('product-category-271').clientHeight;
var bg_cont = document.getElementById("bg-container");
bg_cont.style.height = clientHeight;

for (let i = 0; i < 15; i++) {
    var img = document.createElement("img");
    img.className = "floating_bg_img";
    img.src = "/image/floating background/elf_bar_NC_1800.png";
    img.style.top = Math.random() * 100 + "%"
    img.style.left = Math.random() * 100 + "%";
    var div = document.getElementById("bg-container");
    div.appendChild(img);


    var img = document.createElement("img");
    img.className = "floating_bg_img";
    img.src = "/image/floating background/hqd.png";
    img.style.top = Math.random() * 100 + "%"
    img.style.left = Math.random() * 100 + "%";

    var div = document.getElementById("bg-container");
    div.appendChild(img);


    var img = document.createElement("img");
    img.className = "floating_bg_img";
    img.src = "/image/floating background/hqd_king.png";
    img.style.top = Math.random() * 100 + "%"
    img.style.left = Math.random() * 100 + "%";

    var div = document.getElementById("bg-container");
    div.appendChild(img);


    var img = document.createElement("img");
    img.className = "floating_bg_img";
    img.src = "/image/floating background/wide_hqd.png";
    img.style.top = Math.random() * 100 + "%"
    img.style.left = Math.random() * 100 + "%";

    var div = document.getElementById("bg-container");
    div.appendChild(img);
}