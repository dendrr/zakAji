window.addEventListener('load', function () {
    var newDiv = document.createElement("div"); //create sub container 
    newDiv.id = "bg_subcont"; // set id
    newDiv.style.height = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - 540; // set max height - height of header
    document.getElementById("bg-container").appendChild(newDiv); // append div 

    for (let i = 0; i < 15; i++) {
        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/elf_bar_NC_1800.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = Math.random() * 2 + "s"
        var div = document.getElementById("bg_subcont");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/hqd.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = Math.random() * 100 + "ms"
        var div = document.getElementById("bg_subcont");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/hqd_king.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = Math.random() * 100 + "ms"
        var div = document.getElementById("bg_subcont");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/wide_hqd.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = Math.random() * 100 + "ms"
        var div = document.getElementById("bg_subcont");
        div.appendChild(img);
    }
}, false);
