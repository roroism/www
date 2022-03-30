<? 
	session_start();
    
      @extract($_POST);
      @extract($_GET);
      @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>회원가입</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/member_form.css">
	
	<script defer>
    function check_input()
    {
      if (!document.member_form.id.value)
      {
          alert("아이디를 입력하세요");    
          document.member_form.id.focus();
          return;
      }

      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");    
          document.member_form.nick.focus();
          return;
      }


      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

      document.member_form.submit(); 
        // insert.php 로 변수 전송
    }

    function reset_form() {
      // document.member_form.id.value = "";
      // document.member_form.pass.value = "";
      // document.member_form.pass_confirm.value = "";
      // document.member_form.name.value = "";
      // document.member_form.nick.value = "";
      // document.member_form.hp1.value = "010";
      // document.member_form.hp2.value = "";
      // document.member_form.hp3.value = "";
      // document.member_form.email1.value = "";
      // document.member_form.email2.value = "";
    
      // document.member_form.id.focus();
			window.location.reload();
      return;
    }

		function back_index() {
			console.log('back_index() enter');
			window.location.href='../index.html';
		}
  </script>
</head>
<body>
  <header>
    <h1>
      <a class="logo" href="../index.html">BGFretail</a>
    </h1> 
	</header>

	<article id="content">  

		<div class="sub_cont_wrap">
			<ul class="step_nav">
				<li>1. 약관동의</li>
				<li class="on">2. 정보입력</li>
				<li>3. 가입완료</li>
			</ul>
			<h2><span>회원가입</span></h2>

	  <form  name="member_form" method="post" action="insert.php"> 
		
     <table>
      <caption class="hidden">회원가입</caption>
     	<tr>
     		<th scope="col"><label for="id">아이디</label></th>
     		<td>
                 
  <?
    // if(!$userid){
 ?>        
    
     			 <input type="text" name="id" id="id" required>
			     <span id="loadtext"></span>
  <?
    // }else{
  ?>
           
                <?
                // =$row[id] 
                ?>           
            
  <?
    // }
  ?>			     
			     
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass">비밀번호</label></th>
     		<td>
     			<input type="password" name="pass" id="pass" required>
					<div class="pw_guide">
						<p>8~16자 대소문자, 숫자, 특수문자를 사용할 수 있습니다.</p>
						<div>
							<p>안전도 <span></span></p>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div class="pw_length_check">
						<span>0</span>/16
					</div>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass_confirm">비밀번호확인</label></th>
     		<td>
     			<input type="password" name="pass_confirm" id="pass_confirm" required oninput="passConfirmCheck(event)" onchange="passConfirmCheck(event)">
					 <div class="pw_confirm_guide"><span></span></div>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="name">이름</label></th>
     		<td>
     			<input type="text" name="name" id="name" required> 
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="nick">닉네임</label></th>
     		<td>
     			 <input type="text" name="nick" id="nick" required>
			     <span id="loadtext2"></span>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col">휴대폰</th>
     		<td>
     			<label class="hidden" for="hp1">전화번호앞3자리</label>
     			<select class="hp" name="hp1" id="hp1"> 
              <option value='010'>010</option>
              <option value='011'>011</option>
              <option value='016'>016</option>
              <option value='017'>017</option>
              <option value='018'>018</option>
              <option value='019'>019</option>
          </select>  - 
          <label class="hidden" for="hp2">전화번호중간4자리</label><input type="text" class="hp" name="hp2" id="hp2" oninput='checkNumber("hp2")' required> - <label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3" oninput='checkNumber("hp3")' required>
     			
     		</td>
     	</tr>
     	<tr>
     		<th scope="col">이메일</th>
     		<td>
     		  <label class="hidden" for="email1">이메일아이디</label>
     			<input type="text" id="email1" name="email1"  required> @ 
     			<label class="hidden" for="email2">이메일주소</label>
     			<input type="text" name="email2" id="email2"  required>
					<!-- <a href="javascript:void(0)">메일인증</a> -->
     		</td>
     	</tr>
     	<tr>
     		<td colspan="2">
     			<!-- <a href="#"><img src="images/button_save.gif"  onclick="check_input()"></a>&nbsp;&nbsp;
				 <a href="#"><img src="images/button_reset.gif" onclick="reset_form()"></a> -->



        <div class="sign_up_button_wrap">
          <button type="button" onclick="check_input()" class="sign_up"><span>회원가입</span></button>
          <button type="button" onclick="reset_form()" class="cancel"><span>다시쓰기</span></button>
          <button type="button" onclick="back_index()" class="back_index"><span>돌아가기</span></button>
        </div>



     		</td>
     	</tr>
     </table>

	 	</form>
		</div>
	</article>

  <footer id="footerArea">
		<div class="footer_inner">
			<a class="topMove" href="#"><span class="hidden">top</span><i class="fas fa-chevron-circle-up"></i></a>
			<div class="footer_top">
				<ul>
					<li><a href="#">개인정보처리방침</a></li>
					<li><a href="#">이용약관</a></li>
					<li><a href="#">이메일무단수집거부</a></li>
					<li><a href="#">고객센터</a></li>
				</ul>
				<ul>
					<li><a href="#"><span class="hidden">instagram</span> <i class="fab fa-instagram-square"></i></a></li>
					<li><a href="#"><span class="hidden">facebook</span> <i class="fab fa-facebook-square"></i></a></li>
					<li><a href="#"><span class="hidden">blog</span> <i class="fab fa-blogger"></i></a></li>
					<li><a href="#"><span class="hidden">twitter</span> <i class="fab fa-twitter-square"></i></a></li>
				</ul>
			</div>
			
			<div class="footer_bottom">
				<a href="index.html">BGF리테일로고</a>
				<div class="address_wrap">
					<address>서울시 강남구 테헤란로 405 (삼성동) TEL : 1577-8007</address>
					<p>COPYRIGHT&copy;BGFRetail ALL RIGHT RESERVE</p>
				</div>
				<div class="familysite">
					<a class="arrow" href="javascript:void(0)"><span class="eng_font">Family Site</span><span class="hidden">패밀리사이트더보기</span></a>
					<ul class="aList">
						<li><a href="#" title="BGF 사이트 새창에 열림" target="_blank">BGF</a></li>
						<li><a href="#" title="CU 사이트 새창에 열림" target="_blank">CU</a></li>
						<li><a href="#" title="BGF 로지스 사이트 새창에 열림" target="_blank">BGF 로지스</a></li>
						<li><a href="#" title="BGF 푸드 사이트 새창에 열림" target="_blank">BGF 푸드</a></li>
						<li><a href="#" title="BGF 네트웍스 사이트 새창에 열림" target="_blank">BGF 네트웍스</a></li>
					</ul>
				</div>
			</div>
		</div>  
	</footer>
	<script src="../common/js/jquery-1.12.4.min.js"></script>
	<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
	<script src="./js/member_form.js"></script>
	<script>
		//비밀번호확인란 비밀번호 일치 여부
		let confirmGuideEl = document.querySelector('.pw_confirm_guide span');
  	function passConfirmCheck(event) {
    if(event.target.value == '') {
      confirmGuideEl.textContent='';
      return false;
    }
    if(document.querySelector('#pass').value == document.querySelector('#pass_confirm').value) {
      confirmGuideEl.setAttribute('style','color : #008000');
      confirmGuideEl.textContent='비밀번호가 일치합니다.';
    } else {
      confirmGuideEl.setAttribute('style','color : #ff0000');
      confirmGuideEl.textContent='비밀번호가 일치하지 않습니다.';
    };
  }
  //end of 비밀번호확인란 비밀번호 일치 여부

	//전화번호 입력란 숫자만 입력하게 하기
	function checkNumber(idEl) {
    // console.log('idEl',idEl);
    // document.querySelector('#'+idEl).value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    document.querySelector('#'+idEl).value = document.querySelector('#'+idEl).value.replace(/[^0-9]/g, '');

    if(idEl == 'hp2' && document.querySelector('#'+idEl).value.length == 4) {
      document.member_form.hp3.focus();	
    }
  }
  //end of 전화번호 입력란 숫자만 입력하게 하기
	</script>
</body>
</html>


