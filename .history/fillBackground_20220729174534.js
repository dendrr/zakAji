for (let i = 0; i < 50; i++) {
    var img = document.createElement("img");
    img.className = "floating_bg_img";
    img.src = "/image/floating background/wide_hqd.png";
    img.style = "top:" + Math.random() * 100 + "%; left:" + Math.random() * 100 + "%;";

    var div = document.getElementById("bg-container");
    div.appendChild(img);
}