
$(document).ready(function() {
    $("#input-telephone").inputmask("+38(999)999-99-99")
});
$(document).ready(function() {
    $(".wex-phones-parent .wex-phones-clicker").click(function(){
		$(".wex-phones-wrapper").fadeIn();
	})
});

$(document).mouseup(function (e) {
    var container = $(".wex-phones-wrapper");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

$(document).ready(function() {
    $('.wex-header-menu-button').click(function() {
        $('.wex-mobile-menu-wrapper').fadeIn();
    });
    $('.wex-mobile-menu-wrapper .lnr-cross-circle').click(function() {
        $('.wex-mobile-menu-wrapper').fadeOut();
    });
});
$(document).ready(function() {
    $("#feedbackphone").inputmask("+38(999)999-99-99")
});
$(document).mouseup(function(e) {
    var container = $(".wex-header-feedback-wrapper");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});
$(document).ready(function() {
    if ($(window).width() > 1100) {
        var fTop = 125;
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (fTop >= top) {
                $('.wex-header-center').removeClass('wexNavFixed');
				$('.v-header-line-02').removeClass('wexNavFixedMargin');
            } else {
                $('.wex-header-center').addClass('wexNavFixed');
				$('.v-header-line-02').addClass('wexNavFixedMargin');
            }
        });
    } else {
        var fTop = 125;
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (fTop >= top) {
                $('.wex-header-center').removeAttr('style');
                $('.wex-header-buttons .wex-header-feedback').hide();
                $('.v-header-line-02').removeAttr('style');
            } else {
                $('.wex-header-buttons .wex-header-feedback').show();
                $('.v-header-line-02').css({
                    'margin-bottom': '63px'
                });
                $('.wex-header-center').css({
                    'position': 'fixed',
                    'top': '0px',
                    'left': ' 0px',
                    'width': '100%',
                    'z-index': '99'
                });
            }
        });
    }
});
$(document).ready(function() {
    $(".wex-header-feedback").click(function() {
        $(".wex-header-feedback-wrapper").fadeIn();
    });
    $(".wex-header-feedback-wrapper .lnr-cross-circle").click(function() {
        $(".wex-header-feedback-wrapper").fadeOut();
    });
});

function check04() {
    var option04 = $('#feedbackname').val();
    if (option04 != '') {
        return true;
    } else {
        $('#feedbackname').css("border", "1px solid red");
        return false;
    }
}

function check05() {
    var option05 = $('#feedbackphone').val();
    if (option05 != '') {
        return true;
    } else {
        $('#feedbackphone').css("border", "1px solid red");
        return false;
    }
}
$(document).on('change', '.wex-header-feedback-input', function() {
    $(this).css("border", "1px solid #dddddd");
    $(this).css("border-left", "2px solid #56cfe1");
});
$(document).ready(function() {
    $('.wex-header-feedback-button').click(function() {
        if (check04() && check05()) {
            var formData = new FormData($('#formfeedback')[0]);
            $.ajax({
                type: "POST",
                processData: false,
                contentType: false,
                url: '/addons/feedbacksendmail.php',
                data: formData,
                success: function(result) {
                    $('.wex-feedback-section-1').hide();
                    $('.wex-feedback-section-2').fadeIn();
                }
            });
        } else {
            check04();
            check05();
        }
    });
});
$(document).bind('DOMNodeInserted', function(e) {
    var element = $(".alert");
    setTimeout(function() {
        $(element).fadeOut(1000, function() {
            $(this).remove();
        });
    }, 2000);
});
$("#input-option227 input").click(function() {
    $("#input-option227 input:radio").next('img').css("opacity", ".5");
    $("#input-option227 input:radio:checked").next('img').css("opacity", "1");
});
$(document).ready(function() {
    $(".wex-product-options-title:contains('Основной цвет')").hide().parent(".form-group").hide();
});
$(document).ready(function() {
    pdsListRolloverWex();
});

