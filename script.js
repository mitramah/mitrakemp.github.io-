/*Hamburger Button*/
/* =================================================*/
/* the codes are adopted from Jesse Couch */
/* web link : https://codepen.io/designcouch/pen/Atyop */
/*===================================================*/

$(document).ready(function() {

	var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap'),
    	$sidebarArrow = $('.sidebar-menu-arrow');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

	// Sidebar navigation arrows

	$sidebarArrow.click(function() {
		$(this).next().slideToggle(300);
	});
    
    //Check to see if the window is top if not then display button
    //the codes are adopted from https://answers.squarespace.com/questions/10479/how-can-i-add-a-scroll-to-top-button.html 
    
   $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
 	

});