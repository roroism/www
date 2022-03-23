$(document).ready(function(){
	var el       = document.querySelector('.main-text')
	var options  = {
		text:
		`<!DOCTYPE html>\n<html lang="kr">\n<head>\n<title> Lee BoRyong </title>\n<head>\n.\n.\n.\n안녕하세요.\nFront-end web developer & Web publisher를 희망하는 \n이보룡이라고 합니다.`,
	textSpeed: 95,
	blinkSpeed: 0.06
	}

	var instance = new tinytyper(el, options);



  //변수 ht에 브라우저의 높이값을 저장
	var ht = $(window).height();	
	//브라우저의 높이값을 section의 높이값으로 지정
	$("section").outerHeight(ht);
	//$("section").css('height', ht);

	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").outerHeight(ht);
		// $("section").stop().animate({"scrollTop":next},700,"easeOutQuad");    
	});	

  // 흩날리는 이벤트
  //각각의 section에서 마우스를 움직이면
	// $("section").on("mousemove",function(e){		
	
	// 	//변수 posX에 마우스 커서의 x축 위치 저장
	// 	var posX= e.pageX;
	// 	//변수 posY에 마우스 커서의 y축 위치 저장
	// 	var posY= e.pageY;
		
	// 	//첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
	// 	$(".p11").css({"right":20-(posX/30) , "bottom":20-(posY/30) });
	// 	$(".p12").css({"right":130+(posX/20) , "bottom":-40+(posY/20) });
	// 	$(".p13").css({"right":60+(posX/20) , "top":180+(posY/20) });		
	
	// 	//두 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
	// 	$(".p21").css({"right":-180-(posX/30) , "bottom":-480-(posY/30) });
	// 	$(".p22").css({"right":130+(posX/50) , "bottom":-40+(posY/50) });
		
	// 	//세 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
	// 	$(".p31").css({"right":280-(posX/30) , "bottom":30-(posY/30) });
	// 	$(".p32").css({"right":110+(posX/20) , "bottom":-270+(posY/20) });
	// 	$(".p33").css({"right":-70+(posX/20) , "bottom":-130+(posY/20) });	
		
	// 	//네 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
	// 	$(".p41").css({"right":20-(posX/30) , "bottom":-120-(posY/30) });
	// 	$(".p42").css({"right":0+(posX/20) , "bottom":-180+(posY/20) });	
	// });
  // end of 흩날리는 이벤트


  //
  //메뉴 버튼 클릭시
	$("#menu li").on("click",function(e){
		e.preventDefault();
		
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();
		
		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index();
		
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;			
	
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},700);
	});



  // 활성화된 화면에 on 클래스 추가하기(css변경위해)
  $(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		
		
		if(scroll>=ht*0 && scroll< ht*1){
			$("#menu li").removeClass();
			$("#menu li").eq(0).addClass("on");
		}
		if(scroll>=ht*1 && scroll< ht*2){
			$("#menu li").removeClass();
			$("#menu li").eq(1).addClass("on");
		}
		if(scroll>=ht*2 && scroll< ht*3){
			$("#menu li").removeClass();
			$("#menu li").eq(2).addClass("on");
		}
		if(scroll>=ht*3 && scroll< ht*4){
			$("#menu li").removeClass();
			$("#menu li").eq(3).addClass("on");
		}
		if(scroll>=ht*4 && scroll< ht*5){
			$("#menu li").removeClass();
			$("#menu li").eq(4).addClass("on");
		}
		if(scroll>=ht*5 && scroll< ht*6){
			$("#menu li").removeClass();
			$("#menu li").eq(5).addClass("on");
		}
		if(scroll>=ht*6 && scroll< ht*7){
			$("#menu li").removeClass();
			$("#menu li").eq(6).addClass("on");
		}
		if(scroll>=ht*7 && scroll< ht*8){
			$("#menu li").removeClass();
			$("#menu li").eq(7).addClass("on");
		}
		
		// 위의 if문을 for문으로 구현
		// for(var i=0; i<4;i++){
		// 	if(scroll>=ht*i && scroll< ht*(i+1)){
		// 		$("#menu li").removeClass();
		// 		$("#menu li").eq(i).addClass("on");
		// 	};
		// }
	});
  // end of 활성화된 화면에 on 클래스 추가하기(css변경위해)



  //'mousesheel이벤트는' jquery.mousewheel.min.js 이것을 추가해야 동작한다.
  //section위에서 마우스 휠을 움직이면
  $("section").on("mousewheel",function(event,delta){    
    
    // 마우스휠을 올리면 1을 반환해주고, 내리면 -1을 반환해준다.
    console.log('delta',delta);


		//마우스 휠을 올렸을때	
          if (delta > 0) {  
			//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
             var prev = $(this).prev().offset().top;
			 //문서 전체를 prev에 저장된 위치로 이동
			//  $("html,body").stop().animate({"scrollTop":prev},1400,"easeOutBounce");
			 $("html,body").stop().animate({"scrollTop":prev},700,"easeOutQuad");
			 return false; // 여러가지 이펙트 때문에 생기는 부자연스러움을 자연스럽게 움직이게 해준다.
       
		//마우스 휠을 내렸을때	 
          }else if (delta < 0) {  
			//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
			 var next = $(this).next().offset().top;
			 //문서 전체를 next에 저장된 위치로 이동
			//  $("html,body").stop().animate({"scrollTop":next},1400,"easeOutBounce");                                         
			 $("html,body").stop().animate({"scrollTop":next},700,"easeOutQuad");      
            return false; // 여러가지 이펙트 때문에 생기는 부자연스러움을 자연스럽게 움직이게 해준다.
          }
  });

});
