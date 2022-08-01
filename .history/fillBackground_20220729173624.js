for (let i = 0; i < 50; i++) {
    let rand_X = Math.random() * 100;
    let rand_Y = Math.random() * 100;

    var img = document.createElement("img");
    img.class = "floating_bg_img";
    img.src = "/image/floating background/wide_hqd.png";
    
    var div = document.getElementById("bg-container");
    div.appendChild(img);
}