$(document).ready(function(){
  //nick 중복검사		 
  $("#nick").keyup(function() {    // id입력 상자에 id값 입력시
    var nick = $('#nick').val();

    $.ajax({
        type: "POST",
        url: "check_nick.php",
        data: "nick="+ nick,  
        cache: false, 
        success: function(data)
        {
            $("#loadtext2").html(data);
        }
    });
  });	
});