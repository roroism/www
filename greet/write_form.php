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
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>공지사항-글쓰기</title>
	<!-- fontawesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub4/common/css/sub4common.css"/>
	<link rel="stylesheet" href="./css/write_form.css">
</head>
<body>
	<? include "../common/sub_header.html" ?>
	<!-- VISUAL -->
	<div class="visual">
    <img src="../sub4/common/images/visual_sub4.jpg" alt="visual이미지">
    <h3>커뮤니티</h3>
    <span>community</span>
  </div>

  <!-- sub_menu -->
  <div class="sub_menu">
    <ul>
      <li class="current"><a href="../greet/list.php">공지사항</a></li>
      <li><a href="../concert/list.php">보도자료</a></li>
      <li><a href="../sub4/sub4_3.html">FAQ</a></li>
      <li><a href="../sub4/sub4_4.html">홍보센터</a></li>
      <li><a href="../sub4/sub4_5.html">온라인문의</a></li>
    </ul>
  </div>

	<article id="content">
		<div class="title_area">
      <div class="line_map">
        <span>HOME</span> &gt; 커뮤니티 &gt; <strong>공지사항</strong>
      </div>
      <h2>공지사항</h2>
		</div>

		<div class="content_area">
			<h3>글쓰기</h3>
			<form  name="board_form" method="post" action="insert.php"> 
				<div class="write_form_wrap">
					<div id="write_form">
						<div id="write_row1" class="write_row">
							<dl>
								<dt class="hidden">닉네임</dt>
								<dd><?=$usernick?></dd>
							</dl>
							<div class="write_htmlWrite_wrap">
								<input type="checkbox" name="html_ok" value="y" id="write_htmlWrite">
								<label for="write_htmlWrite">HTML 쓰기</label>
							</div>
						</div>
					
						<div id="write_row2" class="write_row">
							<label for="write_title" class="hidden">제목</label>
							<input type="text" id="write_title" name="subject" placeholder="제목을 입력해 주세요.">
						</div>
					
						<div id="write_row3" class="write_row">
							<label for="write_content" class="hidden">내용</label>
							<textarea rows="10" cols="79" name="content" id="write_content" placeholder="내용을 입력해 주세요."></textarea>
						</div>
					</div>
					<div id="write_button">
						<button type="button" class="write_done_btn" onclick="this.form.submit();">등록</button>
						<a href="list.php?page=<?=$page?>" class="write_list_btn">목록</a>
					</div>
				</div>
			</form>

		</div>
		<!-- end of content_area -->
	</article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>
