$(document).ready(function(){

  var fragment = $('#content .content_area .subsidiary_tab li a.current').attr('href');   
  // console.log(fragment);
  fragment = fragment.replace('#', ' #');
  // console.log(fragment);                 
  $('#company_descripttion_area').load(fragment).css('opacity','0').fadeTo('slow',1).clearQueue(); 
  $('.btn1').css('background','no-repeat center/contain url(./images/content1/logis_green_circle.png)'); //첫번째 불켜
  $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
  $.getScript("./js/sub3_1.js");


  // console.log('firstpageload');
  $('#content .content_area .subsidiary_tab li a').on('click', function(e) { 
    e.preventDefault();      
    clearInterval(timeonoff); //타이머 중지                                  
    fragment = this.href;     //this.href는 javascript문법    jquery문법으로는 $(this).attr('href');                          
    // console.log('click event');
    fragment = fragment.replace('#', ' #');  
    $('#company_descripttion_area').load(fragment).css('opacity','0').fadeTo('slow',1).clearQueue();                          
    // $.getScript("./js/sub3_1.js");
    $('.btn1').css('background','no-repeat center/contain url(./images/content1/logis_green_circle.png)'); //첫번째 불켜
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('#content .content_area .subsidiary_tab li a.current').removeClass('current');       
    $(this).addClass('current');
  });

});