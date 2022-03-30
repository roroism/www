var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var responseObject;

xhr.onload = function() {                       // When readystate changes
  responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
  $('.video_wrap iframe').attr('src',responseObject.trailers[0].video_path);
  $('.trailers_wrap > div dl dt').text(responseObject.trailers[0].title);
  $('.trailers_wrap > div dl dd').text(responseObject.trailers[0].des);



};

xhr.open('GET', './data/trailers_data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

//모달
$(document).ready(function(){
  
  //--------------modal
  var newContent='';

  $(document).on('click','.community_video_list li a',function(e){
      e.preventDefault();

      newContent='';
      var ind = $(this).index('.community_video_list li a');
      // console.log(ind);
      // sub_benefit_length = responseObject.card[ind].sub_benefit.length;

      // $('.modal_bg').fadeIn('fast');
      $('.modal_bg').css('display','block');
      // $('.modal_popup').fadeTo('fast', 1);
      $('.modal_popup').css('display', 'block');

      newContent += '<strong>Community Video</strong><a href="javascript:void(0)" class="close_btn">닫기버튼</a><div><div class="video_wrap">';
      // youtube iframe
      newContent += '<iframe src="'+ responseObject.communityvideo[ind].video_path +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
      // dl tag
      newContent += '<dl><dt>'+ responseObject.communityvideo[ind].title + '</dt><dd>' + responseObject.communityvideo[ind].des + '</dd><dd>' + responseObject.communityvideo[ind].des2 + '</dd></dl></div>';
      // newContent += '<p>' + responseObject.card[ind].title + '</p><span>' + responseObject.card[ind].company + '</span></div>';
      // newContent += '<ul class="modal_description"><li><dl><dt>연회비</dt><dd>' + responseObject.card[ind].fee + '</dd></dl></li>';
      // newContent += '<li><dl><dt>기준실적</dt><dd>' + responseObject.card[ind].standard + '</dd></dl></li>';
      // newContent += '<li><dl><dt>혜택요약</dt><dd>' + responseObject.card[ind].main_benefit + '</dd></dl></li></ul>';
      // if(sub_benefit_length >= 1) {
      //   newContent += '<ul class="modal_description2">';
      //   for(var i = 0; i < sub_benefit_length; i++) {
      //     newContent += '<li>' + responseObject.card[ind].sub_benefit[i] + '</li>';
      //   }
      //   newContent += '</ul></div>'
      // } else {
      //   newContent += '</div>';
      // }

    
      $('.modal_popup').html(newContent);
      //console.log(responseObject); 

      $('.close_btn, .modal_bg').click(function(e){
        e.preventDefault();
        // $('.modal_popup').hide();
        $('.modal_popup').css('display','none');
        // $('.modal_bg').hide();
        $('.modal_bg').css('display','none');
        $('.modal_popup').html('');
      });
      // $('.modal_bg').click(function(e){
      //   e.preventDefault();
      //   $('.modal_popup').hide();
      //   $('.modal_bg').hide();
      // });
  });
  //--------------modal end

  //--------------trailers video select
  $(document).on('click','.trailers_wrap ul li a',function(e){
    e.preventDefault();

    var ind2 = $(this).index('.trailers_wrap ul li a');
    // console.log('ind2',ind2);
    $('.video_wrap iframe').attr('src',responseObject.trailers[ind2].video_path);
    $('.trailers_wrap > div dl dt').text(responseObject.trailers[ind2].title);
    $('.trailers_wrap > div dl dd').text(responseObject.trailers[ind2].des);

  });
  //--------------trailers video select end

});