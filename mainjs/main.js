window.onload = function(){
  
  var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
  var cnt=0;
  var total=0; //객체배열의 총개수
  var timeoff;

  function ok(){
    var newContent = '';
    var newImg = '';
    
    newContent += '<ul><li>';
    newContent += '<h4>' +  responseObject.introduction[cnt].heading_El + '</h4>';
    newContent += '<p>'+ responseObject.introduction[cnt].d_title +'</p>';
    newContent += '<p>'+ responseObject.introduction[cnt].d_data +'</p>';
    newContent += '<a href="'+ responseObject.introduction[cnt].anchor_addr +'">' + responseObject.introduction[cnt].anchor + '<i class="fas fa-chevron-right"></i></a>';
    newContent += '</li></ul>';

    newImg += '<img src="' + responseObject.introduction[cnt].map + '" alt="' + responseObject.introduction[cnt].heading_El + '" />';

    // document.getElementById('introduction_img_area').innerHTML = newImg;
    // document.getElementById('introduction_description_area').innerHTML = newContent;
    $('#introduction_img_area').html(newImg).css({opacity:0}).fadeTo('slow',1).clearQueue();
    $('#introduction_description_area').html(newContent).css({opacity:0}).fadeTo('slow',1).clearQueue();
    // console.log('ok() : ' + i);
  }

  function ok_auto() {
    cnt++;
    if(cnt>=total) {
      cnt=0;
    } else if(cnt<0) {
      cnt=total-1;
    }
    ok();
  }

  xhr.onload = function() {                       // When readystate changes
  
    if(xhr.status === 200) {                      // If server status was ok
      responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
                                                    // parse() 메소드를 호출하여 자바스크립트 객체배열로 변환한다.
      total=responseObject.introduction.length;
      ok();
      
      // console.log('onload end');
    }
  };

  document.getElementById('introduction_nextBtn').onclick=function(){
    clearInterval(timeoff);
    cnt++;
    if(cnt==total)cnt=0;
    // console.log('onclick_next'+cnt);
    document.getElementById('introduction_pauseBtn').classList.add('playbtn');
    ok(cnt);
  }

  document.getElementById('introduction_backBtn').onclick=function(){
    clearInterval(timeoff);
    cnt--;
    if(cnt<0)cnt=total-1;
    // console.log('onclick_back'+cnt);
    document.getElementById('introduction_pauseBtn').classList.add('playbtn');
    ok(cnt);
  }
  document.getElementById('introduction_pauseBtn').onclick=function(){

    if(this.classList.contains('playbtn')) {
      this.classList.remove('playbtn');
      timeoff=setInterval(ok_auto, 5000);
    } else {
      clearInterval(timeoff);
      this.classList.add('playbtn');
    }
    // console.log('onclick_back'+cnt);
  }

  xhr.open('GET', './data/introduction_data.json', true);        // 요청을 준비한다.
  xhr.send(null);                                 // 요청을 전송한다
  timeoff=setInterval(ok_auto, 5000);

// end of introduction ajax 처리
//------------------------------------------------------------------------
// news

  var position=0;  //최초위치
  var movesize=344; //li 하나의 너비 width+양쪽padding+양쪽margin
  var total_li = 10; //총li 개수
  var viewarea_width = 1200;
  var last_movesize = 0;
  var ul_width = 0;
  var flag = 0;

  last_movesize = movesize - (viewarea_width%movesize);
  ul_width = movesize * total_li;
  //ul_width - position < 330;
  $('.news_prev_button').css('display','none');

  $('.news_button').click(function(e){
    e.preventDefault();

    if($(this).is('.news_prev_button')){
      
      if(position >= 0) {
        return false;
      }
      

      if(flag === 7) {
        position+=last_movesize;
        $('#news_list_area').stop().animate({left:position}, 'fast');
        $('.news_next_button').css('display','block');
      } else {
        position+=movesize;
        $('#news_list_area').stop().animate({left:position}, 'fast');
      }
      flag--;
      
      if(position == 0) {
        $(this).css('display','none');
      }

    }else if($(this).is('.news_next_button')){
      //console.log('news_next_button click');
      if(total_li <= 0 || position <= -ul_width) {
        return false;
      }
      
      if(flag !== 6) {
        position-=movesize;
        $('#news_list_area').stop().animate({left:position}, 'fast');
      } else {
        position-=last_movesize;
        $('#news_list_area').stop().animate({left:position}, 'normal');
        $('.news_next_button').css('display','none');
      }
      flag++;
      if(flag === 1) $('.news_prev_button').css('display','block');
      //console.log('animation run');
      }//else if

  });//click()

// end of news
//-------------------------------------------------------------------------------
// 스크롤 이벤트를 위한 변수할당

  // $('.subNav li:eq(0)').find('a').addClass('spy');
  //첫번째 서브메뉴 활성화

  $('.visual .gallery .link1 div').addClass('show');
  //첫번째 내용글 애니메이션 처리
  var smh= $('.visual').height();  //메인 비주얼의 높이
  // console.log('smh : '+smh);
  var h1= $('#content div:eq(0)').offset().top-500 ; // esg
  var h2= $('.subsidiary').offset().top-500 ; // subsidiary
  var h2_1 = $('.subsidiary1').offset().top-500 ; // subsidiary1
  var h2_2 = $('.subsidiary2').offset().top-500 ; // subsidiary2
  var h2_3 = $('.subsidiary3').offset().top-500 ; // subsidiary3
  var h3= $('.news').offset().top-500 ; // news
  var h4= $('.introduction').offset().top-500 ; // introduction
  var h5= $('.recruit').offset().top-500 ; // recruit
  // console.log('h1 : '+ h1 + ' h2 : ' + h2 + ' h3 : ' + h3);
  var h1_out = h1-100;
  // console.log('h2 : '+h2+' h2_1 : '+h2_1+' h2_2 : ' + h2_2 +' h2_3 : ' + h2_3 + ' h3 : ' + h3);

// end of 스크롤 이벤트를 위한 변수할당
//------------------------------------------------------------------------
//스크롤의 좌표가 변하면.. 스크롤 이벤트

  $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();
      //스크롤top의 좌표를 담는다
    
      // $('.scroll_text').text(scroll);
      //스크롤 좌표의 값을 찍는다.
      
      //sticky menu 처리
      /*if(scroll>smh){ 
          $('.navBox').addClass('navOn');
          //스크롤의 거리가 350px 이상이면 서브메뉴 고정
          $('header').hide();
      }else{
          $('.navBox').removeClass('navOn');
          //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
          $('header').show();
      }*/

      // $('.subNav li').find('a').removeClass('spy');
      //모든 서브메뉴 비활성화~ 불꺼!!!
      
      

      //subNav :  스크롤의 거리의 범위를 처리
      /*if(scroll>=smh && scroll<h1){
          //첫번째 서브메뉴 활성화
          // $('.subNav li:eq(0)').find('a').addClass('spy');
          
          
          $('#content div:eq(0)').addClass('show');
          //첫번째 내용 콘텐츠 애니메이
      }else if(scroll>=h1 && scroll<h2){
          $('.subNav li:eq(1)').find('a').addClass('spy');
          //두번째 서브메뉴 활성화
          
          $('#content div:eq(1)').addClass('boxMove');
      }else if(scroll>=h2 && scroll<h3){
          $('.subNav li:eq(2)').find('a').addClass('spy');
          //세번째 서브메뉴 활성화
          
          $('#content div:eq(2)').addClass('boxMove');
      }else if(scroll>=h3){
          $('.subNav li:eq(3)').find('a').addClass('spy');
          //네번째 서브메뉴 활성화
          
          $('#content div:eq(3)').addClass('boxMove');
      }*/

      //section : 스크롤의 거리의 범위를 처리
      if(scroll<=h1_out){
        $('#content div:eq(0)').removeClass('show');
        // console.log('<h1' + ' h2 : '+h2);
      }else if(scroll>h1 && scroll<=h2){
        // console.log('h1' + ' h2 : '+h2);
        $('.subsidiary1').removeClass('show');
        $('#content div:eq(0)').addClass('show');
      }else if(scroll>h2 && scroll<=h3){
        // console.log('h2' + ' h2 : '+h2);
        if(scroll>h2_1 && scroll<=h2_2) {
          // console.log('h2_1');
          $('.subsidiary2').removeClass('show');
          $('.subsidiary1').addClass('show');
          // console.log('h2_1 end');
        } else if(scroll>h2_2 && scroll<=h2_3) {
          $('.subsidiary3').removeClass('show');
          $('.subsidiary2').addClass('show');
        } else if(scroll>h2_3 && scroll<=h3) {
          $('.news').removeClass('show');
          $('.subsidiary3').addClass('show');
        }
      }else if(scroll>h3 && scroll<=h4){
        $('.introduction').removeClass('show');
        $('.news').addClass('show');
      }else if(scroll>h4 && scroll<=h5){
        $('.recruit').removeClass('show');
        $('.introduction').addClass('show');
      }else if(scroll>h5) {
        $('.recruit').addClass('show');
      }
  });

