$(document).ready(function(){$(window).scroll(function(){var a=$(window).scrollTop(),b=$("header").offset().top;a>b?$(".product-nav").addClass("sticky"):$(".product-nav").removeClass("sticky")}),$(".feature").viewportChecker({classToAdd:"animate"})});