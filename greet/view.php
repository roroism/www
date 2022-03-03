<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

    //세션변수
    //view.php?num=7&page=1

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  $item_nick    = $row[nick];
	$item_hit     = $row[hit];

  $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>공지사항-글보기</title>
	<!-- fontawesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub4/common/css/sub4common.css"/>
	<link rel="stylesheet" href="./css/view.css">
	<script>
		function del(href) { // href = delete.php?num=7
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
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
				<?= $item_content ?>
			</div>

			<div id="view_button">
					<a href="list.php?page=<?=$page?>">목록</a> <!-- 목록버튼 -->
<? 
		if($userid==$item_id || $userlevel==1 || $userid=="admin")
		{
?>			
			<a href="modify_form.php?num=<?=$num?>&page=<?=$page?>">수정</a> <!-- 수정버튼 -->
			<a href="javascript:del('delete.php?num=<?=$num?>')">삭제</a>  <!-- 삭제버튼 -->
<?
		}
?>
<? 
		if($userid )  //로그인이 되면 글쓰기
		{
?>
			<a href="write_form.php">글쓰기</a> <!-- 글쓰기버튼 -->
<?
		}
?>
			</div>
		</div>
	</article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>
