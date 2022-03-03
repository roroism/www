// JavaScript Document
$(document).ready(function() {
  var position=0;  //최초위치
  var movesize=180; //이미지 하나의 너비
  var total_image = 5; //총 이미지 개수
  //var timeonoff;
 
  $('.slide_gallery ul').after($('.slide_gallery ul').clone());

  /*
  timeonoff= setInterval(function () {
         position-=movesize;  // 150씩 감소
     $('.slide_gallery').stop().animate({left:position}, 'fast',
          function(){							
         if(position==-750){
            $('.slide_gallery').css('left',0);
            position=0;
         }
     });
 }, 2000);
 */
      //슬라이드 겔러리를 한번 복제

$('.description_area ul li').css('display','none');
$('.description_area ul li:eq(0)').css('display','block');


$('.button').click(function(e){
   e.preventDefault();

   //clearInterval(timeonoff);
   
   if($(this).is('.m2')){
        if(position==-900){
            $('.slide_gallery').css('left',0);
             position=0;
         }
       
        position-=movesize;  // 150씩 감소
            $('.slide_gallery').stop().animate({left:position}, 'fast',
              function(){							
                  if(position==-900){
                      $('.slide_gallery').css('left',0);
                      position=0;
                  }
              });
   }else if($(this).is('.m1')){   //다음버튼 클릭
         if(position==0){
              $('.slide_gallery').css('left',-900);
              position=-900;
          }

          position+=movesize; // 150씩 증가
          $('.slide_gallery').stop().animate({left:position}, 'fast',
              function(){							//콜백함수로 꼭 불러야 한다. 콜백함수는 애니메이션의 마지막 움직임까지 완전히 종료된 후에 동작하게 된다.
                  if(position==0){
                      $('.slide_gallery').css('left',-900);
                      position=-900;
                  }
          });
    }
  });//.button click event


  var li_index = 0;
  // var image= document.getElementById('image');

  $('.changeGallery_area li a').click(function(e){
    e.preventDefault();
    li_index = $(this).index('.changeGallery_area li a');
    li_index += 1;
    if(li_index > total_image) {
      li_index = li_index%total_image;
    }
    // console.log(li_index);
    $('#image').css({'background':'center / cover no-repeat url(./images/content4/major_activities_'+li_index+'.jpg)','opacity':'0'}).stop().fadeTo('slow',1).clearQueue();
    $('.description_area ul li').css('display','none');
    $('.description_area ul li:eq(' + (li_index-1) +')').stop().fadeIn('slow').clearQueue();
  });

});