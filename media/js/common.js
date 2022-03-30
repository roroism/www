$(document).ready(function(){

  //헤더 스크롤 이벤트
  // var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   960px
  var smh=$(window).height();
  // console.log('visual높이 : ' + smh);
  var headerAreaOn = smh*0.7;
  var scroll = 0;

  $(window).on('scroll',function(){//스크롤의 거리가 발생하면
    scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
    //console.log(scroll);

    if(scroll>headerAreaOn){//스크롤 내리면
      // $('#headerArea').css('background','rgba(0,0,0,.8)').css('border-bottom','1px solid #ccc').css('box-shadow','0 2px 10px rgba(0,0,0,0.1)').addClass('on');
      $('#headerArea').addClass('on');
    }else{//스크롤 내리기 전 디폴트
      // $('#headerArea').css('background','none').css('border-bottom','none').css('box-shadow','none').removeClass('on');
      $('#headerArea').removeClass('on');
    }; 
  });    
  //헤더 스크롤 이벤트 end



  //gnb
  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
  
  $(".menu_ham").click(function(e) { //메뉴버튼 클릭시
      e.preventDefault();
      var documentHeight =  $(document).height();//전체 nav의 높이를 body의 높이로 설정
      $("#gnb").css('height',documentHeight); 

    if(op==false){//네비가 닫혀 있는 상태에서 클릭
      $('#headerArea').addClass('mn_open');
      op=true;
    }else{//아니라면 네비가 열려있는 상태에서 클릭
      $('#headerArea').removeClass('mn_open');
      // if(scroll>headerAreaOn) {
      //   $('#headerArea').removeClass('mn_open');
      // } else {
      //   $('#headerArea').removeClass('mn_open');
      // }
      op=false;
    }
  });

  // $(window).resize(function(){ 
  //   var screenSize3 = $(window).width(); 
  //   if(screenSize3 <= 768) { //소형 태블릿 이하면
  //     $("#headerArea").removeClass('mn_open');
  //   }
  // }); 
  //gnb end


  //Top Scroll 
	$('.topMove').hide();
				
	$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
		var scroll = $(window).scrollTop(); //스크롤의 거리
		//$('.text').text(scroll);
		if(scroll>500){ //500이상의 거리가 발생되면
				$('.topMove').fadeIn('slow');  //top보여라~~~~
		}else{
				$('.topMove').fadeOut('fast');//top안보여라~~~~
		}
	});
	$('.topMove').click(function(e){
		e.preventDefault();
		//상단으로 스르륵 이동합니다.
		$("html,body").stop().animate({"scrollTop":0},1000); 
	});
	//Top Scroll end

});