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