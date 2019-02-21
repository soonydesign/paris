
(function ($) {
 
//  pb_subtitle.js
    var h = $('#headBox');
    h.after('<div class="brand_bg"></div>');
    var stH3 =h.children('h3');
   

$('.brand_bg').load('./all/' +'subtitle.html');  


// 탭메뉴 작성중 
var winWidth=$(window).width();
var mobWidth=480;
var nowDevice='';

var myDevice= function(device){
  (device <= mobWidth) ? nowDevice = 'mobile' : nowDevice ='pc';
  return nowDevice;
};
var beforeDevice =myDevice(winWidth);

var tabMenu =$('.tab_menu');













})(jQuery);
