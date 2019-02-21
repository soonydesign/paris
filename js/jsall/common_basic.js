(function ($) {
  
  var wrap=$('#wrap');
  var allUrl='./all/';
  var head=$('head');
   

head.append('<title>파리바게뜨</title>');
wrap.prepend('<header id="headBox"></header>');
wrap.append('<footer id="footBox"></footer>');


var headBox = $('#headBox');
var footBox = $('#footBox');
var link =function (file,url,fileName) {

  // 

  var f = file  || 'header' ;
  var u = url  || allUrl;
  var fn = fileName || '.html';

  var result = u +f+ fn;
  // console.log(result);
  return result;


};

headBox.load(allUrl+'header.html');
footBox.load(link('footer'));



  
})(jQuery);