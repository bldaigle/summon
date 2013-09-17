jQuery(document).ready(function() {

	// If you are already using the custom link in Summon and don't want to lose it, you can add it back in with the following. Just be sure to replace the href and the anchor's value with your own. //
	
	$("#topbar").find(".link").prepend('<a href="http://library.owu.edu/summon.html">Search OhioLINK books</a>');


  // Fix the broken saved items bar at the bottom of the page //
	
	if($("#dock-container").length > 0) {
	 
	  $("body").append('<style>#dock-container{position:fixed !important;}</style>');
	}
});
