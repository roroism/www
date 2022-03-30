$(document).ready(function() {
  var screenSize, screenHeight;
  var current;


  //local
  //var img_url = $(location).attr('pathname'); // www/media/sub1.html
  //server
  var img_url = $(location).attr('pathname'); // ''/media/sub1.html
  img_url = img_url.substr(img_url.indexOf('.html')-4,4);

  function screen_size(){
      screenSize = window.innerWidth; //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);


      if(screenSize > 768 && current==false) {
        $(".videoBox img").attr('src','./images/'+ img_url +'/'+ img_url +'_visual.jpg');
        current=true;
        // console.log('768이상');
      } else if(screenSize <= 768 && current==true) {
        $(".videoBox img").attr('src','./images/'+ img_url +'/'+ img_url +'_visual_768.jpg');
        current=false;
        // console.log('768이하');
      }
  }

  screenSize = window.innerWidth; //스크린의 너비
  screenHeight = $(window).height();  //스크린의 높이
  if(screenSize > 768){
    current=false;
  } else if(screenSize <= 768){
    current=true;
  }  

  screen_size();

  $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screen_size();
  });
  $('.down').click(function(){
    screenHeight = $(window).height();
    $('html,body').animate({'scrollTop':screenHeight-90}, 1000);
});

});