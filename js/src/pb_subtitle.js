//  pb_subtitle.js

(function ($) {
  // body...
    var h = $('#headBox');
    h.after('<div class="brand_bg"></div>');
    var stH3 =h.children('h3');
   

$('.brand_bg').load('./all/' +'subtitle.html');    
})(jQuery);
// $('aside').load('./all/pb_csv.html')