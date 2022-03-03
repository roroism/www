$(document).ready(function(){
  
  var li_index;
  
  $('.testul li').hover(function(){

    li_index = $(this).index('.testul li');
    console.log(li_index);
    // $(this).addClass('on');
    
    if(li_index == 0) {
      // $('.testline').css({'left': '100px', 'width':'100px','transition-property':'left, width','transition-delay':'0,.5s'});
      // $('.testline').css({'left': '100px', 'width':'100px','transition-property':'left, width'});
      // $('.testline').css({'left': '100px','transition-property':'left'});
      $('.testline').css({'left': '100px','width':'100px'});
    } else if(li_index == 1) {
      // $('.testline').css({'left': '200px', 'width':'100px','transition-property':'left, width','transition-delay':'.5s, 0'});
      // $('.testline').css({'left': '200px', 'width':'100px','transition-property':'left, width'});
      // $('.testline').css({'left': '200px','transition-property':'left'});
      $('.testline').css({'left': '200px','width':'100px'});
    } else if(li_index == 2) {
    // $('.testline').css({'left': '200px', 'width':'100px','transition-property':'left, width','transition-delay':'.5s, 0'});
    // $('.testline').css({'left': '200px', 'width':'100px','transition-property':'left, width'});
      // $('.testline').css({'left': '300px','transition-property':'left'});
      $('.testline').css({'left': '300px','width':'200px'});
    } else if(li_index == 3) {
      // $('.testline').css({'left': '200px', 'width':'100px','transition-property':'left, width','transition-delay':'.5s, 0'});
      // $('.testline').css({'left': '200px', 'width':'100px','transition-property':'left, width'});
        // $('.testline').css({'left': '400px','transition-property':'left'});
        $('.testline').css({'left': '500px','width':'100px'});
    } else if(li_index == 4) {
      // $('.testline').css({'left': '200px', 'width':'100px','transition-property':'left, width','transition-delay':'.5s, 0'});
      // $('.testline').css({'left': '200px', 'width':'100px','transition-property':'left, width'});
        // $('.testline').css({'left': '500px','transition-property':'left'});
        $('.testline').css({'left': '600px','width':'100px'});
    } else if(li_index == 5) {
      // $('.testline').css({'left': '200px', 'width':'100px','transition-property':'left, width','transition-delay':'.5s, 0'});
      // $('.testline').css({'left': '200px', 'width':'100px','transition-property':'left, width'});
        // $('.testline').css({'left': '500px','transition-property':'left'});
        $('.testline').css({'left': '700px','width':'100px'});
    } 





  });


  $('.testdiv').hover(function(){
    // $('.testdiv__div').animate({left:'100px'});
    $('.testdiv__div').animate({right:0,opacity:1},'fast');
  });









});