// sub페이지 공통 js 

// window.onload = function () {
$(document).ready(function(){

  // sub_menu
	$('.sub_menu .sub_menu__arrow').toggle(function(e){
		e.preventDefault(); //href="#" 속성을 막아주는..메소드
		$(this).addClass('open');
		$('.sub_menu .sub_menu_list').stop().slideDown('200').clearQueue();
	}, function(e){
		e.preventDefault(); //href="#" 속성을 막아주는..메소드
		$(this).removeClass('open');
		$('.sub_menu .sub_menu_list').stop().slideUp('200').clearQueue();
	});
  // sub_menu end
	
// };
});