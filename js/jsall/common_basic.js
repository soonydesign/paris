(function ($) {
  
  var wrap=$('#wrap');
  var allUrl='./all/';
  var head=$('head');
  
  var  headTit = head.is('title');
  // console.log('title' , headTit);
  var title = '파리바게뜨';

  if(!headTit){
  head.append('<title>'+title+'</title>');
  }else{
  head.find('title').text(title);
  };
   
// head.append('<title>파리바게뜨</title>');
wrap.prepend('<header id="headBox"></header>');
wrap.append('<footer id="footBox"></footer>');

 var headBox = $('#headBox');
 var footBox = $('#footBox');
 var link =function (file,url,fileName) {
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