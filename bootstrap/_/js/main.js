$(document).ready(function(){$(window).scroll(function(){var a=$(window).scrollTop(),b=$("header").offset().top;a>b?($(".product-nav").addClass("sticky"),$(".buy").addClass("visible")):($(".product-nav").removeClass("sticky"),$(".buy").removeClass("visible"))}),$(".feature").viewportChecker({classToAdd:"animate"}),$(".products-btn").click(function(){$(".drawer-menu").addClass("show")}),$(".drawer").mouseleave(function(a){console.log("out"),setTimeout(function(){$(".drawer-menu").removeClass("show")},600)})});