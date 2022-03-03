// 네이게이션, top

// window.onload = function () {
$(document).ready(function(){

  //헤더 스크롤 이벤트
  var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   960px
  // console.log('visual높이 : ' + smh);
  var headerAreaOn = smh*0.7;
  var scroll = 0;

  $(window).on('scroll',function(){//스크롤의 거리가 발생하면
    scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
    //console.log(scroll);

    if(scroll>headerAreaOn){//스크롤 내리면
      $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc').css('box-shadow','0 2px 10px rgba(0,0,0,0.1)').addClass('on');
    }else{//스크롤 내리기 전 디폴트
      $('#headerArea').css('background','none').css('border-bottom','none').css('box-shadow','none').removeClass('on');
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
      $("#gnb").animate({right:0,opacity:1}, 'fast');
      $('#headerArea').css('background','#fff').addClass('mn_open on');
      op=true;
    }else{//아니라면 네비가 열려있는 상태에서 클릭
      $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
      if(scroll>headerAreaOn) {
        $('#headerArea').removeClass('mn_open');
      } else {
        $('#headerArea').css('background','none').removeClass('mn_open on');
      }
      op=false;
    }
  });


    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false,false,false]; // 메뉴가 닫혀있으면 false, 열려있으면 true 
    var arrcount=onoff.length;
    
    //console.log(arrcount);
    
    $('#gnb .depth1 h3 a').click(function(){ //1depth 메뉴를 각각 클릭하면
      var ind=$(this).parents('.depth1').index(); // 0~5
        
      //console.log(ind);
        
      if(onoff[ind]==false){
      //$('#gnb .depth1 ul').hide();
      $(this).parents('.depth1').find('ul').slideDown('fast');//클릭한 해당 메뉴의 2depth를 열여라
      $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');//자신을 제외한 나머지 서브메뉴를 다 닫는다
      for(var i=0; i<arrcount; i++) onoff[i]=false; // 모든 메뉴의 상태를 false로 바꾼다 
        onoff[ind]=true; // 자신만 true
           
        $('#gnb .mainMenu .depth1 h3 a').removeClass('on');
        $(this).addClass('on');

            
      }else{ // 클릭한 해당메뉴가 열려있느냐?
        $(this).parents('.depth1').find('ul').slideUp('fast'); 
        onoff[ind]=false;   
        

        $(this).removeClass('on');
       }
    });   


  //gnb end


  // family site
	$('.familysite .arrow').toggle(function(e){
		e.preventDefault(); //href="#" 속성을 막아주는..메소드
		$(this).addClass('open');
		$('.familysite .aList').slideDown('fast');
	}, function(e){
		e.preventDefault(); //href="#" 속성을 막아주는..메소드
		$(this).removeClass('open');
		$('.familysite .aList').slideUp('fast');
	});
  // family site end


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







// };
});
