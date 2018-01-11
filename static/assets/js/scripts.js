var s = jQuery.noConflict();

// s(function() {	
// 	s('a[href*=#]:not([href=#]):not([href=#inline])').click(function() {
// 		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// 	  		var target = s(this.hash);
// 	  		target = target.length ? target : s('[name=' + this.hash.slice(1) +']');
// 	  		if (target.length) {
// 	    		s('html,body').animate({
// 	      			scrollTop: target.offset().top		
// 	    		}, 500);
// 	    		return false;
// 	  		}
// 		}
// 	});
// });

var h = jQuery.noConflict();

h(document).ready(function() {
	
	if (Modernizr.touch) { 
	} else { 
		h('.systems').hover(
			function () {
	      		h('.download').addClass('download-pressed');
	        	h('.systems-options').addClass('systems-options-show');
			}, 
			function () {
		   		h('.download').removeClass('download-pressed');
		    	h('.systems-options').removeClass('systems-options-show');
			}
		)
	}
	
});

var d = jQuery.noConflict();

d(document).ready(function(){
	
	d('ul.tabs li').click(function(){
		var tab_id = d(this).attr('data-tab');

		d('ul.tabs li').removeClass('current');
		d('.tab-content').removeClass('current');

		d(this).addClass('current');
		d("#"+tab_id).addClass('current');
	})

})