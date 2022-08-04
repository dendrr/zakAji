window.addEventListener('load', function () {
    this.alert("asd");
    // Вычисление количества одноразок на бекграунде (1 под на 60 пикселей)
    var pod_quantity = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - 540 - 198;
    pod_quantity = Math.round((pod_quantity / 62.5) / 4);


    // Создание сабконтейнера и установка стилей для него
    var newDiv = document.createElement("div"); //create sub container 
    newDiv.id = "bg_subcont"; // set id
    newDiv.style.height = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - 540 - 198; // set max height - height of header
    newDiv.style.position = "relative";
    newDiv.style.width = 100 + "%";
    document.getElementById("bg-container").appendChild(newDiv); // append div 
    document.getElementById("bg-container").style.height = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - 540 - 198;


    // Заполнение фона подами
    for (let i = 0; i < pod_quantity; i++) {
        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/elf_bar_NC_1800.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 8 + "s"
        var div = document.getElementById("bg_subcont");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/hqd.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 8 + "s";
        var div = document.getElementById("bg_subcont");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/hqd_king.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 8 + "s";
        var div = document.getElementById("bg_subcont");
        div.appendChild(img);


        var img = document.createElement("img");
        img.className = "floating_bg_img";
        img.src = "/image/floating background/wide_hqd.png";
        img.style.top = Math.random() * 100 + "%"
        img.style.left = Math.random() * 100 + "%";
        img.style.animationDelay = "-" + Math.random() * 8 + "s";
        var div = document.getElementById("bg_subcont");
        div.appendChild(img);
    }
}, false);