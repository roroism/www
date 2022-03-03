var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var responseObject;

xhr.onload = function() {                       // When readystate changes
 
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    //--------------page
    // var pageLoadContent='';
    // var pageLoadContent_length;
    // var cu_benefit;


    // pageLoadContent_length = responseObject.card.length;

    // pageLoadContent += '<ul>';
    // for(var j = 0; j < pageLoadContent_length; j++) {
    //   console.log('j : '+j);
    //   pageLoadContent += '<li><p>' + responseObject.card[j].title + '</p>';
    //   pageLoadContent += '<img src="' + responseObject.card[j].path + '" alt="' + responseObject.card[j].title + '" />';
    //   pageLoadContent += '<span>(연회비 '+ responseObject.card[j].fee +')</span>';
      // if(responseObject.card[j].cu_benefit.length == 0) {
      //   break;
      // } else if(responseObject.card[j].cu_benefit.length == 1) {
      //   pageLoadContent += '<p>' + responseObject.card[j].cu_benefit[0] + '</p>';
      // } else if(responseObject.card[j].cu_benefit.length >= 2) {
      //   pageLoadContent += '<p>' + responseObject.card[j].cu_benefit[0] + '</p>';
      //   pageLoadContent += '<p>' + responseObject.card[j].cu_benefit[1] + '</p>';
      // }
    //   pageLoadContent += '<p>' + responseObject.card[j].cu_benefit[0] + '</p>';
    //   pageLoadContent += '<p>' + responseObject.card[j].cu_benefit[1] + '</p>';
    //   console.log('cu_benefit : ' + responseObject.card[j].cu_benefit[0]);
    //   console.log('cu_benefit : ' + responseObject.card[j].cu_benefit[1]);
    //   pageLoadContent += '<a class="button_more" href="#">자세히 보기<i class="fas fa-arrow-right"></i></a></li>';
    // }
    // pageLoadContent += '</ul>';
    // document.getElementById('page-load').innerHTML = pageLoadContent;
};

xhr.open('GET', './data/cf_data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다






//모달
$(document).ready(function(){
  
  //--------------modal
  var newContent='';

  $(document).on('click','.cf_list a',function(e){
      e.preventDefault();

      newContent='';
      var ind = $(this).index('.cf_list a');
      // console.log(ind);
      // sub_benefit_length = responseObject.card[ind].sub_benefit.length;

      $('.modal_bg').fadeIn('fast');
      $('.modal_popup').fadeIn('slow');

      newContent += '<strong>광고 영상</strong><a href="javascript:void(0)" class="close_btn">닫기버튼</a><div class="video_wrap">';
      // youtube iframe
      newContent += '<iframe src="'+ responseObject.cf[ind].video_path +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
      // dl tag
      newContent += '<dl><dt>'+ responseObject.cf[ind].title + '</dt><dd>' + responseObject.cf[ind].des + '</dd></dl>';
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
        // console.log('click');
        // $(".modal_popup iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $('.modal_popup').hide();
        $('.modal_bg').hide();
        $('.modal_popup').html('');
      });
      // $('.modal_bg').click(function(e){
      //   e.preventDefault();
      //   $('.modal_popup').hide();
      //   $('.modal_bg').hide();
      // });
  });
  //--------------modal end

});