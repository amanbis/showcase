$(document).ready(function() {

	/** 
     * This part does the "fixed navigation after scroll" functionality
     * We use the jQuery function scroll() to recalculate our variables as the 
     * page is scrolled/
     */
    $(window).scroll(function() {
    	var window_top = $(window).scrollTop()
    	var div_top = $('header').offset().top

    	if(window_top > div_top) {
    		$('.product-nav').addClass('sticky')
            $('.product-nav p').removeClass('hidden').addClass('visible')
        } else {
    		$('.product-nav').removeClass('sticky')
            $('.product-nav p').removeClass('visible').addClass('hidden')
    	}
    })

	$('.feature').viewportChecker({
		classToAdd: 'animate'
	})
})