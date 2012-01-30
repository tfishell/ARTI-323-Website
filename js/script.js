$(document).ready(function() {

	$("#icon_1").click(function() {
	   // Tyler, put your animation here, then use the complete function handler to load the javascript
	 	loadPage("pages/1.html", $(this));
	});
	
 });

 function loadPage(page, square){
 
 	var saved_html = square.html();
 	
	// load spinning icon
	square.html('<img src="images/ajax-loader.gif" width="16" height="16">');
	
	var jqxhr = $.ajax( page );
	
	jqxhr.done(function(str) { 
		//success 
		console.log(str);
		square.html(str);
	});
	
	jqxhr.fail(function(str) { 
		// 
		// remove spinning icon and replace with warning icon
		console.log(str);
		square.html(saved_html);
		square.append('<img src="images/warning.gif" width="16" height="14">');
	});
	
	jqxhr.always(function(str) { 
		// 
		// remove spinning icon
		console.log(str);
	});
 	
 }
 