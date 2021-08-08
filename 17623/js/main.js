/*! yuncms-ui v1.0.0 | by HTTGO Team | http://www.cssmoban.com | (c) 2017 HTTGO, Inc. |  | 2017-06-26"A"08:06:58 UTC */ 
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
require('./global');
$(function(){
    var pathname=window.location.pathname;
    if(pathname.length>=3){
        $('.header-nav-ul li').removeClass('on');
        $('.header-nav-ul a').each(function(){


            if($(this).attr('href').indexOf(pathname)===2){
                $(this).parent().addClass('on');
            }
        });
    }
    $('.header-nav-ul li').hover(function(){
            var names=$(this).children('a').attr('name');
            $('.'+names).show();

        },
        function(){
            var names=$(this).children('a').attr('name');
            $('.'+names).hide();
        }

    );
});
//商品详情页轮播
$(function(){
    $('.pro-details li').mouseover(function(){
        var imgpath=$(this).children('img').attr('src');
        $('.pro-details-img img').attr('src',imgpath);

    });
});
},{"./global":2}],2:[function(require,module,exports){
(function (global){
'use strict';
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
$(function () {

});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])