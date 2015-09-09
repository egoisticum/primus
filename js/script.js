/*
Name: script.js
Description: execution javaScript code
Author: Almir Dodigovic
Collaborators: Haris Hadziahmetovic
*/
var jq = jQuery.noConflict();
jq(document).ready(function(){    
   var WindowWidth = parseInt(jq(window).width());
   var scroll_start = 0;
   var startchange = jq('#startchange');
   		  if( WindowWidth < 768){
			   jq('.navbar-fixed-top').css('background-color', 'rgba(255, 255, 255, 0.9)');
		   }
   var offset = startchange.offset();
    if (startchange.length){
   jq(document).scroll(function() { 
      scroll_start = jq(this).scrollTop();
      if(scroll_start > offset.top) {
			   jq('.navbar-fixed-top').css({
			  'background-color' : 'rgba(255, 255, 255, 0.9)',
			  'transition': 'background-color 0.5s ease 0s'
			  });

       } else {
		   if( WindowWidth > 768){
			   jq('.navbar-fixed-top').css('background-color', 'transparent');
			   }
			
       }
   });
    }
    
    // Isotope
jq( function() {
  // init Isotope
  var $grid = jq('.grid').isotope({
    itemSelector: '.element-item2',
    filter: '.A1'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50

    // show if name ends with -ium
    ium: function() {
      var name = jq(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter on select change
  jq('.filters-select ul li a').on( 'click',function() {
    // get filter value from option value
    var filterValue = this.name;
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
});
});
jq('.carousel').carousel({
  interval: 5000
});

