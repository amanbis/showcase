$(document).ready(function(){$(window).scroll(function(){var a=$(window).scrollTop(),b=$("header").offset().top;a>b?($(".product-nav").addClass("sticky"),$(".product-nav p").removeClass("hidden").addClass("visible")):($(".product-nav").removeClass("sticky"),$(".product-nav p").removeClass("visible").addClass("hidden"))}),$(".feature").viewportChecker({classToAdd:"animate"})});