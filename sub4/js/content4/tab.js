// JavaScript Document

$(document).ready(function(){
	var cnt=3;  //탭메뉴 개수 ***
	$('.tab_content:eq(0)').show(); // 첫번째 탭 내용만 열어라
	//$('.history .tab1').css('background','green').css('color','#333'); //첫번째 탭메뉴 활성화
							//자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

	$('.content_area .inner > ul li a').click(function(e){
				e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

				var ind = $(this).index('.content_area .inner > ul li a');  // 클릭시 해당 index를 뽑아준다
				//console.log(ind);

				$(".tab_content").hide(); //모든 탭내용을 안보이게...
				//$(".tab_content:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
				$(".tab_content:eq("+ind+")").css('opacity','0').fadeTo('slow', 1).clearQueue(); //클릭한 해당 탭내용만 보여라
				$('.content_area .inner > ul li a').removeClass('current');
				$(this).addClass('current');
				//$('.tab').css('background','red').css('color','#fff'); //모든 탭메뉴를 비활성화
				//$(this).css('background','green').css('color','#333'); // 클릭한 해당 탭메뉴만 활성화

		});
   

});

