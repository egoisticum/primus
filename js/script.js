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

 //google maps
    function initialize() {
        var location1 = new google.maps.LatLng('49.449291', '11.075922');
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
            draggable: false,
            disableDefaultUI: false,
            
            center: new google.maps.LatLng('49.449291', '11.075922'),
            zoom: 18,
            scrollwheel: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: location1,
            map: map,
            icon: { url: 'images/vector/mapMarkerIcon.svg' }
        });
    }
     google.maps.event.addDomListener(window, 'load', initialize);
     google.maps.event.addDomListener(window, "resize", function() {
        initialize();
});

});
jq('.carousel').carousel({
  interval: 5000
});

