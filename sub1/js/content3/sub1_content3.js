// JavaScript Document

$(document).ready(function(){

	//$('.subNav li:eq(0)').find('a').addClass('spy');
  //첫번째 서브메뉴 활성화
  
  //$('#content div:eq(0)').addClass('boxMove');
  //첫번째 내용글 애니메이션 처리
  //var smh= $('.main').height();
  const h1= $('.content_area h3:eq(0)').offset().top-176;
  const h2= $('.content_area h3:eq(1)').offset().top-176;
  const h3= $('.content_area h3:eq(2)').offset().top-176;
	// console.log('h1',h1);
	// console.log('h2',h2);
	// console.log('h3',h3);
	// console.log('.content_area .history2011', $('.content_area .history2011').offset().top);
	// console.log('.content_area .history2001', $('.content_area .history2001').offset().top);
	// console.log('.content_area .history1989', $('.content_area .history1989').offset().top);

	const pEl = document.querySelector('#content .content_area .history .inner > p');
	const pElMarginBottom = getComputedStyle(pEl).getPropertyValue('margin-bottom').replace('px','');
	// const tabTopOffset = pEl.getBoundingClientRect().bottom + Number(pElMarginBottom);
	const tabTopOffset = $('#content .content_area .history .inner > p').offset().top 
	+ $('#content .content_area .history .inner > p').outerHeight()
	+ Number(pElMarginBottom);
	
	// let top3 = $('#content .content_area .history .inner > p').offset().top;
	// console.log('tabTopOffset', tabTopOffset);
	// console.log('offset top', top3 );
	// console.log('outerHeight', $('#content .content_area .history .inner > p').outerHeight());
	// console.log('margin-bottom', getComputedStyle(pEl).getPropertyValue('margin-bottom'));


	//sticky menu 처리
	let refrechScroll = $(window).scrollTop();
	if(refrechScroll>tabTopOffset){ 
		//서브메뉴 고정
		$('#content .content_area .history .inner .tab_area ul').addClass('navOn');
		// $('header').hide();
	}else{
		// 서브메뉴 원래 상태로
		$('#content .content_area .history .inner .tab_area ul').removeClass('navOn');
		// $('header').show();
	}




  //스크롤의 좌표가 변하면.. 스크롤 이벤트
  $(window).on('scroll',function(){
      let scroll = $(window).scrollTop();
      //스크롤top의 좌표를 담는다
			// console.log('scroll', scroll);
      // $('.text').text(scroll);
      //스크롤 좌표의 값을 찍는다.
      
      // //sticky menu 처리
      // if(scroll>tabTopOffset){ 
			// 		//서브메뉴 고정
      //     $('#content .content_area .history .inner > ul').addClass('navOn');
      //     // $('header').hide();
      // }else{
			// 		// 서브메뉴 원래 상태로
      //     $('#content .content_area .history .inner > ul').removeClass('navOn');
      //     // $('header').show();
      // }
			if(scroll>tabTopOffset-100){ 
				//서브메뉴 고정
				$('#content .content_area .history .inner .tab_area ul').addClass('navOn');
				// $('header').hide();
			}else{
				// 서브메뉴 원래 상태로
				$('#content .content_area .history .inner .tab_area ul').removeClass('navOn');
				// $('header').show();
			}


      
			$('.history .tab_area ul li').find('a').removeClass('current');
      //모든 서브메뉴 비활성화
      
      
       //스크롤의 거리의 범위를 처리
      if(scroll>=0 && scroll<h2){

          $('.history .tab_area ul li:eq(0)').find('a').addClass('current');
          //첫번째 서브메뉴 활성화
          console.log('1');
          //$('#content div:eq(0)').addClass('boxMove');
          //첫번째 내용 콘텐츠 애니메이
      }else if(scroll>=h2 && scroll<h3){
				$('.history .tab_area ul li:eq(1)').find('a').addClass('current');
          //두번째 서브메뉴 활성화
          console.log('2');
          //$('#content div:eq(1)').addClass('boxMove');
      }else if(scroll>=h3){
				$('.history .tab_area ul li:eq(2)').find('a').addClass('current');
          //세번째 서브메뉴 활성화
          console.log('3');
          //$('#content div:eq(2)').addClass('boxMove');
      }
			// else if(scroll>=h3){
      //     $('.subNav li:eq(3)').find('a').addClass('spy');
      //     //네번째 서브메뉴 활성화
          
      //     //$('#content div:eq(3)').addClass('boxMove');
      // }
      
  });








	// tab
	var cnt=3;  //탭메뉴 개수 ***
	$('.history .bgf_history:eq(0)').show(); // 첫번째 탭 내용만 열어라
	//$('.history .tab1').css('background','green').css('color','#333'); //첫번째 탭메뉴 활성화
							//자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

	$('.history .inner > ul li a').click(function(e){
				e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

				var ind = $(this).index('.history .inner > ul li a');  // 클릭시 해당 index를 뽑아준다
				//console.log(ind);

				//$(".history .bgf_history").hide(); //모든 탭내용을 안보이게...
				//$(".history .bgf_history:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
				$('.history .inner > ul li a').removeClass('current');
				$(this).addClass('current');
				//$('.tab').css('background','red').css('color','#fff'); //모든 탭메뉴를 비활성화
				//$(this).css('background','green').css('color','#333'); // 클릭한 해당 탭메뉴만 활성화

	});
	// tab end

});

