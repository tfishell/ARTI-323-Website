$(document).ready(function() {


$("#click_here").click(function() {
	   //when the id is clicked upon
	   $("#box").animate({
		   width: '+=100px',
		   height: '+=100px',
		   /*left: '+=100px',
		   top: '-=100px',
		   marginLeft: ".25in",
		   marginTop: "-.75in",*/
		   }, 
		   
		    1500 );
		   
		   /*$(this).resize(function() {
			   scale: 0.5;
			   maxWidth: 500;
			   maxHeight: 750;
		   });*/
		});
 });
	