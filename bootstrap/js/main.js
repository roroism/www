var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var responseObject;

xhr.onload = function() {                       // When readystate changes
  responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
  // $('.video_wrap iframe').attr('src',responseObject.trailers[0].video_path);
  // $('.trailers_wrap > div dl dt').text(responseObject.trailers[0].title);
  // $('.trailers_wrap > div dl dd').text(responseObject.trailers[0].des);
};

xhr.open('GET', './data/best_product_data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다



$(document).ready(function(){

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      // hide:true,
      },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
  });

  // tab
  $('.nav-tabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  //Top Scroll 
	$('.topMove').hide();
				
	$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
		var scroll = $(window).scrollTop(); //스크롤의 거리
		
		//$('.text').text(scroll);

		if(scroll>500){ //500이상의 거리가 발생되면
				$('.topMove').fadeIn('slow');  
		}else{
				$('.topMove').fadeOut('fast');
		}
	});

	$('.topMove').click(function(e){
		e.preventDefault();
		//상단으로 스르륵 이동합니다.
		$("html,body").stop().animate({"scrollTop":0},1000); 
	});
	//Top Scroll end



  var link = $('#navbar a');
  link.on('click',function(e){
      
      //href 속성을 통해, section id 타겟을 잡음
      var target = $($(this).attr('href')); 
      
      //target section의 좌표를 통해 꼭대기로 이동
      $('html, body').animate({
          scrollTop: target.offset().top-50
      },600);
      target.focus();
      
      //active 클래스 부여
      // $(this).addClass('active');

      //앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
      e.preventDefault();
  });

  // modal event
  $('.modal').on('show.bs.modal', function (e) {
    // e.preventDefault();
    $('.navbar').css('padding-right','17px');
    $('.blank_box .bg_img_box').css('background-position','left calc(5% - 1px) top 2%');
    $('.topMove').css('margin-right','17px');
  });
  $('.modal').on('hidden.bs.modal', function (e) {
    // e.preventDefault();
    $('.navbar').css('padding-right','0');
    $('.blank_box .bg_img_box').css('background-position','left 5% top 2%');
    $('.topMove').css('margin-right','0');
  });
  //modal event end

  let bestProductInd;
  let selectedObject;
  //bestseller click event
  $('.swiper-wrapper .swiper-slide a').on('click', function(e){
    e.preventDefault();
    let newContents = '';
    // bestProductInd = $(this).parent('li').attr('data-swiper-slide-index');//swiper loop시
    bestProductInd = $(this).parent('li').index();
    // console.log('bestProductInd',bestProductInd);
    selectedObject = responseObject.bestseller[bestProductInd];
    // console.log('ind',ind);
    
    newContents += '<div class="left_box__inner"><div class="img_wrap">';
    newContents += '<img src="./images/' + selectedObject.color[0].img_path + '" alt="' + selectedObject.title + '"></div><ul class="color_picker">';
    newContents += '<li class="on"><a href="#"></a></li>';
    for(let i = 1; i < selectedObject.color.length; i++) {
      newContents += '<li><a href="#"></a></li>';
    }
    newContents += '</ul></div>';
    $('.modal .left_box').html(newContents);
    newContents = '';

    for(let i = 0; i < selectedObject.color.length; i++) {
      $('.modal .color_picker li:eq(' + i + ') a').css('background-color', selectedObject.color[i].color_value);
    }

    $('.modal .right_box dt').text(selectedObject.title);
    $('.modal .right_box dd:eq(0)').text(selectedObject.des);
    $('.modal .right_box dd:eq(1)').text(selectedObject.price);
    $('.modal .right_box dd:eq(2)').text(selectedObject.des2);

  });
  //bestseller click event end

  //color picker event
  $(document).on('click', '.modal .left_box .color_picker li a', function(e){
    e.preventDefault();
    let ind = $(this).parent('li').index();
    // console.log('ind',ind);
    $('.modal .color_picker li').removeClass();
    $(this).parent('li').addClass('on');
    $('.modal .left_box img').attr('src','./images/' + selectedObject.color[ind].img_path);
  });
  //color picker event end

  //modal closeBtn event
  $('.close_btn').on('click', function(e){
    e.preventDefault();
    $('.modal').modal('hide');
  });
  //modal closeBtn event end
});