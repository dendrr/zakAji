// $(document).ready(function() {
$(window).load(function() {

    function change($tr, val) {
        var $input = $tr.find('.wex-product-quantity-center');
        var count = parseInt($input.val()) + val;
        count = count < 1 ? 1 : count;
        $input.val(count);

        var price = parseInt(document.getElementById('lnr-cart').innerHTML.replace(/[^\d.]/g, ''));

        if (count >= 1 && count <= 9) document.getElementById("count_price").textContent = count * price + " грн";
        else if (count >= 10 && count <= 15) document.getElementById("count_price").textContent = count * (price - 15) + " грн";
        else if (count >= 16) document.getElementById("count_price").textContent = count * (price - 18) + " грн";
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

        if (count >= 1 && count <= 9) document.getElementById("count_price").textContent = count * price + " грн";
        else if (count >= 10 && count <= 15) document.getElementById("count_price").textContent = count * (price - 15) + " грн";
        else if (count >= 16) document.getElementById("count_price").textContent = count * (price - 18) + " грн";
    });
})