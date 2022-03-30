$(document).ready(function() {
  var position=0;  //최초위치
  var movesize=330; //li 하나의 너비
  var total_li = 10; //총li 개수
  var viewarea_width = 1200;
  var last_movesize = 0;
  var ul_width = 0;
  var flag = 0;

  last_movesize = movesize - (viewarea_width%movesize);
  ul_width = movesize * total_li;
  //ul_width - position < 330;
  $('.news_prev_button').css('display','none');

  $('.news_button').click(function(e){
    e.preventDefault();

    if($(this).is('.news_prev_button')){
      
      if(position >= 0) {
        return false;
      }
      

      if(flag === 7) {
        position+=last_movesize;
        $('#news_list_area').stop().animate({left:position}, 'fast');
        $('.news_next_button').css('display','block');
      } else {
        position+=movesize;
        $('#news_list_area').stop().animate({left:position}, 'fast');
      }
      flag--;
      
      if(position == 0) {
        $(this).css('display','none');
      }

    }else if($(this).is('.news_next_button')){
      //console.log('news_next_button click');
      if(total_li <= 0 || position <= -ul_width) {
        return false;
      }
      
      if(flag !== 6) {
        position-=movesize;
        $('#news_list_area').stop().animate({left:position}, 'fast');
      } else {
        position-=last_movesize;
        $('#news_list_area').stop().animate({left:position}, 'normal');
        $('.news_next_button').css('display','none');
      }
      flag++;
      if(flag === 1) $('.news_prev_button').css('display','block');
      //console.log('animation run');
      }//else if

  });//click()

});

