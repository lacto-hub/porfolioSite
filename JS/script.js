//drawerの呼び出し
$(document).ready(function() {
    $('.drawer').drawer();
//リンククリック後にdrawerを閉じる
$('.nav-list').on('click', function() {
  $('.drawer').drawer('close');
  });
});
//ヘッダーの背景色変更
$(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
      $('.header').css("background-color", "#FBFBFD")
      $('.header').css("border-bottom", "solid 2px #F3F3F3")
    } else {
      $('.header').css("background-color", "transparent")
      $('.header').css("border-bottom", "transparent")
    }
});
// トップへ戻るボタンの色変更
$(window).scroll(function() {
    var scrollArea = document.body.clientHeight - document.documentElement.clientHeight - $("footer").innerHeight() + 50;
    if ($(this).scrollTop() > scrollArea) {
        $('.totop').css("color", "#FBFBFD")
    } else {
        $('.totop').css("color", "#606060")
    }
});
// トップへ戻るボタンのフェードイン
$(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
        $('.totop').fadeIn(300)
    } else {
        $('.totop').fadeOut(300)
    }
});
// クリックでトップへ移動
$(function() {
    $('.totop').click(function() {
        $('html,body').animate( {scrollTop: 0}, 500)
    })
});
// スムーススクロール
$('a[href^="#"]').click(function(){
    let header = $("header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
        {
            scrollTop: position
        },
        speed
    );
    return false;
});
//worksのオーバーレイの表示
$(function() {
    $('.works-item').hover(function() {
        $('.works-detail', this).animate({
          top:"0px"
        }, 400);
    }, function(){
        $('.works-detail', this).animate({
            top:"100%"
        }, 400);
    });
});
// googleform
let $form = $( '#js-form' )
$form.submit(function (e) { 
    $.ajax({ 
        url: $form.attr('action'), 
        data: $form.serialize(), 
        type: "POST", 
        dataType: "xml", 
        statusCode: { 
            0: function () { 
    //送信に成功したときの処理
                $form.slideUp()
                $( '#js-success' ).slideDown()
                }, 
            500: function () { 
    //送信に失敗したときの処理
                $form.slideUp()
                $( '#js-error' ).slideDown()
                } 
        } 
    }); 
    return false; 
});