function pdsListRolloverWex() {
    $('.pds a.pds-thumb-rollover').hover(function() {
        $this = $(this);
        var hoverImage = $this.attr('rel');
        $this.parents('.wex-product-wrapper').find('.wex-product-img .wex-product-image').attr('src', hoverImage);
    }, function() {
        $this = $(this);
        var masterImage = $this.attr('master-image');
        $this.parents('.wex-product-wrapper').find('.wex-product-img .wex-product-image').attr('src', masterImage);
    });
}

function getURLVar(key) {
    var value = [];
    var query = String(document.location).split('?');
    if (query[1]) {
        var part = query[1].split('&');
        for (i = 0; i < part.length; i++) {
            var data = part[i].split('=');
            if (data[0] && data[1]) {
                value[data[0]] = data[1];
            }
        }
        if (value[key]) {
            return value[key];
        } else {
            return '';
        }
    } else {
        var query = String(document.location.pathname).split('/');
        if (query[query.length - 1] == 'cart') value['route'] = 'checkout/cart';
        if (query[query.length - 1] == 'checkout') value['route'] = 'checkout/checkout';
        if (value[key]) {
            return value[key];
        } else {
            return '';
        }
    }
}
$(document).ready(function() {
    cols1 = $('#column-right, #column-left').length;
    if (cols1 == 2) {
        $('#content .product-layout:nth-child(2n+2)').after('<div class="clearfix visible-md visible-sm"></div>');
    } else if (cols1 == 1) {
        $('#content .product-layout:nth-child(3n+3)').after('<div class="clearfix visible-lg"></div>');
    } else {
        $('#content .product-layout:nth-child(4n+4)').after('<div class="clearfix"></div>');
    }
    $('.text-danger').each(function() {
        var element = $(this).parent().parent();
        if (element.hasClass('form-group')) {
            element.addClass('has-error');
        }
    });
    $('#currency .currency-select').on('click', function(e) {
        e.preventDefault();
        $('#currency input[name=\'code\']').attr('value', $(this).attr('name'));
        $('#currency').submit();
    });
    $('#language a').on('click', function(e) {
        e.preventDefault();
        $('#language input[name=\'code\']').attr('value', $(this).attr('href'));
        $('#language').submit();
    });
    $('#search input[name=\'search\']').parent().find('button').on('click', function() {
        url = $('base').attr('href') + 'index.php?route=product/search';
        var value = $('header input[name=\'search\']').val();
        if (value) {
            url += '&search=' + encodeURIComponent(value);
        }
        location = url;
    });
    $('#search input[name=\'search\']').on('keydown', function(e) {
        if (e.keyCode == 13) {
            $('header input[name=\'search\']').parent().find('button').trigger('click');
        }
    });
    $('#menu .dropdown-menu').each(function() {
        var menu = $('#menu').offset();
        var dropdown = $(this).parent().offset();
        var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());
        if (i > 0) {
            $(this).css('margin-left', '-' + (i + 5) + 'px');
        }
    });
    $('#list-view').click(function() {
        $('#content .product-layout > .clearfix').remove();
        $('#content .row > .product-layout').attr('class', 'product-layout product-list col-xs-12');
        localStorage.setItem('display', 'list');
    });
    $('#grid-view').click(function() {
        $('#content .product-layout > .clearfix').remove();
        cols = $('#column-right, #column-left').length;
        if (cols == 2) {
            $('#content .product-layout').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
        } else if (cols == 1) {
            $('#content .product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
        } else {
            $('#content .product-layout').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
        }
        localStorage.setItem('display', 'grid');
    });
    if (localStorage.getItem('display') == 'list') {
        $('#list-view').trigger('click');
    } else {
        $('#grid-view').trigger('click');
    }
    $('[data-toggle=\'tooltip\']').tooltip({
        container: 'body'
    });
    $(document).ajaxStop(function() {
        $('[data-toggle=\'tooltip\']').tooltip({
            container: 'body'
        });
    });
});
var cart = {
    'add': function(product_id, quantity) {
        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
            dataType: 'json',
            beforeSend: function() {
                $('#cart > button').button('loading');
            },
            complete: function() {
                $('#cart > button').button('reset');
            },
            success: function(json) {
                $('.alert, .text-danger').remove();
                if (json['redirect']) {
                    location = json['redirect'];
                }
                if (json['success']) {
                    $('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
                    setTimeout(function() {
                        $('#cart > button').html('<i class="fa fa-shopping-cart"></i><span class="count">' + json['count'] + '</span>');
                    }, 100);
                    $('html, body').animate({
                        scrollTop: 0
                    }, 'slow');
                    $('#cart > ul').load('index.php?route=common/cart/info ul li');
                }
            }
        });
    },
    'update': function(key, quantity) {
        $.ajax({
            url: 'index.php?route=checkout/cart/edit',
            type: 'post',
            data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
            dataType: 'json',
            beforeSend: function() {
                $('#cart > button').button('loading');
            },
            complete: function() {
                $('#cart > button').button('reset');
            },
            success: function(json) {
                setTimeout(function() {
                    $('#cart > button').html('<i class="fa fa-shopping-cart"></i><span class="count">' + json['count'] + '</span>');
                }, 100);
                if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
                    location = 'index.php?route=checkout/cart';
                } else {
                    $('#cart > ul').load('index.php?route=common/cart/info ul li');
                }
            }
        });
    },
    'remove': function(key) {
        $.ajax({
            url: 'index.php?route=checkout/cart/remove',
            type: 'post',
            data: 'key=' + key,
            dataType: 'json',
            beforeSend: function() {
                $('#cart > button').button('loading');
            },
            complete: function() {
                $('#cart > button').button('reset');
            },
            success: function(json) {
                setTimeout(function() {
                    $('#cart > button').html('<i class="fa fa-shopping-cart"></i><span class="count">' + json['count'] + '</span>');
                }, 100);
                if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
                    location = 'index.php?route=checkout/cart';
                } else {
                    $('#cart > ul').load('index.php?route=common/cart/info ul li');
                }
            }
        });
    }
}
var voucher = {
    'add': function() {},
    'remove': function(key) {
        $.ajax({
            url: 'index.php?route=checkout/cart/remove',
            type: 'post',
            data: 'key=' + key,
            dataType: 'json',
            beforeSend: function() {
                $('#cart > button').button('loading');
            },
            complete: function() {
                $('#cart > button').button('reset');
            },
            success: function(json) {
                setTimeout(function() {
                    $('#cart > button').html('<i class="fa fa-shopping-cart"></i><span class="count">' + json['count'] + '</span>');
                }, 100);
                if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
                    location = 'index.php?route=checkout/cart';
                } else {
                    $('#cart > ul').load('index.php?route=common/cart/info ul li');
                }
            }
        });
    }
}
var wishlist = {
    'add': function(product_id) {
        $.ajax({
            url: 'index.php?route=account/wishlist/add',
            type: 'post',
            data: 'product_id=' + product_id,
            dataType: 'json',
            success: function(json) {
                $('.alert').remove();
                if (json['success']) {
                    $('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
                }
                if (json['info']) {
                    $('#content').parent().before('<div class="alert alert-info"><i class="fa fa-info-circle"></i> ' + json['info'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
                }
                $('#wishlist-total span').html(json['count']);
                $('#wishlist-total').attr('title', json['count']);
                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');
            }
        });
    },
    'remove': function() {}
}
var compare = {
    'add': function(product_id) {
        $.ajax({
            url: 'index.php?route=product/compare/add',
            type: 'post',
            data: 'product_id=' + product_id,
            dataType: 'json',
            success: function(json) {
                $('.alert').remove();
                if (json['success']) {
                    $('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
                    $('#compare-total').html(json['count']);
                    $('html, body').animate({
                        scrollTop: 0
                    }, 'slow');
                }
            }
        });
    },
    'remove': function() {}
}
$(document).delegate('.agree', 'click', function(e) {
    e.preventDefault();
    $('#modal-agree').remove();
    var element = this;
    $.ajax({
        url: $(element).attr('href'),
        type: 'get',
        dataType: 'html',
        success: function(data) {
            html = '<div id="modal-agree" class="modal">';
            html += '  <div class="modal-dialog">';
            html += '    <div class="modal-content">';
            html += '      <div class="modal-header">';
            html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
            html += '        <h4 class="modal-title">' + $(element).text() + '</h4>';
            html += '      </div>';
            html += '      <div class="modal-body">' + data + '</div>';
            html += '    </div';
            html += '  </div>';
            html += '</div>';
            $('body').append(html);
            $('#modal-agree').modal('show');
        }
    });
});
(function($) {
    $.fn.autocomplete = function(option) {
        return this.each(function() {
            this.timer = null;
            this.items = new Array();
            $.extend(this, option);
            $(this).attr('autocomplete', 'off');
            $(this).on('focus', function() {
                this.request();
            });
            $(this).on('blur', function() {
                setTimeout(function(object) {
                    object.hide();
                }, 200, this);
            });
            $(this).on('keydown', function(event) {
                switch (event.keyCode) {
                    case 27:
                        this.hide();
                        break;
                    default:
                        this.request();
                        break;
                }
            });
            this.click = function(event) {
                event.preventDefault();
                value = $(event.target).parent().attr('data-value');
                if (value && this.items[value]) {
                    this.select(this.items[value]);
                }
            }
            this.show = function() {
                var pos = $(this).position();
                $(this).siblings('ul.dropdown-menu').css({
                    top: pos.top + $(this).outerHeight(),
                    left: pos.left
                });
                $(this).siblings('ul.dropdown-menu').show();
            }
            this.hide = function() {
                $(this).siblings('ul.dropdown-menu').hide();
            }
            this.request = function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(function(object) {
                    object.source($(object).val(), $.proxy(object.response, object));
                }, 200, this);
            }
            this.response = function(json) {
                html = '';
                if (json.length) {
                    for (i = 0; i < json.length; i++) {
                        this.items[json[i]['value']] = json[i];
                    }
                    for (i = 0; i < json.length; i++) {
                        if (!json[i]['category']) {
                            html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
                        }
                    }
                    var category = new Array();
                    for (i = 0; i < json.length; i++) {
                        if (json[i]['category']) {
                            if (!category[json[i]['category']]) {
                                category[json[i]['category']] = new Array();
                                category[json[i]['category']]['name'] = json[i]['category'];
                                category[json[i]['category']]['item'] = new Array();
                            }
                            category[json[i]['category']]['item'].push(json[i]);
                        }
                    }
                    for (i in category) {
                        html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';
                        for (j = 0; j < category[i]['item'].length; j++) {
                            html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
                        }
                    }
                }
                if (html) {
                    this.show();
                } else {
                    this.hide();
                }
                $(this).siblings('ul.dropdown-menu').html(html);
            }
            $(this).after('<ul class="dropdown-menu"></ul>');
            $(this).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));
        });
    }
})(window.jQuery);

$(document).ready(function(){
	$(".wex-options-images .radio label").click(function(){
		var getSrc = $(this).find("img").attr("src");
		getSrc = getSrc.replace('-50x50.jpg','');
		getSrc = getSrc.replace('/cache','');
		getSrc += ".jpg";
		$(".wex-product-thumbnail").attr('data-src', getSrc);
		$(".wex-product-thumbnail").attr('src', getSrc);
		$(".wex-product-thumbnail a .wex-product-thumbnail-img").attr('src', getSrc);
		
	});	
});