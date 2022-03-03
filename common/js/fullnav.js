
$(document).ready(function() {

  var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
  // var smh = visual_box.offsetHeight;
  // var smh = 930;
  var on_off=false;  //true(오버)  
  
  //headerArea hover 중인지 판단 페이지 초기화 후 처음 한번만 실행
  if($('#headerArea').is(':hover')) {
    $('#headerArea').css('background','#fff').addClass('on');
    $('.dropdownmenu li a').css('color','#333'); 
    $('.user_menu li a').css('color','#333');
    $('.top_menu .user_menu li:nth-child(2)::before').css('background','#333');
    on_off=true;
    // console.log('enter');
  }
  
  $('#headerArea').mouseenter(function(){
      // var scroll = $(window).scrollTop();
      $(this).css('background','#fff').addClass('on');
      $('.dropdownmenu li a').css('color','#333'); 
      $('.user_menu li a').css('color','#333');
      $('.top_menu .user_menu li:nth-child(2)::before').css('background','#333');
      // console.log('enter1');
      on_off=true;
  });

  $('#headerArea').mouseleave(function(){
      var scroll = $(window).scrollTop();  //스크롤의 거리

      if(scroll>=0 && scroll<smh-500){
          $(this).css('background','none').css('border-bottom','none').removeClass('on'); 
          $('.dropdownmenu li a').css('color','#fff');
          $('.user_menu li a').css('color','#fff');
      }else if(scroll>smh-500){
          $(this).css('background','#fff').addClass('on'); 
          $('.dropdownmenu li a').css('color','#333');
          $('.user_menu li a').css('color','#333');
          // console.log('enter2');
      }
      on_off=false;    
  });

  $(window).on('scroll',function(){//스크롤의 거리가 발생하면
      var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
      //console.log(scroll);

      if(scroll>smh-500){//스크롤430까지 내리면
          $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc').css('box-shadow','0 2px 10px rgba(0,0,0,0.1)').addClass('on');
          $('.dropdownmenu li a').css('color','#333');
          $('.user_menu li a').css('color','#333');
          // console.log('enter3');
      }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
          if(on_off==false){
              $('#headerArea').css('background','none').css('border-bottom','none').css('box-shadow','none').removeClass('on');
              $('.dropdownmenu li a').css('color','#fff');
              $('.user_menu li a').css('color','#fff');
          }
      }; 
      
    });
 
   
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
    function() { 
      $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
      $('#headerArea').animate({height:335},'fast').clearQueue();
      $('.gnb_underline_wrap').css('display','block');
      $('.gnb_underline').css('display','block');
    },function() {
      if($('.gnb_underline_wrap').is(':hover') || $('.gnb_underline_wrap .gnb_underline').is(':hover')) {
        return;
      } else {
        $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
        $('#headerArea').animate({height:100},'fast').clearQueue();
        $('.gnb_underline_wrap').css('display','none');
        $('.gnb_underline').css('display','none');
      }
    });
    

    let li_index;
    let dropdownmenuEl = $('#gnb .dropdownmenu li.menu');
    let li_left_position = [];
    let li_innerWidth = [];


    for(let i = 0; i<$('#gnb .dropdownmenu').children().length; i++) {
      li_left_position[i] = dropdownmenuEl.eq(i).position().left;
      li_innerWidth[i] = dropdownmenuEl.eq(i).innerWidth();
    }

    //1depth 효과
    $('ul.dropdownmenu li.menu').hover(
    function() { 
      $('.depth1',this).css('color','#3cb149');

      //gnb underline
      li_index = $(this).index('#gnb .dropdownmenu li.menu');
      // console.log('li_index',li_index);
      if(li_index == 0) {
        $('.gnb_underline').css({'left': li_left_position[0]+'px','width': li_innerWidth[0]+'px'});
      } else if(li_index == 1) {
        $('.gnb_underline').css({'left': li_left_position[1]+'px','width': li_innerWidth[1]+'px'});
      } else if(li_index == 2) {
        $('.gnb_underline').css({'left': li_left_position[2]+'px','width': li_innerWidth[2]+'px'});
      } else if(li_index == 3) {
        $('.gnb_underline').css({'left': li_left_position[3]+'px','width': li_innerWidth[3]+'px'});
      } else if(li_index == 4) {
        $('.gnb_underline').css({'left': li_left_position[4]+'px','width': li_innerWidth[4]+'px'});
      } else if(li_index == 5) {
        $('.gnb_underline').css({'left': li_left_position[5]+'px','width': li_innerWidth[5]+'px'});
      }
      //gnb underline end

    },function() {
      $('.depth1',this).css('color','#333');
      // console.log('enter4');
    });

    //2depth 효과 추가
    $('ul.dropdownmenu li.menu ul li a').hover(
      function() {
          $(this).css('color','#3cb149');
      },
      function() {
          $(this).css('color','#333');
          // console.log('enter5');
      }
    );

	//tab 처리
	$('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
		$('ul.dropdownmenu li.menu ul').slideDown('normal');
		$('#headerArea').animate({height:335},'fast').clearQueue();
	});

	$('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
		$('ul.dropdownmenu li.menu ul').slideUp('fast');
		$('#headerArea').animate({height:100},'normal').clearQueue();
	});
	//gnb end


  //Top Scroll 
	$('.topMove').hide();
				
	$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
		var scroll = $(window).scrollTop(); //스크롤의 거리
		
		//$('.text').text(scroll);

		if(scroll>500){ //500이상의 거리가 발생되면
				$('.topMove').fadeIn('slow');  //top버튼fadein
		}else{
				$('.topMove').fadeOut('fast');//top버튼fadeout
		}
	});

	$('.topMove').click(function(e){
		e.preventDefault();
		//상단으로 스르륵 이동합니다.
		$("html,body").stop().animate({"scrollTop":0},1000); 
	});
	//Top Scroll end

	//슬라이드로 이동하는 탭
  //슬라이드 메뉴 클릭시 해당 콘텐츠로 animation 이동
	$('.slideMenu a').click(function(e){
		e.preventDefault(); //href="#" 속성을 막아주는..메소드

		var value=0; //이동할 스크롤의 거리

		if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했는가?   if($(this).is('#link1')){
			value= $('#content .con1').offset().top-100;  // 해당 콘테츠의 상단의 거리
		}else if($(this).hasClass('link2')){
			value= $('#content .con2').offset().top-100; 
		}else if($(this).hasClass('link3')){
			value= $('#content .con3').offset().top-100; 
		}else if($(this).hasClass('link4')){
			value= $('#content .con4').offset().top-100; 
		}
	 	$("html,body").stop().animate({"scrollTop":value},1000);
 	});
	//슬라이드로 이동하는 탭 end


  //family site
	$('.familysite .arrow').toggle(function(e){
		e.preventDefault(); //href="#" 속성을 막아주는..메소드
		$(this).addClass('open');
		$('.familysite .aList').slideDown('fast');
	}, function(e){
		e.preventDefault(); //href="#" 속성을 막아주는..메소드
		$(this).removeClass('open');
		$('.familysite .aList').slideUp('fast');
	});

	//tab키 처리
	$('.familysite .arrow').on('focus', function () {        
    $('.familysite .aList').slideDown('fast');	
  });
  $('.familysite .aList li:last a').on('blur', function () {        
    $('.familysite .aList').slideUp('fast');
  });  


  // $('.familysite .arrow').click(function(){
	// 	$('.familysite .aList').slideUp();			 
	// });

  // $('.familysite .aList').mouseleave(function(){
	// 	// $(this).hide();			  
	// });

  //tab키 처리
  // $('.familysite .arrow').on('focus', function () {        
  //   $('.familysite .aList').fadeIn('slow');	
  // });
  // $('.familysite .aList li:last a').on('blur', function () {        
  //   $('.familysite .aList').fadeOut('fast');
  // });  
  //family site end


});
