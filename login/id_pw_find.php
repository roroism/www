<?
	session_start();
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION);  
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>BGFretail-아이디찾기</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/id_pw_find.css">
	<script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
</head>
<body>
  <div id="wrap">
		
		<header id="header">
			<h1>
				<a class="logo" href="../index.html">BGFretail</a>
			</h1>
		</header>  <!-- end of header -->
	
		<article>

			<ul class="find_tab">
				<li><a href="javascript:void(0)">아이디찾기</a></li>
				<li><a href="javascript:void(0)">비밀번호찾기</a></li>
			</ul>
			
			<div class="find_id tab_desc">
				<h2>아이디찾기</h2>
				<p>가입 시 입력하신 정보로 아이디를 찾아드립니다</p>
				
				<fieldset>
				<label class="hidden" for="id_name">이름</label>
					<input type="text" name="name" class="find_input" id="id_name" placeholder="이름을 입력하세요">
						<div class="telBox">
								<label class="hidden" for="id_hp1">연락처 앞3자리</label>
								<select name="hp1" id="id_hp1" title="휴대폰 앞3자리를 선택하세요." class="find_input">
									<option>010</option>
									<option>011</option>
									<option>016</option>
									<option>017</option>
									<option>018</option>
									<option>019</option>
								</select> ㅡ
							<label class="hidden" for="id_hp2">연락처 가운데3자리</label>
							<input class="find_input" type="text" id="id_hp2" name="hp2" title="연락처 가운데3자리를 입력하세요." maxlength="4" placeholder="(ex. 1111)"> ㅡ
							<label class="hidden" for="id_hp3">연락처 마지막3자리</label>		
							<input class="find_input" type="text" id="id_hp3" name="hp3" title="연락처 마지막3자리를 입력하세요." maxlength="4" placeholder="(ex. 2222)">
						</div>
					
						<input type="button" value="아이디찾기" class="find id_find">

						<!-- <div id="loadtext"></div> -->

					<div class="login_button">
						<a href="./login_form.php">로그인</a>
						<!-- <button type="submit">로그인</button> -->
						<!-- <a href="../index.html">취소</a> -->
					</div>
				</fieldset>
			
			</div>


			<div class="find_pw tab_desc">
				<h2>비밀번호찾기</h2>
				<p>가입 시 입력하신 정보로 비밀번호를 찾아드립니다</p>

				<fieldset>
					<label class="hidden" for="pw_name">이름</label>
					<input type="text" name="pw_name" id="pw_name" class="find_input find_name" placeholder="이름을 입력하세요">
					<label class="hidden" for="pw_id">아이디</label>
          <input type="text" name="pw_id" id="pw_id" class="find_input find_id" placeholder="아이디를 입력하세요">
					<div class="telBox">
						<label class="hidden" for="pw_hp1">연락처 앞3자리</label>
						<select name="hp1" id="pw_hp1" title="휴대폰 앞3자리를 선택하세요." class="find_input">
							<option>010</option>
							<option>011</option>
							<option>016</option>
							<option>017</option>
							<option>018</option>
							<option>019</option>
						</select> ㅡ
						<label class="hidden" for="pw_hp2">연락처 가운데3자리</label>
						<input class="find_input" type="text" id="pw_hp2" name="hp2" title="연락처 가운데3자리를 입력하세요." maxlength="4" placeholder="(ex. 1111)" required> ㅡ
						<label class="hidden" for="pw_hp3">연락처 마지막3자리</label>
						<input class="find_input" type="text" id="pw_hp3" name="hp3" title="연락처 마지막3자리를 입력하세요." maxlength="4" placeholder="(ex. 2222)" required>
					</div>

					<input type="button" value="비밀번호찾기" class="find pw_find">

					<!-- <div id="loadtext"></div> -->

					<div class="login_button">
						<a href="./login_form.php">로그인</a>
						<!-- <button type="submit" >로그인</button> -->
						<!-- <a href="../index.html">취소</a> -->
					</div>
				</fieldset>

			</div>

			<div class="sign_up_support">
				<p>BGFretail회원이 아니신가요?</p>
				<p>회원가입을 통해 다양한 정보를 확인하세요</p>
				<a href="../member/member_check.html">회원가입</a>
			</div>

		</article>

		<div class="modal_popup">
			<strong>회원님의 가입정보를 찾았습니다.</strong>
			<a href="javascript:void(0)" class="close_btn">닫기버튼</a>
			<div class="data_wrap">
				
			</div>
			<ul class="modal_button_wrap">
				<li><a href="./login_form.php"><span>로그인</span></a></li>
				<li><a href="./id_pw_find.php?find=pw"><span>비밀번호찾기</span></a></li>
      </ul>
		</div>
    <div class="modal_bg"></div>

	</div> 
	<!-- end of wrap -->

	<script src="../common/js/jquery-1.12.4.min.js"></script>
	<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
	<script src="./js/id_pw_find.js"></script>
</body>
</html>