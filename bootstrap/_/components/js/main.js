$(document).ready(function() {

    var $window = $(window)

    $('.products-btn').click(function() {
        $('.drawer').toggleClass('show')
        $(this).toggleClass('active').toggleClass('expanded')
    })

    $('.search-btn').click(function() {
        $('.search-md').toggleClass('active')
    })

    /*function toggleDrawer() {
        return $('.products-btn').click(function() {
            $('.drawer-menu').toggleClass('show')
        })
    }

    function resize() {
        if($window.width() > 992 && $window.width < 1200) {
            return toggleDrawer()
        }
    }*/

    /**
     * This part toggles if the nav bar is active or not, 
     * as well as the state of the menu icon.
     */

    $(".menu").on('click', function(evn) {
        evn.preventDefault();
        $(this).toggleClass('is-active');
        //$(this).toggleClass('is-inactive');
        $('.nav-links').toggleClass('show')
    });

	/** 
     * This part does the "fixed navigation after scroll" functionality
     * We use the jQuery function scroll() to recalculate our variables as the 
     * page is scrolled/
     */
    /*$window.scroll(function() {
    	var window_top = $window.scrollTop(),
    	    div_top = $('header').offset().top

    	if(window_top > div_top) {
    		$('.product-nav').addClass('sticky')
            $('.buy').addClass('visible')
        } else {
    		$('.product-nav').removeClass('sticky')
            $('.buy').removeClass('visible')
    	}
    })*/

	$('.feature').viewportChecker({
		classToAdd: 'animate'
	})

    /*$window
        .resize(resize)
        .trigger('resize')*/

})