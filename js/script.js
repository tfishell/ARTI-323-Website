$(document).ready(function() {

	$("#icon_1").click(function() {
	 	loadPage("pages/1.html", $(this));
	});
	$("#icon_2").click(function() {
	 	loadPage("pages/2.html", $(this));
	});
	$("#icon_3").click(function() {
	 	loadPage("pages/3.html", $(this));
	});
	$("#icon_4").click(function() {
	 	loadPage("pages/4.html", $(this));
	});
	
 });

 function loadPage(page, square){
 
 	var saved_html = square.html();
 	
	// load spinning icon
	square.html('<img src="images/ajax-loader.gif" width="16" height="16">');
	
	var jqxhr = $.ajax( page );
	
	jqxhr.done(function(str) { 
		//success 
		square.html(""); // clear out gif progress animation and grow box. 
		console.log(str);
		square.animate({
		   width: '+=406px',
		   height: '+=234px',
		}, 1500, function() {
    		square.html(str);
  		});
		
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
 