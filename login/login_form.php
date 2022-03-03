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
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>로그인</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/login.css">
</head>
<body>
	<div id="wrap">
		<header id="header">
			<h1>
				<a class="logo" href="../index.html">BGFretail</a>
			</h1>
		</header>  <!-- end of header -->

		<article>
			<h2>로그인</h2>
			<p>아이디와 비밀번호를 입력해 주세요</p>
			<form  name="member_form" method="post" action="login.php"> 
				<div id="id_pw_input">
					<ul>
						<li>
							<!-- <label for="id">아이디</label> -->
							<input type="text" name="id" class="login_input" placeholder="아이디를 입력하세요" required>
						</li>
						<li>
						<!-- <label for="id">비밀번호</label> -->
							<input type="password" name="pass" class="login_input" placeholder="비밀번호를 입력하세요" required>
						</li>
					</ul>						
				</div>
				<div class="login_support">
					<!-- <div>
						<input type="text" id="save_id">
						<label for="save_id">아이디 저장</label>
					</div> -->
					<ul>
						<li><a href="./id_pw_find.php?find=id">아이디 찾기</a></li>
						<li><a href="./id_pw_find.php?find=pw">비밀번호 찾기</a></li>
						<!-- <li><a href="javascript:void(0)">회원가입</a></li> -->
					</ul>
				</div>
				<div id="login_button">
					<button type="submit" >로그인</button>
					<a href="../index.html">취소</a>
				</div>
			</form>
			<div class="sign_up_support">
				<p>BGFretail회원이 아니신가요?</p>
				<p>회원가입을 통해 다양한 정보를 확인하세요</p>
				<a href="../member/member_check.html">회원가입</a>
			</div>
		</article>
	</div>
</body>
</html>
