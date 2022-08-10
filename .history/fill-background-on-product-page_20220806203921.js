window.addEventListener('load', function () {

    var header_height = ($('.wex-category-headerline').height()) +
        ($('.v-header').height()) +
        ($('.breadcrumb').outerHeight(true));

    var body_height = 138;
    // Вычисление количества одноразок на бекграунде (1 под на 60 пикселей)
    var pod_quantity = 8x;


    $('.bg-header-container').height(body_height);

    // Заполнение фона подами
    for (let i = 0; i < pod_quantity; i++) {
        var img = document.createElement("img");
        img.className = "floating_bg_img floating_bg_img_header";
        img.src = "/image/floating header background/elf_bar_NC_1800.png";
        img.style.top = Math.random() * header_height + "px";
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 20 + "s"
        var div = document.getElementById("bg-header-container");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img floating_bg_img_header";
        img.src = "/image/floating header background/hqd.png";
        img.style.top = Math.random() * header_height + "px";
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 20 + "s";
        var div = document.getElementById("bg-header-container");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img floating_bg_img_header";
        img.src = "/image/floating header background/hqd_king.png";
        img.style.top = Math.random() * header_height + "px";
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 20 + "s";
        var div = document.getElementById("bg-header-container");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img floating_bg_img_header";
        img.src = "/image/floating header background/wide_hqd.png";
        img.style.top = Math.random() * header_height + "px";
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 20 + "s";
        var div = document.getElementById("bg-header-container");
        div.appendChild(img);
    }
}, false);
