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
    	} else {
    		$('.product-nav').removeClass('sticky')
    	}
    })

	$('.feature').viewportChecker({
		classToAdd: 'animate'
	})
})