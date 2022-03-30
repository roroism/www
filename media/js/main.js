$(window).ready(function(){
  let imgHeightSize;
  let dokev_padding1per;
  let imgHeightSize2;
  let pearl_padding1per;
  let makingInfo_imgHeightSize;
  let makingInfo_rockstarmv_padding1per;

  imgHeightSize = $('#content section.about ul li:nth-child(2)').height();
  // dokev_padding1per = $('#content section.about .about_dokev').outerHeight()-$('#content section.about .about_dokev').height();
  // $('.about_dokev').css('height',imgHeightSize-dokev_padding1per+5);
  if(window.innerWidth >= 769) {
    $('.about_dokev').css('height',imgHeightSize+2);
  } else {
    $('.about_dokev').css('height','auto');
  }
  imgHeightSize2 = $('#content section.about ul li:nth-child(5)').height();
  // pearl_padding1per = $('#content section.about .about_pearl').outerHeight()-$('#content section.about .about_pearl').height();
  // $('.about_pearl').css('height',imgHeightSize2-pearl_padding1per);
  $('.about_pearl').css('height',imgHeightSize2+2);
  makingInfo_imgHeightSize = $('#content section.making_info .box_top .img_wrap').height();
  makingInfo_rockstarmv_padding1per = $('#content section.making_info .box_top dl').outerHeight()-$('#content section.making_info .box_top dl').height();
  $('#content section.making_info .box_top dl').css('height',makingInfo_imgHeightSize-makingInfo_rockstarmv_padding1per);


  //resize
  $(window).resize(function(){
    imgHeightSize = $('#content section.about ul li:nth-child(2)').height();
    // dokev_padding1per = $('#content section.about .about_dokev').outerHeight()-$('#content section.about .about_dokev').height();
    // $('.about_dokev').css('height',imgHeightSize-dokev_padding1per+5);
    if(window.innerWidth >= 769) {
      $('.about_dokev').css('height',imgHeightSize+2);
    } else {
      $('.about_dokev').css('height','auto');
    }

    imgHeightSize2 = $('#content section.about ul li:nth-child(5)').height();
    // pearl_padding1per = $('#content section.about .about_pearl').outerHeight()-$('#content section.about .about_pearl').height();
    // $('.about_pearl').css('height',imgHeightSize2-pearl_padding1per);
    $('.about_pearl').css('height',imgHeightSize2+2);

    if(window.innerWidth >= 769) {
      makingInfo_imgHeightSize = $('#content section.making_info .box_top .img_wrap').height();
      makingInfo_rockstarmv_padding1per = $('#content section.making_info .box_top dl').outerHeight()-$('#content section.making_info .box_top dl').height();
      $('#content section.making_info .box_top dl').css('height',makingInfo_imgHeightSize-makingInfo_rockstarmv_padding1per);
    } else {
      $('#content section.making_info .box_top dl').css('height','auto');
    }







  });
  //resize end


}); 