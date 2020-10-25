// JS Information ======================================================
// Site URL:http://kurashiki.me/
// File name:common.js
// Summary:各種共通スクリプト
// Created:2020-10-23
// Last update:2020-10-23 by Sadaoka
// Copyright:(C) BUNKASOZOSHA Co.,Ltd.
//======================================================================

//TOPメインの縦サイズをブラウザーの高さに合わせる
$(function() {
  var $innerHeight=window.innerHeight;
  $('header section.mainvisual .inner').css('height', $(window).innerHeight()+'px');
});

//TOPメインのパララックス
$(function() {
  var target1=$("#parallax-main");
  var targetPosOT1=target1.offset().top;
  var targetFactor=0.5;
  var windowH=$(window).height();
  var scrollYStart1=targetPosOT1 - windowH;
  $(window).on('scroll', function() {
    var scrollY=$(this).scrollTop();
    if(scrollY > scrollYStart1) {
      target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
    }
    else {
      target1.css('background-position', 'center top');
    }
  });
});

//スクロールフェードイン
$(document).ready(function () {
  $(window).scroll(function () {
    $('.fadein').each(function() {
      var elemPos=$(this).offset().top;
      var scroll=$(window).scrollTop();
      var windowHeight=$(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
      else {
        $(this).removeClass('scrollin');
      }
    });
  });
});

//トップページのNEWSセクションはスクロールでフェードインではなく時間差でフェードイン
//$(function() {
//  $('section#news').delay(1500).queue(function(){
//      $(this).addClass('scrollin');
//  });
//});

//スクロールインバナー
$(function() {
  var bannerBox=$('.scroll_banner_box');
  var closeFlag=false;
  bannerBox.hide(); //スクロールが300に達したらバナー表示
  $(window).scroll(function () {
    if (closeFlag==true) {
      return;
    }
    if ($(this).scrollTop() > 100) {
      bannerBox.fadeIn('fast');
    }
    else {
      bannerBox.fadeOut('fast');
    }
  }
  ); //クローズボタン
  $('.scroll_banner_box .close').click(function() {
    bannerBox.hide();
    closeFlag=true;
  });
});

// PageTopボタン
$(document).ready(function() {
  var pagetop=$('.pagetop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn('fast');
    }
    else {
      pagetop.fadeOut('fast');
    }
  });
  pagetop.click(function () {
    $('body, html').animate( {
      scrollTop: 0
    }
    , 500);
    return false;
  });
});