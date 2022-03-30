$(document).ready(function(){

  var fragment = $('#content .content_area .welfare_tab li a.current').attr('href');   
  // console.log(fragment);
  fragment = fragment.replace('#', ' #');
  // console.log(fragment);                 
  $('#details').load(fragment).css('opacity','0').fadeTo('slow',1).clearQueue(); 

  // console.log('firstpageload');
  $('#content .content_area .welfare_tab li a').on('click', function(e) { 
    e.preventDefault();                                     
    fragment = this.href;     //this.href는 javascript문법    jquery문법으로는 $(this).attr('href');                          
    // console.log('click event');
    fragment = fragment.replace('#', ' #');  
    $('#details').load(fragment).css('opacity','0').fadeTo('slow',1).clearQueue();                          

    $('#content .content_area .welfare_tab li a.current').removeClass('current');       
    $(this).addClass('current');
  });

});