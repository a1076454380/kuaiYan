$(function() {
    // 1tooltip
    $('#tip1').tipso({
        useTitle: false
    });
    // 2tooltip
    $('#tip2').tipso({
        useTitle: false,
        position: 'left'
    });
    // 1tooltip
    $('#tip3').tipso({
        useTitle: false
    });
    // 2tooltip
    $('#tip4').tipso({
        useTitle: false,
        position: 'left'
    });
    // 2tooltip
    $('#tip5').tipso({
        useTitle: false,
        position: 'right'
    });
    $(".iphone").click(function() {
        $(".iphone").removeClass('img-active');
        $(this).addClass("img-active");

    })
    $(".check-group").click(function() {
        $(".check-group").removeClass("iphone-active");
        $(this).addClass("iphone-active");
    })
    $("#chart").css('background', 'white');

    function auto() {
        $("#chart div").css("width", "100%")
        $("#chart canvas").css("width", "100%")
    }
    auto();
    $(window).resize(function() {
        $("#chart div").css("width", "100%")
        $("#chart canvas").css("width", "100%")
    })
    $("#toggle").click(function() {
        var boo = $(this).attr('class');
        if (boo) {
            $(this).removeClass('toggle-a');
            $("#toggle-a").removeClass('toggle-active');
            $(".table-main").fadeOut();
            $('.kong-noDelete').show();
        } else {
            $(this).addClass('toggle-a');
            $("#toggle-a").addClass('toggle-active');
            $(".table-main").fadeIn();
            $('.kong-noDelete').hide();
        }
    })
    /*的点击头部隐藏出现，遮罩层也出现，
    点击遮罩层，同时隐藏*/
    $('.read p').click(function() {
        $('.read_hide,.zzc').show();
    });
    $('.msg').click(function() {
        $('.msg_hide,.zzc').show();
    });
    $('.login').click(function() {
        $('.login_hide,.zzc').show();
    });
    $('.tel').click(function() {
        $('.tel_hide,.zzc').show();
    });
    $('.grzx .xiugai').click(function() {
        $('.grzx_alert,.zzc').show();
    })
    $('.grzx_alert .quxiao').click(function() {
        $('.grzx_alert,.zzc').hide();
    });
    $('.tsgl_a').click(function() {
        $('.ts_alert,.zzc').show();
    });
    $('.ts_alert .quxiao,.ts_alert .ts_reset').click(function() {
        $('.ts_alert,.zzc').hide();
    })
    $('.grzx_alert .cont li').click(function() {
        $('.grzx_alert .cont li').removeClass('alertIndex');
        $(this).addClass('alertIndex');
    });
    $('.pbgz .add_p').click(function() {
        $('.ysz_alert,.zzc').show();
    });
    $('.ysz_alert .quxiao').click(function() {
        $('.ysz_alert,.zzc').hide();
    });
    $('.ysz_form .gg .three p').click(function() {
        $('.ysz_form .gg .three p').removeClass('yszIndex');
        $(this).addClass('yszIndex');
    });
    $('.bbkz_inp label').click(function() {
        var inpVal = $(this).siblings('input').val();
        $('.bbkz_inp label').removeClass('bbkzIndex');
        $(this).addClass('bbkzIndex');
        $('.bbkz_inp label').find('img').attr('src', 'img/dui_031.png');
        $(this).find('img').attr('src', 'img/dui_03.png');
    });
    $('.grzx_alert .queding').click(function() {
        $('.grzx_alert,.zzc').hide();
        $('.grzx_alert .cont li').each(function() {
            if ($(this).hasClass('alertIndex')) {
                var imgVal = $(this).find('img').attr('src');
                $('.grzx .img img').attr('src', imgVal);
            }
        })
    });
    $('.main_left li').click(function() {
        $('.main_left li a').removeClass('aIndex');
        $(this).find('a').addClass('aIndex');
        $('.main_left li').removeClass('liIndex');
        $(this).addClass('liIndex');
    });
    $('.main_left .tmpz').click(function() {
        $('.main_left .tmpz').find('img').attr('src', 'img/tmpz1.png');
        $('.main_left .spsz').find('img').attr('src', 'img/spsz.png');
        $('.main_left .jsmx').find('img').attr('src', 'img/jsmx.png');
        $('.main_left .yysj').find('img').attr('src', 'img/yysj.png');
    });
    $('.main_left .spsz').click(function() {
        $('.main_left .tmpz').find('img').attr('src', 'img/tmpz.png');
        $('.main_left .spsz').find('img').attr('src', 'img/spsz1.png');
        $('.main_left .jsmx').find('img').attr('src', 'img/jsmx.png');
        $('.main_left .yysj').find('img').attr('src', 'img/yysj.png');
    });
    $('.main_left .jsmx').click(function() {
        $('.main_left .tmpz').find('img').attr('src', 'img/tmpz.png');
        $('.main_left .spsz').find('img').attr('src', 'img/spsz.png');
        $('.main_left .jsmx').find('img').attr('src', 'img/jsmx1.png');
        $('.main_left .yysj').find('img').attr('src', 'img/yysj.png');
        $('.main_left .txhd').find('img').attr('src', 'img/txhd.png');
        $('.main_left .fbfh').find('img').attr('src', 'img/fbfh.png');
    });
    $('.main_left .yysj').click(function() {
        $('.main_left .tmpz').find('img').attr('src', 'img/tmpz.png');
        $('.main_left .spsz').find('img').attr('src', 'img/spsz.png');
        $('.main_left .jsmx').find('img').attr('src', 'img/jsmx.png');
        $('.main_left .yysj').find('img').attr('src', 'img/yysj1.png');
        $('.main_left .txhd').find('img').attr('src', 'img/txhd.png');
        $('.main_left .fbfh').find('img').attr('src', 'img/fbfh.png');
    });
    $('.main_left .txhd').click(function() {
        $('.main_left .txhd').find('img').attr('src', 'img/txhd1.png');
        $('.main_left .fbfh').find('img').attr('src', 'img/fbfh.png');
        $('.main_left .jsmx').find('img').attr('src', 'img/jsmx.png');
        $('.main_left .yysj').find('img').attr('src', 'img/yysj.png');
    });
    $('.main_left .fbfh').click(function() {
        $('.main_left .txhd').find('img').attr('src', 'img/txhd.png');
        $('.main_left .fbfh').find('img').attr('src', 'img/fbfh1.png');
        $('.main_left .jsmx').find('img').attr('src', 'img/jsmx.png');
        $('.main_left .yysj').find('img').attr('src', 'img/yysj.png');
    });
    $('.main_right .item label').click(function() {
        $('.main_right .item label').removeClass('labelIndex');
        $(this).addClass('labelIndex');
        $('.main_right .item label').find('img').attr('src', 'img/dui_031.png');
        $(this).find('img').attr('src', 'img/dui_03.png');
    });
    $('.main_right .cont .kq').each(function() {
        var tdVal = $(this);
        if (tdVal.text() == '开启') {
            tdVal.css('background', '#9eb5b7');
        } else if (tdVal.text() == '关闭') {
            tdVal.css('background', '#79d381');
        };
    });
    $('.main_right .hdsz li').click(function() {
        $('.main_right .hdsz li').removeClass('liIndex');
        $(this).addClass('liIndex');
    });
    $('.search .fb').click(function() {
        $('.fb_alert,.zzc').show();
    });
    $('.fb_alert .close').click(function() {
        $('.fb_alert,.zzc').hide();
    });
    $('.by_form .two div').click(function() {
        $('.by_form .two div').removeClass('divIndex');
        $(this).addClass('divIndex');
    });
    $('.by_by .one').click(function() {
        $(this).hide();
        $('.by_by .two').show();
        var twoBlock = $('.by_by .two').css('display');
        if (twoBlock == 'block') {
            var num = 6;
            $('.two_checked .time').text(num);
            var timer = setInterval(function() {
                $('.two_checked .time').text(num);
                num--;
                if (num < 0) {
                    $('.by_by .two').hide();
                    $('.by_by .three').show();
                }
            }, 1000);
        }
    });
    // 功能组件点击时，切换图片与字体颜色-----------------开始
    $('.inner_left .item a').click(function() {
        $('.inner_left .item a p').removeClass('txtIndex');
        $(this).find('p').addClass('txtIndex');
        $('.inner_left .item').find('li').removeClass('item_bg');
        $(this).parents('li').addClass('item_bg');
    });
    $('.inner_left .item1').click(function() {
        $('.inner_left .item1').find('.img').css('background-position', '-40px -332px');
        $('.inner_left .item2').find('.img').css('background-position', '-81px -290px');
        $('.inner_left .item3').find('.img').css('background-position', '-122px -290px');
        $('.inner_left .item4').find('.img').css('background-position', '-163px -290px');
        $('.inner_left .item5').find('.img').css('background-position', '-204px -290px');
        $('.inner_left .item6').find('.img').css('background-position', '-245px -290px');
        $('.inner_left .item7').find('.img').css('background-position', '-286px -290px');
        $('.inner_left .item8').find('.img').css('background-position', '-330px -290px');
        $('.inner_left .item9').find('.img').css('background-position', '-370px -290px');
    });
    $('.inner_left .item2').click(function() {
        $('.inner_left .item1').find('.img').css('background-position', '-40px -290px');
        $('.inner_left .item2').find('.img').css('background-position', '-81px -332px');
        $('.inner_left .item3').find('.img').css('background-position', '-122px -290px');
        $('.inner_left .item4').find('.img').css('background-position', '-163px -290px');
        $('.inner_left .item5').find('.img').css('background-position', '-204px -290px');
        $('.inner_left .item6').find('.img').css('background-position', '-245px -290px');
        $('.inner_left .item7').find('.img').css('background-position', '-286px -290px');
        $('.inner_left .item8').find('.img').css('background-position', '-330px -290px');
        $('.inner_left .item9').find('.img').css('background-position', '-370px -290px');
    });
    $('.inner_left .item3').click(function() {
        $('.inner_left .item1').find('.img').css('background-position', '-40px -290px');
        $('.inner_left .item2').find('.img').css('background-position', '-81px -290px');
        $('.inner_left .item3').find('.img').css('background-position', '-122px -332px');
        $('.inner_left .item4').find('.img').css('background-position', '-163px -290px');
        $('.inner_left .item5').find('.img').css('background-position', '-204px -290px');
        $('.inner_left .item6').find('.img').css('background-position', '-245px -290px');
        $('.inner_left .item7').find('.img').css('background-position', '-286px -290px');
        $('.inner_left .item8').find('.img').css('background-position', '-330px -290px');
        $('.inner_left .item9').find('.img').css('background-position', '-370px -290px');
    });
    $('.inner_left .item4').click(function() {
        $('.inner_left .item1').find('.img').css('background-position', '-40px -290px');
        $('.inner_left .item2').find('.img').css('background-position', '-81px -290px');
        $('.inner_left .item3').find('.img').css('background-position', '-122px -290px');
        $('.inner_left .item4').find('.img').css('background-position', '-163px -332px');
        $('.inner_left .item5').find('.img').css('background-position', '-204px -290px');
        $('.inner_left .item6').find('.img').css('background-position', '-245px -290px');
        $('.inner_left .item7').find('.img').css('background-position', '-286px -290px');
        $('.inner_left .item8').find('.img').css('background-position', '-330px -290px');
        $('.inner_left .item9').find('.img').css('background-position', '-370px -290px');
    });
    $('.inner_left .item5').click(function() {
        $('.inner_left .item1').find('.img').css('background-position', '-40px -290px');
        $('.inner_left .item2').find('.img').css('background-position', '-81px -290px');
        $('.inner_left .item3').find('.img').css('background-position', '-122px -290px');
        $('.inner_left .item4').find('.img').css('background-position', '-163px -290px');
        $('.inner_left .item5').find('.img').css('background-position', '-204px -332px');
        $('.inner_left .item6').find('.img').css('background-position', '-245px -290px');
        $('.inner_left .item7').find('.img').css('background-position', '-286px -290px');
        $('.inner_left .item8').find('.img').css('background-position', '-330px -290px');
        $('.inner_left .item9').find('.img').css('background-position', '-370px -290px');
    });
    $('.inner_left .item6').click(function() {
        $('.inner_left .item1').find('.img').css('background-position', '-40px -290px');
        $('.inner_left .item2').find('.img').css('background-position', '-81px -290px');
        $('.inner_left .item3').find('.img').css('background-position', '-122px -290px');
        $('.inner_left .item4').find('.img').css('background-position', '-163px -290px');
        $('.inner_left .item5').find('.img').css('background-position', '-204px -290px');
        $('.inner_left .item6').find('.img').css('background-position', '-245px -332px');
        $('.inner_left .item7').find('.img').css('background-position', '-286px -290px');
        $('.inner_left .item8').find('.img').css('background-position', '-330px -290px');
        $('.inner_left .item9').find('.img').css('background-position', '-370px -290px');
    });
    $('.inner_left .item7').click(function() {
        $('.inner_left .item1').find('.img').css('background-position', '-40px -290px');
        $('.inner_left .item2').find('.img').css('background-position', '-81px -290px');
        $('.inner_left .item3').find('.img').css('background-position', '-122px -290px');
        $('.inner_left .item4').find('.img').css('background-position', '-163px -290px');
        $('.inner_left .item5').find('.img').css('background-position', '-204px -290px');
        $('.inner_left .item6').find('.img').css('background-position', '-245px -290px');
        $('.inner_left .item7').find('.img').css('background-position', '-286px -332px');
        $('.inner_left .item8').find('.img').css('background-position', '-330px -290px');
        $('.inner_left .item9').find('.img').css('background-position', '-370px -290px');
    });
    $('.inner_left .item8').click(function() {
        $('.inner_left .item1').find('.img').css('background-position', '-40px -290px');
        $('.inner_left .item2').find('.img').css('background-position', '-81px -290px');
        $('.inner_left .item3').find('.img').css('background-position', '-122px -290px');
        $('.inner_left .item4').find('.img').css('background-position', '-163px -290px');
        $('.inner_left .item5').find('.img').css('background-position', '-204px -290px');
        $('.inner_left .item6').find('.img').css('background-position', '-245px -290px');
        $('.inner_left .item7').find('.img').css('background-position', '-286px -290px');
        $('.inner_left .item8').find('.img').css('background-position', '-330px -332px');
        $('.inner_left .item9').find('.img').css('background-position', '-370px -290px');
    });
    $('.inner_left .item9').click(function() {
        $('.inner_left .item1').find('.img').css('background-position', '-40px -290px');
        $('.inner_left .item2').find('.img').css('background-position', '-81px -290px');
        $('.inner_left .item3').find('.img').css('background-position', '-122px -290px');
        $('.inner_left .item4').find('.img').css('background-position', '-163px -290px');
        $('.inner_left .item5').find('.img').css('background-position', '-204px -290px');
        $('.inner_left .item6').find('.img').css('background-position', '-245px -290px');
        $('.inner_left .item7').find('.img').css('background-position', '-286px -290px');
        $('.inner_left .item8').find('.img').css('background-position', '-330px -290px');
        $('.inner_left .item9').find('.img').css('background-position', '-370px -332px');
    });
    // 功能组件点击时，切换图片与字体颜色-----------------结束；
    $('.spjs_cont .item4').click(function() {
        $('.spjs_cont .item4').removeClass('itemIndex');
        $(this).addClass('itemIndex');
    });
    $('.spjs_cont .cffs .item6').click(function() {
        $('.spjs_cont .cffs .item6').removeClass('itemIndex');
        $(this).addClass('itemIndex');
    });
    $('.sctp .img').click(function() {
        $('.sctp .file').click();
    });
    $('.spjs_cont .cd .img').click(function() {
        $(this).siblings('.file').click();
    });
    $('.inner2_bot .title a').click(function() {
        $('.inner2_bot .title a').removeClass('aIndex');
        $(this).addClass('aIndex');
    });
    $('.inner2_bot .cont_t li').click(function() {
        $('.inner2_bot .cont_t li').removeClass('liIndex');
        $(this).addClass('liIndex');
        var liIndex = $(this).index();
        $('.inner2_bot .cont_c li').hide();
        $('.inner2_bot .cont_c li').eq(liIndex).show();
    });
    $('.main_inner3 .add').click(function() {
        $('.yj_alert,.zzc').show();
    });
    $('.yj_alert .close,.yj_alert .reset').click(function() {
        $('.yj_alert,.zzc').hide();
    });
    $('.tu_right .xs').click(function() {
        $('.tu_right .xs').removeClass('bxs');
        $(this).addClass('bxs');
    });
    $('.tu_right .loading').click(function() {
        $(this).addClass('color1');
        $(this).find('.xct_img').find('img').attr('src', 'img/phone_1.png');
    });
    $('.tu_alert .one .item').click(function() {
        $('.tu_alert .one .item').removeClass('itemIndex');
        $(this).addClass('itemIndex');
        var thisIndex = $(this).index() - 1;
        $('.tu_alert .cont .two').hide();
        $('.tu_alert .cont .two').eq(thisIndex).show();
    })
    $('.qd_right .cancel,.qd_right .close,.qd_right .sure').click(function() {
        $('.tu_alert,.zzc,.tu_alert1').hide();
    });
    $('.tu_alert .two li').click(function() {
        $('.tu_alert .two li').removeClass('liIndex');
        $(this).addClass('liIndex');
        var srcVal = $(this).find('img').attr('src');
        $('.qd_left .img').attr('src', srcVal);
    });
    $('.qd_right .sure').click(function() {
        var srcVal = $('.qd_left .img').attr('src');
        $('.tu_left_img img').attr('src', srcVal);
    });
    $('.xtc2Click').click(function() {
        $('.tu_alert,.zzc').show();
    });
    $('.tubiao .up').click(function() {
        $(this).siblings('.file').click();
    })
    $('.tu_alert1 .two li').click(function() {
        var srcVal = $(this).find('img').attr('src');
        $('.tu_alert1 .img1').attr('src', srcVal);
        $('.tu_alert1 .two li').removeClass('liIndex');
        $(this).addClass('liIndex');
    });
    $('.tu_alert1 .one .item').click(function() {
        $('.tu_alert1 .one .item').removeClass('itemIndex');
        $(this).addClass('itemIndex');
        var thisIndex = $(this).index() - 1;
        $('.tu_alert1 .cont .two').hide();
        $('.tu_alert1 .cont .two').eq(thisIndex).show();
    });
    $('.xct .xct2').click(function() {
        $('.tu_alert1,.zzc').show();
    });
    // 选择证书
    $('.main_ios1 .item .check').click(function() {
        $(this).siblings('.file').click();
    })
    // 遮罩层
    /*点击遮罩层，弹出的弹框全部都隐藏*/
    $('.zzc').click(function() {
        $(this).hide();
        $('.read_hide,.msg_hide,.login_hide,.tel_hide,.grzx_alert,.ts_alert,.ysz_alert,.fb_alert,.yj_alert,.tu_alert,.tu_alert1').hide();
    });

    // 头部电话里的扫码功能
    $('.tel .sao').hover(function() {
        $('.tel .erweima').show();
    }, function() {
        $('.tel .erweima').hide();
    })
    /*头部信息里的内容是否为已读， 
    如果b标签里是0， 就是已读， 
    如果不是， 未读；*/
    $('header .msg_hide b.hide').each(function() {
        var bVal = $(this).text();
        if (bVal > 0) {
            $(this).siblings('a').css('background', 'url(img/msg_msg1.png) no-repeat left');
        } else {
            $(this).siblings('a').css('background', 'url(img/msg_msg.png) no-repeat left');
        }
    });
    // 点击左侧目录,背景颜色改变
    $('#sidebar li').click(function() {
        $('#sidebar li').css('background', '#fff');
        $(this).not('.h3').css('background', '#FFF3F3');
    });
    // 循环已付款和未付款的字体颜色
    $('.txrq li p').each(function() {
        var pVal = $(this).text();
        if (pVal == '未支付') {
            $(this).css('color', '#999');
        } else if (pVal == '已支付') {
            $(this).css('color', '#3EB73C');
        }
    });
    // 分页中点击每页的字体颜色和背景色
    $('.page a').click(function() {
        $('.page a').removeClass('pageIndex');
        $(this).addClass('pageIndex');
    });
    $(".iphone").click(function() {
        $(".iphone").removeClass('img-active');
        $(this).addClass("img-active");

    })
    $(".check-group").click(function() {
        $(".check-group").removeClass("iphone-active");
        $(this).addClass("iphone-active");
    })
    $("#chart").css('background', 'white');
});