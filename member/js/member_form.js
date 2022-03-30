$(document).ready(function(){
  //id 중복검사
  $("#id").keyup(function() {    // id입력 상자에 id값 입력시
    // console.log('this.value.length', this.value.length);
    // if(this.value.length != 0) {
    var id = $('#id').val(); //a
    console.log('#id');
    $.ajax({
        type: "POST",
        url: "check_id.php",
        data: "id="+ id,  
        cache: false, 
        success: function(data)
        {
            //data => echo "문자열" 이 저장된
            $("#loadtext").html(data);
        }
    });
    // }
  });
   
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

  // const regExp1 = /[0-9]/g; 
  // const regExp2 = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
  // const regExp3 = /[a-z]/g;
  // const regExp4 = /[A-Z]/g;
  // const regExp1 = /^[0-9]*$/g; 
  const regExp1 = /[0-9]/; 
  // const regExp2 = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/;
  // const regExp2 = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  const regExp2 = /[^\w\sㄱ-힣]|[\_]/;
  const regExp3 = /[a-z]/;
  const regExp4 = /[A-Z]/;

  let passCount;
  let passValueLength;
  let guideText_1;
  let guideText_2;
  $('#pass').keyup(function(e) {

  // function passCheck() {
    
    if (e.keyCode == '16') {
      return false;
    }

    //자리수체크 및 출력
    // console.log('this.value.length', this.value.length);
    $('.pw_length_check span').text(this.value.length);
    //end of 자리수체크 및 출력


    // console.log('pass keyup');
    // 비밀번호 8~16자리
    // 숫자 포함?
    // 특수문자 포함?
    // 대소문자 모두 포함?
    passCount = 4;
    let passValue = $('#pass').val();
    // console.log('passValue',passValue);
    passValueLength = passValue.length;

    //자리수 0 체크
    if(passValueLength == 0) {
      // console.log('자리수 0 체크');
      $('.pw_guide > div > p > span').text('');
      $('.pw_guide > div > span').removeClass();
      return false;
    }
    // 숫자 체크
    if(regExp1.test(passValue)){ 
      // console.log('숫자 체크 true');
      // return true;
    } else { 
      // console.log('숫자 체크 false');
      passCount--;
      // return false;   
    }
    // 특수문자 체크
    if(regExp2.test(passValue)){ 
      // console.log('특수문자 체크 true');
      // return true;
    } else { 
      // console.log('특수문자 체크 false');
      passCount--;
      // return false;   
    }
    // 대소문자 체크
    if(regExp3.test(passValue) && regExp4.test(passValue)){ 
      // console.log('대소문자 체크 true');
      // return true;
    } else { 
      // console.log('대소문자 체크 false');
      passCount--;
      // return false;   
    }
    // 영문자가 한글자라도 있는지 체크 (필수)
    if(regExp3.test(passValue) || regExp4.test(passValue)){ 
      // console.log('영문자가 한글자라도 있는지 체크 (필수) true');
      // return true;
    } else { 
      // console.log('영문자가 한글자라도 있는지 체크 (필수) false');
      passCount = 0;
      // guideText_1 = '불가'
      guideText_2 = '영문자가 반드시 포함되어야 합니다.'
      // return false;   
    }
    // 문자열 길이 체크 (필수)
    if(passValueLength >= 8 && passValueLength <= 16){ 
      // console.log('문자열 길이 체크 (필수) true');

      // return true;
    } else { 
      // console.log('문자열 길이 체크 (필수) false');
      passCount = 0;
      // guideText_1 = '불가'
      guideText_2 = '비밀번호는 8~16자 사이로 작성해야합니다.'
      // return false;   
    }

    // console.log('passCount', passCount);
    switch(passCount) {
      case 4 :
        $('.pw_guide > div > span').removeClass().addClass('blue');
        
        $('.pw_guide > div > p > span').removeClass().addClass('blue');
        $('.pw_guide > div > p > span').text('안전');
        break;
      case 3 :
        $('.pw_guide > div > span').removeClass();
        $('.pw_guide > div > span:nth-of-type(1)').addClass('green');
        $('.pw_guide > div > span:nth-of-type(2)').addClass('green');
        $('.pw_guide > div > span:nth-of-type(3)').addClass('green');

        $('.pw_guide > div > p > span').removeClass().addClass('green');
        $('.pw_guide > div > p > span').text('적정');
        break;
      case 2 : 
        $('.pw_guide > div > span').removeClass();
        $('.pw_guide > div > span:nth-of-type(1)').addClass('yellow');
        $('.pw_guide > div > span:nth-of-type(2)').addClass('yellow');

        $('.pw_guide > div > p > span').removeClass().addClass('yellow');
        $('.pw_guide > div > p > span').text('보통');
        break;
      case 1 : 
        $('.pw_guide > div > span').removeClass();
        $('.pw_guide > div > span:nth-of-type(1)').addClass('orange');

        $('.pw_guide > div > p > span').removeClass().addClass('orange');
        $('.pw_guide > div > p > span').text('약함');
        break;
      default :
        $('.pw_guide > div > span').removeClass();
        $('.pw_guide > div > span:nth-of-type(1)').addClass('red');

        $('.pw_guide > div > p > span').removeClass().addClass('red');
        $('.pw_guide > div > p > span').text('불가');
        break;
    }

  // }
  });

  //family site
  $('.familysite .arrow').toggle(function(e){
    e.preventDefault(); //href="#" 속성을 막아주는..메소드
    $(this).addClass('open');
    $('.familysite .aList').slideDown('fast');
  }, function(e){
    e.preventDefault(); //href="#" 속성을 막아주는..메소드
    $(this).removeClass('open');
    $('.familysite .aList').slideUp('fast');
  });

  //tab키 처리
  $('.familysite .arrow').on('focus', function () {        
    $('.familysite .aList').slideDown('fast');	
  });
  $('.familysite .aList li:last a').on('blur', function () {        
    $('.familysite .aList').slideUp('fast');
  });  
  //family site end





});
