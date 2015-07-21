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
    JQ(elem + '.inner .item').last().prependTo('.slider .inner');
    JQ(elem + '.inner .item').addClass('pulse');
  },
  right: function(elem){
    JQ(elem + '.inner .item').first().appendTo('.slider .inner');
    JQ(elem + '.inner .item').addClass('pulse');
  },
  specific: function(elem, index){
    JQ()
  }
};