// end of 스크롤의 좌표가 변하면.. 스크롤 이벤트
//------------------------------------------------------------------------
// scrollevent reload시 한번 동작

  function scrollEventWhenPageReload() {
    var scroll2 = $(window).scrollTop();
    //스크롤top의 좌표를 담는다

    // console.log('scrollEventWhenPageReload()');
    
    // $('.scroll2_text').text(scroll2);
    //스크롤 좌표의 값을 찍는다.

    //section : 스크롤의 거리의 범위를 처리
    if(scroll2<=h1_out){
      $('#content div:eq(0)').removeClass('show');
      // console.log('<h1' + ' h2 : '+h2);
    }else if(scroll2>h1 && scroll2<=h2){
      // console.log('h1' + ' h2 : '+h2);
      $('.subsidiary1').removeClass('show');
      $('#content div:eq(0)').addClass('show');
    }else if(scroll2>h2 && scroll2<=h3){
      // console.log('h2' + ' h2 : '+h2);
      if(scroll2>h2_1 && scroll2<=h2_2) {
        // console.log('h2_1');
        $('.subsidiary2').removeClass('show');
        $('.subsidiary1').addClass('show');
        // console.log('h2_1 end');
      } else if(scroll2>h2_2 && scroll2<=h2_3) {
        $('.subsidiary3').removeClass('show');
        $('.subsidiary2').addClass('show');
      } else if(scroll2>h2_3 && scroll2<=h3) {
        $('.news').removeClass('show');
        $('.subsidiary3').addClass('show');
      }
    }else if(scroll2>h3 && scroll2<=h4){
      $('.introduction').removeClass('show');
      $('.news').addClass('show');
    }else if(scroll2>h4 && scroll2<=h5){
      $('.recruit').removeClass('show');
      $('.introduction').addClass('show');
    }else if(scroll2>h5) {
      $('.recruit').addClass('show');
    }
  }

  scrollEventWhenPageReload();

// end of scrollevent reload시 한번 동작
//------------------------------------------------------------------------

};