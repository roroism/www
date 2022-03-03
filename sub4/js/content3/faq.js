// JavaScript Document
$(document).ready(function () {
	var article = $('.faq .article');
	// article.find('.a').slideUp(100); 
	
	$('.faq .article .trigger').click(function(){  
	var myArticle = $(this).parents('.article'); 

	if(myArticle.hasClass('hide')){   
	    article.find('.a').slideUp(100);	// 모든 리스트의 답변을 닫는다.
                  article.removeClass('show').addClass('hide'); // 모든 리스트에 show를 제거하고 hide를 적용.
									article.find('span').css('background','no-repeat center/contain url("./images/faq_arrow_down.png")'); //선택한 q를 제외한 다른 q는 아래 화살표로 바꾸기
	    myArticle.removeClass('hide').addClass('show');
			$(this).children('span').css('background','no-repeat center/contain url("./images/faq_arrow_up.png")');
	    myArticle.find('.a').slideDown(100);  

	 } else {  
	   myArticle.removeClass('show').addClass('hide');  
		 $(this).children('span').css('background','no-repeat center/contain url("./images/faq_arrow_down.png")');
	   myArticle.find('.a').slideUp(100);  
	}  
  });      
  
  //모두여닫기
  $('.all').toggle(function(){ 
    article.find('.a').slideDown(100);
    article.removeClass('hide').addClass('show');
		$(this).children('span').text('모두 닫기');
		$(this).css('background','no-repeat 87% 53% /15% url("./images/faq_arrow_up.png")');
		article.find('.trigger').children('span').css('background','no-repeat center/contain url("./images/faq_arrow_up.png")');
		// $(this).html('<span>모두닫기</span>');
},function(){ 
    article.find('.a').slideUp(100);
    article.removeClass('show').addClass('hide');
		$(this).children('span').text('모두 열기');
		article.find('.trigger').children('span').css('background','no-repeat center/contain url("./images/faq_arrow_down.png")');
		$(this).css('background','no-repeat 87% 53% /15% url("./images/faq_arrow_down.png")');
		// $(this).html('<span>모두열기</span>');
});

}); 

