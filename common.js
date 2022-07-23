// $(document).ready(function() {
$(window).load(function() {

    function change($tr, val) {
        var $input = $tr.find('.wex-product-quantity-center');
        var count = parseInt($input.val()) + val;
        count = count < 1 ? 1 : count;
        $input.val(count);

        var price = parseInt(document.getElementById('lnr-cart').innerHTML.replace(/[^\d.]/g, ''));


        // Установить значение и стиль для перечеркнутой цены
        // if (count == 1) {
        // document.getElementById("count_price_striked").style.display = "none";
        // document.getElementById("dynamic_prise").style.margin = "30px 0px 0px 0px";
        // } else if (count > 1) {
        // document.getElementById("dynamic_prise").style.margin = "10px 0px 0px 0px";
        // document.getElementById("count_price_striked").style.display = "block";
        document.getElementById("count_price_striked").textContent = 240 * count + " грн";
        // }

        // Установить значение для цены со скидкой
        if (count == 1)
            document.getElementById("count_price").textContent = price * count + " грн";
        else if (count >= 2 && count <= 9) document.getElementById("count_price").textContent = price * count + " грн";
        else if (count >= 10 && count <= 19) document.getElementById("count_price").textContent = (count * price) - 150 + " грн";
        else if (count >= 20) document.getElementById("count_price").textContent = (count * price) - 200 + " грн";
    }
    $('.wex-product-quantity-minus').click(function() {
        change($(this).closest('.wex-product-quantity'), -1);
    });
    $('.wex-product-quantity-plus').click(function() {
        change($(this).closest('.wex-product-quantity'), 1);
    });
    $('.wex-product-quantity-center').on("input", function() {
        var count = document.getElementById('input-quantity').value;
        var price = parseInt(document.getElementById('lnr-cart').innerHTML.replace(/[^\d.]/g, ''));
        // Установить значение и стиль для перечеркнутой цены
        // if (count == 1) {
        // document.getElementById("count_price_striked").style.display = "none";
        // document.getElementById("dynamic_prise").style.margin = "30px 0px 0px 0px";
        // } else if (count > 1) {
        // document.getElementById("dynamic_prise").style.margin = "10px 0px 0px 0px";
        // document.getElementById("count_price_striked").style.display = "block";
        document.getElementById("count_price_striked").textContent = 240 * count + " грн";
        // }

        // Установить значение для цены со скидкой
        if (count == 1)
            document.getElementById("count_price").textContent = price * count + " грн";
        else if (count >= 2 && count <= 9) document.getElementById("count_price").textContent = price * count + " грн";
        else if (count >= 10 && count <= 19) document.getElementById("count_price").textContent = (count * price) - 150 + " грн";
        else if (count >= 20) document.getElementById("count_price").textContent = (count * price) - 200 + " грн";
    });
})