
// --------------------------------

var deviceWidth  = $(window).width();
console.log(deviceWidth);
var myDevice;
var deviceCheck = function(w){
  if(w <= 768){
    myDevice = 'handhalse';

  }else if(w <= 1366){
    myDevice = 'laptop';
  }else{
    myDevice = 'pc';
  }
  console.log(myDevice);
  return myDevice;
};
var beforeW = deviceCheck(deviceWidth);

$(window).on('resize', function(){
  var nowWidth = $(this).width();
  var afterW = deviceCheck(nowWidth);

  if(beforeW !== afterW){
    location.reload();
  }
});

// -----------------------------------------


//  1366 header 메뉴
var win = $(window);
var headBox =$('#headBox');
// var headOffset = headBox.offset().top;
// var scrollOffset=0;
var nowScroll ;

var scrollFn= function(){
 nowScroll = win.scrollTop();
  if(nowScroll > 0){
    headBox.addClass('active');
  }else{
    headBox.removeClass('active');
  }
  
}; scrollFn();

win.on('scroll',function (e) {
  e.preventDefault();
 scrollFn();
});

(function ($) {





// 480 닫기버튼 
var close = $('.close_btn');
var timed = 700; 

if(deviceWidth <= 768){
  console.log('mobile?????????????');

  var firstNav=$('.gnb_mu').children('li');
  // #navBox:hover .gnb{display: block;}
  var navBox = $('#navBox');
  navBox.find('.t_menu').on('click',function(e){
    e.preventDefault();
    // console.log('ck');
   $('.gnb').animate({left:0});    
  });

  firstNav.on('click',function (e) {
    e.preventDefault();
    var sn= $(this);
    sn.find('ul').slideDown(timed);
    sn.siblings().find('ul').slideUp(timed);

    sn.find('li').on('click', function(e){
      e.preventDefault();
      var link = $(this).find('a').attr('href');
      if(link !== '#'){
        window.location = link;
      }
    });
  });

  var closeBtn= navBox.find('.close_btn');
  var secondLi=$('.second_mu').children('li');
  closeBtn.on('click',function (e) {
    // e.preventDefault();
    $('.gnb').animate({left:-280+'px'});
  });
}else{
  close.remove();
};


//  하위메뉴 보이기 


// var addView = function (e) {
//   e.preventDefault();
//   headCon.addClass('view');

// };

// var removeView=function (e) {
//   e.preventDefault();
//   headCon.removeClass('view');
// };

// gnb.on({'mouseenter': headCon ,'mouseleave': removeView});














// });



})(jQuery);