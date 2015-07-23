var JQ = jQuery.noConflict();

var ambitiousSlider = {
  initSlider: function(elem){
    var childrenItems = JQ(elem + ".inner").children(".item").length;//get all slider items count
    var itemWidth;//set width of any of item
    var itemHeight;

    //ok let's make it full responsive
    switch(true){
      case(JQ(window).width() < 400): itemWidth = JQ(elem).width() * 0.85; break;
      case(JQ(window).width() >= 400 && JQ(window).width() < 600): itemWidth = JQ(elem).width() * 0.65; break;
      case(JQ(window).width() >= 600 && JQ(window).width() < 1000): itemWidth = JQ(elem).width() * 0.37; break;
      default: itemWidth = JQ(elem).width() * 0.25; break;
    }
    var innerWidth = itemWidth * (childrenItems+1);//set width of .inner div inside slider
    //set css width of inner and of any specific item
    JQ(elem + '.inner').css("width", innerWidth + "px");
    JQ(elem + '.inner .item').css("width", itemWidth + "px");
    //set css height of slider
    itemHeight = JQ(elem + '.inner').height() + 50;
    JQ(elem).css("height", itemHeight + "px");
  },
  left: function(elem){
    JQ(elem + '.inner .item').last().prependTo(elem + '.inner');
    JQ(elem + '.inner .item').addClass('pulse');
  },
  right: function(elem){
    JQ(elem + '.inner .item').first().appendTo(elem + '.inner');
    JQ(elem + '.inner .item').addClass('pulse');
  },
  specific: function(elem, start){
    var end = JQ(elem + '.inner').children().length;
    var arr = [];
    var finalArr = [];
    for(i=start; i <  end; i++){
      arr.push(JQ(elem + ".inner .item").slice(i).prop('outerHTML'));
    }
    for(var i=0; i < start; i++){
      arr.push(JQ(elem + ".inner .item").slice(i).prop('outerHTML'));
    }

    JQ(elem + '.inner').children().remove();
    JQ.each(arr, function(i, val){
      JQ(elem + '.inner').append(val);
    });
    //JQ(elem + '.inner').html(finalArr.html());
  }
};
var googleMap = {
  //google maps
  initialize: function() {
      var location1 = new google.maps.LatLng('49.449270', '11.075920');
      var mapCanvas = document.getElementById('mapContact');//jq("#contactWrapper #mapContact");
      var mapOptions = {
          draggable: false,
          disableDefaultUI: true,
          center: new google.maps.LatLng('49.449270', '11.075920'),
          zoom: 14,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);
  },
  //code for setting map height
  setMapDimensions: function() {
      var height = jq("#contactWrapper").height() + "px";
      var width = (document.body.clientWidth * 0.55) + "px";
      if (document.body.clientWidth < 768) {
          width = document.body.clientWidth + "px";
          height = (jq("#contactWrapper").height() * 0.65) + "px";
      }
      var styles = {
          height: height,
          width: width
      };
      jq("#contactWrapper #mapContact").css(styles);
      googleMap.initialize();
  }
};