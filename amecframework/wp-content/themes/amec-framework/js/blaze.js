
/* Move Social Media Icon on Team element */

jQuery(document).ready(function($) {
	jQuery('.avia-team-member').each(function(index, el) {
		var attachElement = jQuery(this).find('.team-member-name');
		jQuery(this).find('.team-social').detach().appendTo(attachElement);
	});
});

/* END - Move Social Media Icon on Team element */


/* Adjust Explanation box sizes to equal height */

jQuery(document).ready(function($) {
	resize_and_position();
});

jQuery(window).resize(function(){
	resize_and_position();
});

function resize_and_position(){
	make_same_height('.inputs', '.activities');
	make_same_height('.out-takes', '.outcomes');
	if (jQuery(window).width() < 767 ){
		move_please_note();
	}
	set_anchor_points();
}


function make_same_height(element_class1, element_class2){
	var tallest_box_height = 0;
	var element1 = jQuery('#explanation-blocks').find(element_class1);
	var element2 = jQuery('#explanation-blocks').find(element_class2);
	// Reset the element height first so that preious resizes don't affect the result.
	jQuery(element1).height('auto');
	jQuery(element2).height('auto');
	//console.log (jQuery(element1).height());

	tallest_box_height = jQuery(element1).height();
	//console.log(tallest_box_height);

	if (jQuery(element2).height() > tallest_box_height){
		tallest_box_height = jQuery(element2).height();
	}
	//console.log(tallest_box_height);

	jQuery(element1).height(tallest_box_height);
	jQuery(element2).height(tallest_box_height);
}

/* END - Adjust Explanation box sizes */


/* Move "Please Note" section on mobile */

function move_please_note(){
	console.log ("Move Please Note.");
	// First, find the section element that is the parent of the class .please-note
	var please_note_section = jQuery('.please-note').parent();
	console.log (please_note_section);
	// Find the section element that is the parent of the class .impact
	var impact_section = jQuery('.impact').parent();
	// Move the Please_note_section to just after the Impact section.
	jQuery(please_note_section).detach().appendTo(impact_section);
}

/* END - Move "Please Note" section on mobile */

/* Add active class to side menu button */

jQuery('#top .main_color.side-menu .av-subnav-menu>li>a').click(function(){
	jQuery('#top .main_color.side-menu .av-subnav-menu>li>a').removeClass('active');
	jQuery(this).addClass('active');
});

/* END - Add active class to side menu button */


/* Set menu item active when manually scrolling to section */
var sections = [];
var section = [];

function set_anchor_points(){
	sections = [];

	jQuery('.avia-section').each(function(){
		sections.push([jQuery(this).attr('id'), jQuery(this).offset().top]);
	});
	//console.log (sections);
}

jQuery(window).on('scroll', function() {
	for(var i = 0; i < sections.length; i++){
		section = sections[i];
		/*
		console.log ('Section ' + i + 
					 ' Section name ' + section[0] + 
					 ' Section top ' + section[1] + 
					 ' Scroll Top ' + jQuery(window).scrollTop());
	    */
	    var halfWindowHeight = jQuery(window).height() / 2;
	    if ( jQuery(window).scrollTop()+halfWindowHeight > section[1] ){
			//console.log(' Current Section ' + section[0]);
			var thisLinkRef = 'a[href="#' + section[0] + '"]';
			var thisLink = jQuery('.side-menu').find(thisLinkRef);
			if (jQuery(thisLink).not('.active')) {
				jQuery('.side-menu a.active').removeClass('active');
				jQuery('.side-menu').find(thisLink).addClass('active');
				
			} 
	    } 		
	}
});



/* END - Set menu item active when manually scrolling to section */








