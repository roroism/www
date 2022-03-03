<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  $item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];


	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

  $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i]) //업로드한 파일이 존재하면 0 1 2
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
            //GetImageSize(서버에 업로드된 파일 경로 파일명)
              // => 파일의 너비와 높이값, 종류
			$image_width[$i] = $imageinfo[0];  //파일너비
			$image_height[$i] = $imageinfo[1]; //파일높이
			$image_type[$i]  = $imageinfo[2];  //파일종류

        if ($image_width[$i] > 785) //785는 이 게시판 레이아웃의 최대 너비
				$image_width[$i] = 785;
		}
		else
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>보도자료-글보기</title>
	<!-- fontawesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub4/common/css/sub4common.css"/>
	<link rel="stylesheet" href="./css/images_list_view.css">
	<script>
		//댓글 입력 버튼
		function check_input() {
			if (!document.ripple_form.ripple_content.value)
			{
				alert("댓글의 내용을 입력하세요!");    
				document.ripple_form.ripple_content.focus();
				return;
			}
			document.ripple_form.submit();
  	}

    function del(href) 
    {
        if(confirm("한번 삭제한 자료는 복구할 수 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
    }
	</script>
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
      <li><a href="../greet/list.php">공지사항</a></li>
      <li class="current"><a href="../concert/list.php">보도자료</a></li>
      <li><a href="../sub4/sub4_3.html">FAQ</a></li>
      <li><a href="../sub4/sub4_4.html">홍보센터</a></li>
      <li><a href="../sub4/sub4_5.html">온라인문의</a></li>
    </ul>
  </div>

	<article id="content">
		<div class="title_area">
      <div class="line_map">
        <span>HOME</span> &gt; 커뮤니티 &gt; <strong>보도자료</strong>
      </div>
      <h2>보도자료</h2>
		</div>

		<div class="content_area">

			<div id="view_title">
					<div id="view_title1"><?= $item_subject ?></div>
					<div id="view_title2">
						<dl>
							<dt>작성자</dt>
							<dd><?= $item_nick ?></dd>
							<dt>등록일</dt>
							<dd><?= $item_date ?> </dd>
						</dl>

						<dl>
							<dt>조회</dt>
							<dd><?= $item_hit ?></dd>
						</dl>
					</div>	
			</div>

		<div id="view_content">
<?
	for ($i=0; $i<3; $i++)  //업로드된 이미지를 출력한다
	{
		if ($image_copied[$i])	//첨부된 파일이 있으면
		{
			$img_name = $image_copied[$i];
			$img_name = "./data/".$img_name; 
             // ./data/2019_03_22_10_07_15_0.jpg
			$img_width = $image_width[$i];
			
			echo "<img src='$img_name' width='$img_width'>"."<br><br>";
		}
	}
?>
			<?= $item_content ?>
		</div>

		<!-- 댓글 보기, 삭제 버튼 -->
		<div id="ripple">
<?
			$sql = "select * from free_ripple where parent='$item_num'";
	    $ripple_result = mysql_query($sql);

			while ($row_ripple = mysql_fetch_array($ripple_result)) {
				$ripple_num     = $row_ripple[num];
				$ripple_id      = $row_ripple[id];
				$ripple_nick    = $row_ripple[nick];
				$ripple_content = str_replace("\n", "<br>", $row_ripple[content]);
				$ripple_content = str_replace(" ", "&nbsp;", $ripple_content);
				$ripple_date    = $row_ripple[regist_day];
?>
			<div class="comment_area">
				<div class="ripple_writer_title">
					<ul>
						<li class="comment_nick"><?=$ripple_nick?></li>
						<li class="comment_date"><?=$ripple_date?></li>		 
<? 
				if($userid=="admin" || $userid==$ripple_id || $userlevel==1) {
?>
						<li class="comment_delete">
							<a href='delete_ripple.php?table=<?=$table?>&num=<?=$item_num?>&ripple_num=<?=$ripple_num?>'>삭제</a> 
						</li>
<? 
				}
?>
					</ul>
				</div>
				<p class="ripple_content"> <span><?=$ripple_content?></span>  </p>
			</div> <!-- comment_area -->
<?
			}
?>	
		<!-- 댓글 보기, 삭제 버튼 end -->
		<!-- 댓글 입력영역 및 입력버튼 -->
<?
	if($userid) {
?>
			<form  name="ripple_form" method="post" action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>">  
			<div id="ripple_box">
				<div id="ripple_box_inner">
					<div class="write_comment_top_area"><strong><?=$usernick?></strong></div>
					<textarea rows="5" cols="65" name="ripple_content" placeholder="댓글을 입력해주세요."></textarea>
					<div class="write_comment_bottom_area"><a href="javascript:void(0)" onclick="check_input()">등록</a></div>
				</div>
			</div>
			</form>
		</div> <!-- end of ripple -->
<?
	}
?>
		<!-- 댓글 입력영역 및 입력버튼 end -->

		<!-- 목록버튼 -->
		<div id="view_button">
				<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
<? 
	if($userid==$item_id || $userid=="admin" || $userlevel==1 )
	{
?>
			<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>">수정</a> <!-- 수정버튼 -->
			<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">삭제</a> <!-- 삭제버튼 -->
<?
	}
?>
<? 
	if($userid)  //로그인이 되면 글쓰기
	{
?>
			<a href="write_form.php?table=<?=$table?>">글쓰기</a>  <!-- 글쓰기버튼 -->
<?
	}
?>
			</div>
		</div>
		<!-- end of content_area -->
	</article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>
