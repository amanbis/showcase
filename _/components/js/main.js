$(document).ready(function() {

    var $window = $(window)

    /** 
     * This function toggles the classes for expanding and collapsing
     * the product category drawer.
     */

    $('.products-btn').click(function() {
        $('.drawer').toggleClass('show')
        $(this).toggleClass('active').toggleClass('expanded')
    })


    /** 
     * This simple toggles the active state of the search bar
     * for desktop and tablet viewports.
     */

    $('.search-btn').click(function() {
        $('.search-md').toggleClass('active')
    })


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
     * page is scrolled.
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


    /** 
     * This part triggers the viewportChecker function to initiate the
     * animation for product features.
     */

	$('.feature').viewportChecker({
		classToAdd: 'animate'
	})

})