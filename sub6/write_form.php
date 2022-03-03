<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    //새글쓰기 =>  $table


	include "../lib/dbconn.php";

	if ($mode=="modify") //수정 글쓰기면
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];
		$item_division    = $row[recruitment_division];
    $item_start    = $row[start_date];
    $item_end    = $row[end_date];


		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?
	if($mode=="modify") { // 수정 글쓰기면
?>
		<title>모집공고-수정하기</title>
<?
	} else {
?>
		<title>모집공고-글쓰기</title>
<?
	}
?>
	<!-- fontawesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./common/css/sub6common.css"/>
	<link rel="stylesheet" href="./css/sub6_content3_write_form.css">

</head>
<body>
	<? include "../common/sub_header.html" ?>
	<div class="visual">
		<img src="./common/images/sub6visual.jpg" alt="채용안내비주얼이미지">
		<h3>채용안내</h3>
    <span>recruitment guide</span>
  </div>

	<!-- sub_menu -->
	<div class="sub_menu">
		<ul>
      <li><a href="./sub6_1.html">모집과정</a></li>
      <li><a href="./sub6_2.html">복리후생</a></li>
      <li class="current"><a href="./sub6_3.php">모집공고</a></li>
    </ul>
  </div>

	<article id="content">
		<div class="title_area">
      <div class="line_map">
				<span>HOME</span> &gt; 채용안내 &gt; <strong>모집공고</strong>
      </div>
      <h2>모집공고</h2>
		</div>

		<div class="content_area">
<?
	if($mode=="modify") { // 수정 글쓰기면
?>
			<h3>수정하기</h3>
			<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>" enctype="multipart/form-data"> 
			<!-- 파일 첨부시에는  enctype="multipart/form-data" 이 첨부되어야 합니다.-->
<?
	} else {
?>
			<h3>글쓰기</h3>
			<form  name="board_form" method="post" action="insert.php?table=<?=$table?>" enctype="multipart/form-data"> 
<?
	}
?>
				<div class="write_form_wrap">
					<div id="write_form">
<?
	if( $userid && ($mode != "modify") )
	{   //새글쓰기 에서만 HTML 쓰기가 보인다
?>
						<div id="write_row1" class="write_row">
							<dl>
								<dt class="hidden">닉네임</dt>
								<dd><?=$usernick?></dd>
							</dl>
							<div class="write_htmlWrite_wrap">
								<input type="checkbox" name="html_ok" value="y" id="write_htmlWrite">
								<label for="write_htmlWrite">HTML 쓰기</label>
							</div>
<?
	} else { // 수정하기 시
?>	
						<div id="write_row1_modify" class="write_row">
							<dl>
								<dt class="hidden">닉네임</dt>
								<dd><?=$usernick?></dd>
							</dl>
<?
	}
?>
						</div><!-- write_row1 -->

						<div id="write_row_date" class="write_row">
							<label for="write_division">채용구분</label>
							<select id="write_division" name="recruitment_division">
<?
						if($userid && ($mode != "modify")) { //새글쓰기
?>
							<option value='수시'>수시</option>
							<option value='공채'>공채</option>
<?
						} else {	// 수정하기
							if($item_division == '수시') {
?>
								<option value='수시' selected>수시</option>
								<option value='공채'>공채</option>
<?
							} else if($item_division == '공채') {
?>
								<option value='수시'>수시</option>
								<option value='공채' selected>공채</option>
<?
							}
						}
?>
							</select>

							<label for="write_start_date">채용기간</label>
							<input type="datetime-local" id="write_start_date" name="start_date"  value="<?=$item_start?>">
							<input type="datetime-local" id="write_end_date" name="end_date"  value="<?=$item_end?>">
						</div>

						<div id="write_row2" class="write_row">
							<label for="write_title" class="hidden">제목</label>
							<input type="text" id="write_title" name="subject" placeholder="제목을 입력해 주세요." value="<?=$item_subject?>">
						</div>

						<div id="write_row3" class="write_row">
							<label for="write_content" class="hidden">내용</label>
							<textarea rows="10" cols="79" name="content" id="write_content" placeholder="내용을 입력해 주세요."><?=$item_content?></textarea>
						</div>

						<div id="write_row4" class="file_uploader_wrap">
							<strong> 이미지파일1 </strong>
			        <div class="file_selecter_wrap"><input type="file" name="upfile[]"></div>
						

<? 	if ($mode=="modify" && $item_file_0)
	{
?>
							<div class="delete_ok">
								<span>
									<?=$item_file_0?> 파일이 등록되어 있습니다.
								</span>
								<label for="delete_img0" class="hidden">첫번째 이미지삭제</label>
								<div class="delete_checkbox_wrap">
									<input type="checkbox" name="del_file[]" value="0" id="delete_img0"> 삭제
								</div>
							</div>
<?
	}
?>
						</div>  <!-- write_row4 end -->

						<div id="write_row5" class="file_uploader_wrap">
							<strong> 이미지파일2 </strong>
			        <div class="file_selecter_wrap"><input type="file" name="upfile[]"></div>
						
<? 	if ($mode=="modify" && $item_file_1)
	{
?>
							<div class="delete_ok">
								<span>
									<?=$item_file_1?> 파일이 등록되어 있습니다.
								</span>
								<label for="delete_img1" class="hidden">두번째 이미지삭제</label>
								<div class="delete_checkbox_wrap">
									<input type="checkbox" name="del_file[]" value="1" id="delete_img1"> 삭제
								</div>
							</div>

<?
	}
?>
						</div> <!-- write_row5 end -->

						<div id="write_row6" class="file_uploader_wrap">
							<strong> 이미지파일3 </strong>
			        <div class="file_selecter_wrap"><input type="file" name="upfile[]"></div>
						
<? 	if ($mode=="modify" && $item_file_2)
	{
?>
							<div class="delete_ok">
								<span>
									<?=$item_file_2?> 파일이 등록되어 있습니다.
								</span>
								<label for="delete_img2" class="hidden">세번째 이미지삭제</label>
								<div class="delete_checkbox_wrap">
									<input type="checkbox" name="del_file[]" value="2" id="delete_img2"> 삭제
								</div>
							</div>
<?
	}
?>
						</div> <!-- write_row6 end -->
					</div>
					<div id="write_button">
						<button type="button" class="write_done_btn" onclick="check_input()">등록</button>
						<a href="sub6_3.php?page=<?=$page?>" class="write_list_btn">목록</a>
					</div>
				</div>
				<!-- end of write_form_wrap -->
			</form>
			
		</div>
		<!-- end of content_area -->
	</article>
	<? include "../common/sub_footer.html" ?>
	<script>
		function check_input() {

			if (!document.board_form.subject.value) {
					alert("제목을 입력하세요!");    
					document.board_form.subject.focus();
					return;
			}

			// if (!document.board_form.content.value) {
			// 		alert("내용을 입력하세요!");    
			// 		document.board_form.content.focus();
			// 		return;
			// }
			if (!document.board_form.start_date.value) {
					alert("채용시작일을 입력하세요!");    
					document.board_form.start_date.focus();
					return;
			}
			if (!document.board_form.end_date.value) {
					alert("채용마감일을 입력하세요!");    
					document.board_form.end_date.focus();
					return;
			}
			if(document.board_form.start_date.value >= document.board_form.end_date.value) {
				alert('채용 종료일은 시작일 이후가 되어야 합니다.');
				document.board_form.end_date.focus();
				return;
			}
			document.board_form.submit();
		}
	</script>
</body>
</html>
