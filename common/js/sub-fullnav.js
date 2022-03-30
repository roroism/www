
$(document).ready(function() {
	var on_off=false;  //true(오버)  

	//hover 중인지 판단 페이지 초기화 후 처음 한번만 실행
  if($('#headerArea ul.dropdownmenu').is(':hover')) {
		$('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
		$('#headerArea').animate({height:335},'fast').clearQueue();
		$('.gnb_underline_wrap').css('display','block');
		$('.gnb_underline').css('display','block');
		// console.log('enter1');
	}

  //gnb
	$('#headerArea').mouseenter(function(){
		$(this).addClass('on');
		on_off=true;
 	});

	$('#headerArea').mouseleave(function(){
		$(this).removeClass('on'); 
		on_off=false;    
	});

	//2depth 열기/닫기
	$('ul.dropdownmenu').hover(
		function() { 
			$('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
			$('#headerArea').animate({height:335},'fast').clearQueue();
			$('.gnb_underline_wrap').css('display','block');
      // $('.gnb_underline').css('display','block');
		},function() {
			// if($('.gnb_underline_wrap').is(':hover') || $('.gnb_underline_wrap .gnb_underline').is(':hover')) {
			if($('.gnb_underline_wrap').is(':hover')) {
				return;
			} else {
				$('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
				$('#headerArea').animate({height:100},'fast').clearQueue();
				$('.gnb_underline_wrap').css('display','none');
        // $('.gnb_underline').css('display','none');
			}
	});
    

	let li_index;
	let dropdownmenuEl = $('#gnb .dropdownmenu li.menu');
	let li_left_position = [];
	let li_innerWidth = [];

  // 각각의 1depth 시작위치와 너비를 배열에 저장-gnb_underline
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
				// $('.gnb_underline').css({'left': li_left_position[0]+'px','width': li_innerWidth[0]+'px'});
        $('.gnb_2depth_bg').css({'left': li_left_position[0]+'px','width': li_innerWidth[0]+'px'});
			} else if(li_index == 1) {
				// $('.gnb_underline').css({'left': li_left_position[1]+'px','width': li_innerWidth[1]+'px'});
        $('.gnb_2depth_bg').css({'left': li_left_position[1]+'px','width': li_innerWidth[1]+'px'});
			} else if(li_index == 2) {
				// $('.gnb_underline').css({'left': li_left_position[2]+'px','width': li_innerWidth[2]+'px'});
        $('.gnb_2depth_bg').css({'left': li_left_position[2]+'px','width': li_innerWidth[2]+'px'});
			} else if(li_index == 3) {
				// $('.gnb_underline').css({'left': li_left_position[3]+'px','width': li_innerWidth[3]+'px'});
        $('.gnb_2depth_bg').css({'left': li_left_position[3]+'px','width': li_innerWidth[3]+'px'});
			} else if(li_index == 4) {
				// $('.gnb_underline').css({'left': li_left_position[4]+'px','width': li_innerWidth[4]+'px'});
        $('.gnb_2depth_bg').css({'left': li_left_position[4]+'px','width': li_innerWidth[4]+'px'});
			} else if(li_index == 5) {
				// $('.gnb_underline').css({'left': li_left_position[5]+'px','width': li_innerWidth[5]+'px'});
        $('.gnb_2depth_bg').css({'left': li_left_position[5]+'px','width': li_innerWidth[5]+'px'});
			}
			//gnb underline end
		},function() {
				$('.depth1',this).css('color','#333');
	});
    
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
	// $('.circular').hide();
				
	$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
		var scroll = $(window).scrollTop(); //스크롤의 거리
		
		//$('.text').text(scroll);

		if(scroll>500){ //500이상의 거리가 발생되면
				$('.circular').fadeIn('slow');  //top보여라~~~~
		}else{
				$('.circular').fadeOut('fast');//top안보여라~~~~
		}
	});

	$('.circular').click(function(e){
		e.preventDefault();
		//상단으로 스르륵 이동합니다.
		$("html,body").stop().animate({"scrollTop":0},1000); 
	});


	let top_body_height = $('body').innerHeight();
  $(window).on('scroll', function() {
		// console.log('위치',Math.floor(($(window).scrollTop() / ($(document).height() - $(window).height())) * 100));
    // let scrollPosition = Math.ceil($(window).scrollTop() / $('body').height() * 100);
    // let scrollPosition = $(window).scrollTop() / top_body_height;

		let scrollPosition = Math.floor(($(window).scrollTop() / ($(document).height() - $(window).height())) * 100);

    // console.log('scrollTop',$(window).scrollTop());
    // console.log('body',$('body').height());
    // console.log('window',$(window).height());
    // console.log('scrollPosition',scrollPosition);

    topProgressBar(scrollPosition);

  });
  function topProgressBar(scrollPosition) {
    if(scrollPosition <= 50) {
      // $('.circle .left .progress').css('transform','rotate('+ 180 * scrollPosition * 2 +'deg)');
      $('.circle .left .progress').css('transform','rotate('+ 180 * (scrollPosition / 100 * 2) +'deg)');
			// console.log('position<=50', scrollPosition / 100 * 2);
      $('.circle .right .progress').css('transform','rotate(0deg)');
      
    } else {
      $('.circle .left .progress').css('transform','rotate(180deg)');
      // $('.circle .right .progress').css('transform','rotate('+ 180 * (scrollPosition-0.5) * 2 +'deg)');
      $('.circle .right .progress').css('transform','rotate('+ 180 * ((scrollPosition - 50) / 100 * 2) +'deg)');
    }
  }
	//Top Scroll end

   
	//슬라이드 이동 탭
   //슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
   $('.slideMenu a').click(function(e){
   e.preventDefault(); //href="#" 속성을 막아주는..메소드

   var value=0; //이동할 스크롤의 거리

   if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
      value= $('#content .con1').offset().top-100;  // 해당 콘테츠의 상단의 거리~~
   }else if($(this).hasClass('link2')){
      value= $('#content .con2').offset().top-100; 
   }else if($(this).hasClass('link3')){
      value= $('#content .con3').offset().top-100; 
   }else if($(this).hasClass('link4')){
      value= $('#content .con4').offset().top-100; 
   }else if($(this).hasClass('link5')){
      value= $('#content .con5').offset().top-100; 
   }
    $("html,body").stop().animate({"scrollTop":value},1000);
   });
   //슬라이드 이동 탭 end


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
   //family site end


});
