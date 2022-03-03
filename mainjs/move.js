// JavaScript Document
// main_visual 페이지 기능
$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=4;   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    //$('.btn1').css('background','#3cb149'); //첫번째 불켜
    //$('.btn1').css('width','30'); // 버튼의 너비 증가
    $('.btn1').addClass('active');

    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
 
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    
     $('.gallery li').hide(); //모든 이미지를 보이지 않게.
     $('.gallery li div').removeClass('show'); //모든 이미지 슬로건 transform 동작 제거
     $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
     $('.gallery .link'+cnt+' div').addClass('show'); //이미지 슬로건 transform 동작 추가
	 		                    
    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
      
      //$('.mbutton').css('background','#fff'); //버튼불다꺼!!
      //$('.mbutton').css('width','16'); // 버튼 원래의 너비
      //$('.btn'+cnt).css('background','#3cb149');//자신만 불켜
      //$('.btn'+cnt).css('width','30');    
      $('.mbutton').removeClass('active');
      $('.btn'+cnt).addClass('active');

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 객체 삭제


   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').hide(); //모든 이미지 안보인다.
      $('.gallery li div').removeClass('show'); //모든 이미지 슬로건 transform 동작 제거

		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }else if($target.is('.btn4')){
				 cnt=4; 
		  }

		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
      $('.gallery .link'+cnt+' div').addClass('show'); //이미지 슬로건 transform 동작 추가
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // }
      //$('.mbutton').css('background','#fff'); //버튼 모두불꺼
      //$('.mbutton').css('width','16');
      //$('.btn'+cnt).css('background','#3cb149');//자신 버튼만 불켜 
      //$('.btn'+cnt).css('width','30');
      $('.mbutton').removeClass('active');
      $('.btn'+cnt).addClass('active');

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').css({'background':'url(./images/pause.png) 50% 50% no-repeat', 'background-size':'contain'});
      }      
    });


	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //stop버튼 클릭시 객체 삭제
		     $(this).css({'background':'url(./images/play_button_arrowhead.png) 50% 50% no-repeat','background-size':'contain'}); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
		   $(this).css({'background':'url(./images/pause.png) 50% 50% no-repeat', 'background-size':'contain'});
		   onoff=true; 
	   }
  });	

  //왼쪽/오른쪽 버튼 처리
  $('.visual .btn').click(function(){

    clearInterval(timeonoff); //객체 삭제

    if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
        if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
        //if(cnt==imageCount+1)cnt=1;  
        cnt++; //카운트 1씩증가
    }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
        if(cnt==1)cnt=imageCount+1;
        if(cnt==0)cnt=imageCount;
        cnt--; //카운트 감소
    }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery li div').removeClass('show'); //모든 이미지 슬로건 transform 동작 제거
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
    $('.gallery .link'+cnt+' div').addClass('show'); //이미지 슬로건 transform 동작 추가
    

    //$('.mbutton').css('background','#fff'); //버튼 모두불꺼
    //$('.mbutton').css('width','16');
    //$('.btn'+cnt).css('background','#3cb149');//자신 버튼만 불켜 
    //$('.btn'+cnt).css('width','30');



    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff= setInterval( moveg , 4000); //부활
    $('.mbutton').removeClass('active');
    $('.btn'+cnt).addClass('active');

    if(onoff==false){
      onoff=true;
      $('.ps').css({'background':'url(./images/pause.png) 50% 50% no-repeat', 'background-size':'contain'});
    }
  });


});




