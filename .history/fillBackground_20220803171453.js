window.addEventListener('load', function () {
    var header_height = ($('.wex-category-headerline').height()) +
        ($('.v-header').height()) +
        ($('.breadcrumb').outerHeight(true));
    var body_height = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - header_height;
    // Вычисление количества одноразок на бекграунде (1 под на 60 пикселей)
    var pod_quantity = Math.round((body_height / 62.5) / 4);


    $('#bg-container').offset({ top: header_height });
    $('#bg-container').height(body_height);

    // Заполнение фона подами
    for (let i = 0; i < pod_quantity; i++) {
        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/elf_bar_NC_1800.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 20 + "s"
        var div = document.getElementById("bg-container");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/hqd.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 20 + "s";
        var div = document.getElementById("bg-container");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/hqd_king.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 20 + "s";
        var div = document.getElementById("bg-container");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/wide_hqd.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 20 + "s";
        var div = document.getElementById("bg-container");
        div.appendChild(img);
    }
}, false);
