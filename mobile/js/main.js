// index.html

$(document).ready(function(){
	//var cnt=3;  //탭메뉴 개수 ***
  var btn_more = $('.btn_more'); // 더보기 버튼
	$('.subsidiary .subsidiary_description:eq(0)').show(); // 첫번째 탭 내용만 열어라
	//$('.history .tab1').css('background','green').css('color','#333'); //첫번째 탭메뉴 활성화
							//자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
  btn_more.attr('href','./sub3/sub3_2.html');

	$('.subsidiary .subsidiary__inner ul li a').click(function(e){
    e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

    var ind = $(this).index('.subsidiary .subsidiary__inner ul li a');  // 클릭시 해당 index를 뽑아준다
    // console.log(ind);

    $(".subsidiary .subsidiary_description").hide(); //모든 탭내용을 안보이게...
    $(".subsidiary .subsidiary_description:eq("+ind+")").stop().fadeTo('slow',1).clearQueue(); //클릭한 해당 탭내용만 보여라
    $('.subsidiary .subsidiary__inner > ul li a').removeClass('current');
    $(this).addClass('current');
    //$('.tab').css('background','red').css('color','#fff'); //모든 탭메뉴를 비활성화
    //$(this).css('background','green').css('color','#333'); // 클릭한 해당 탭메뉴만 활성화
    switch(ind) {
      case 0 : btn_more.attr('href','./sub3/sub3_2.html');
        break;
      case 1 : btn_more.attr('href','./sub3/sub3_1.html');
        break;
      case 2 : btn_more.attr('href','./sub3/sub3_3.html');
        break;
    }

	});






  //esg
	var position=0;  //최초위치
  var movesize=524; //이미지 하나의 너비
  var total_image = 3; //총 이미지 개수
  var dot_cnt = 0;
	// var device_width = $( window ).width();
	// var device_width = screen.width; 
	// var device_width = screen.availWidth;

  //var timeonoff;
  $('.slide_gallery').css('width',(total_image*100*2)+'%');
  // $('.slide_gallery ul').css('width');
  $('.slide_gallery ul').after($('.slide_gallery ul').clone());

      //슬라이드 겔러리를 한번 복제

  // $('.description_area ul li').css('display','none');
  // $('.description_area ul li:eq(0)').css('display','block');


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


  // var li_index = 0;
  // var image= document.getElementById('image');

  // $('.changeGallery_area li a').click(function(e){
  //   e.preventDefault();
  //   li_index = $(this).index('.changeGallery_area li a');
  //   li_index += 1;
  //   if(li_index > total_image) {
  //     li_index = li_index%total_image;
  //   }
  //   $('#image').css({'background':'center / cover no-repeat url(./images/content4/major_activities_'+li_index+'.jpg)','opacity':'0'}).fadeTo('slow',1).clearQueue();
  //   $('.description_area ul li').css('display','none');
  //   $('.description_area ul li:eq(' + (li_index-1) +')').fadeIn('slow');
  // });



  //touch slide
  var startX, endX;

  // $('.slide_gallery_wrap').on('click',function(e){
  //   location.href = './sub2/sub2_3.html';
  // });


  // $('.slide_gallery_wrap').on('touchmove ',function(e){     
    
  // });

  $('.slide_gallery_wrap').on('touchstart mousedown',function(e){     
  // $('.slide_gallery_wrap .cover').on('touchstart mousedown',function(e){     
    startX=e.pageX || e.originalEvent.touches[0].pageX;
  });


  $('.slide_gallery_wrap').on('touchend mouseup',function(e){    
  // $('.slide_gallery_wrap .cover').on('touchend mouseup',function(e){    

         
    endX=e.pageX || e.originalEvent.changedTouches[0].pageX;

    if(startX<endX) {//왼쪽에서 오른쪽으로 터치
      if(position == 0){
        position -= total_image*100;
        $('.slide_gallery').css('left',position+'%');

        //dot 연산
        dot_cnt = Math.abs(position/100)-total_image;
        // console.log(dot_cnt);
        $('.dot_wrap .dot').removeClass('current');
        $('.dot_wrap .dot:eq('+ dot_cnt +')').addClass('current');
      }
      
      position += 100;

      //dot 연산
      dot_cnt = Math.abs(position/100)-total_image;
      // console.log(dot_cnt);
      $('.dot_wrap .dot').removeClass('current');
      $('.dot_wrap .dot:eq('+ dot_cnt +')').addClass('current');
      
      $('.slide_gallery').stop().animate({left:position+'%'}, 'fast',
      function(){							
        // if(position== -total_image*100*2-100){
        //     $('.slide_gallery').css('left',0);
        //     position=0;
        // }

        if(position == 0) {
          position -= total_image*100;
          $('.slide_gallery').css('left', position+'%');
        }
      });

    }else if(startX>endX){//오른쪽에서 왼쪽으로 터치
      if(position== -total_image*100*2){
        position += total_image*100;
        $('.slide_gallery').css('left',position+'%');

        //dot 연산
        dot_cnt = Math.abs(position/100)-total_image;
        // console.log(dot_cnt);
        $('.dot_wrap .dot').removeClass('current');
        $('.dot_wrap .dot:eq('+ dot_cnt +')').addClass('current');
      }

      position -= 100;

      //dot 연산
      dot_cnt = Math.abs(position/100)-total_image;
      // console.log(dot_cnt);
      $('.dot_wrap .dot').removeClass('current');
      $('.dot_wrap .dot:eq('+ dot_cnt +')').addClass('current');

      $('.slide_gallery').stop().animate({left:position+'%'}, 'fast',
      function(){							
        // if(position== -total_image*100*2-100){
        //     $('.slide_gallery').css('left',0);
        //     position=0;
        // }

        if(position == -total_image*100*2+100) {
          position += total_image*100;
          $('.slide_gallery').css('left', position+'%');
        }
      });
      // $('.slide_gallery').css('left', position+'%');
    }
    // else if(startX=endX) {
    //   location.href = './sub2/sub2_3.html';
    // }




  });
  //touch slide end

  //esg end


   
});