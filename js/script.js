/*
Name: script.js
Description: execution javaScript code
Author: Almir Dodigovic
Collaborators: Haris Hadziahmetovic
*/
var jq = jQuery.noConflict();
jq(document).ready(function(){
	//on scroll hide top-header bar
	jq(window).on("load scroll resize", function(){
		var elem = jq("#mainHeader .topHeader");
		if(jq(elem).visible() && jq(window).innerWidth() >= 768){
			jq("#mainHeader #mainMenu").css("top", "40px");
		}
		else{
			jq("#mainHeader #mainMenu").css("top", "0");
		}
	});
	//on scrol and on load hide remove "container-fluid class" from menu
	function fullWidthMobileMenu(){
		if(jq(window).innerWidth() <= 768){
			jq("#mainMenu .container-fluid").removeClass("container-fluid");
		}
		else{
			jq("#mainMenu .container-fluid").addClass("container-fluid");
		}
	}
	fullWidthMobileMenu();
	jq(window).resize(function(){
		fullWidthMobileMenu();
	});
	//navbar changing toggle button icons
	function toggleNavbarButton(){
		jq("#mainHeader #mainMenu .navbar-toggle").click(function(){
			jq("#mainHeader #mainMenu .navbar-toggle i.menu-icon").toggleClass("close");
			jq("#mainHeader #mainMenu .navbar-header").toggleClass("collapsed");
		});
	}
	toggleNavbarButton();

	//slider
	var sliderCourses = "#courses-slider ";
	JQ(window).load(function(){
		ambitiousSlider.initSlider(sliderCourses);
	});
	JQ(window).resize(function(){
		ambitiousSlider.initSlider(sliderCourses);
	});
	//left-click
	JQ(sliderCourses + '#left-nav').click(function (e) {
		ambitiousSlider.left(sliderCourses);
	});
	//prev-click
	JQ(sliderCourses + '#right-nav').click(function (e) {
		ambitiousSlider.right(sliderCourses);
	});
	//specific-click
	JQ(sliderCourses + '.carousel-indicators .index').click(function (e) {
		var index = JQ(this).attr('data-slide-to');
		ambitiousSlider.specific(sliderCourses, index);
		JQ(this).siblings().removeClass("active");
		JQ(this).addClass("active");
	});
	/*home page contact map*/
	googleMap.setMapDimensions();
    jq(window).resize(function () {
        googleMap.setMapDimensions();
    });
});