var newDiv = document.createElement("div"); //create sub container 
document.getElementsByClassName("bg-container").append(newDiv); // append div 
newDiv.id = "bg_subcont"; // set id
newDiv.style.height = document.getElementsByClassName('product-category-271').clientHeight; // set max height

for (let i = 0; i < 15; i++) {
    var img = document.createElement("img");
    img.className = "floating_bg_img";
    img.src = "/image/floating background/elf_bar_NC_1800.png";
    img.style.top = Math.random() * 100 + "%"
    img.style.left = Math.random() * 100 + "%";
    var div = document.getElementById("bg_subcont");
    div.appendChild(img);


    var img = document.createElement("img");
    img.className = "floating_bg_img";
    img.src = "/image/floating background/hqd.png";
    img.style.top = Math.random() * 100 + "%"
    img.style.left = Math.random() * 100 + "%";

    var div = document.getElementById("bg_subcont");
    div.appendChild(img);


    var img = document.createElement("img");
    img.className = "floating_bg_img";
    img.src = "/image/floating background/hqd_king.png";
    img.style.top = Math.random() * 100 + "%"
    img.style.left = Math.random() * 100 + "%";

    var div = document.getElementById("bg_subcont");
    div.appendChild(img);


    var img = document.createElement("img");
    img.className = "floating_bg_img";
    img.src = "/image/floating background/wide_hqd.png";
    img.style.top = Math.random() * 100 + "%"
    img.style.left = Math.random() * 100 + "%";

    var div = document.getElementById("bg_subcont");
    div.appendChild(img);
}